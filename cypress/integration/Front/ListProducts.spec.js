const hasPropertys = (body) => {
    expect(body).has.property('author');
    expect(body).has.property('categories');
    expect(body).has.property('items');
}

const hasCreatedListProducts = () => {
    cy.get('[data-cy="card"]').should('have.length', 1);
    cy.get('[data-cy="item-MLA922358125"]').should('have.length', 1);
    cy.get('.styles_cardContainer__3dNMa').should('have.length', 4);
}

const validateDataInCard = items => {
    const { id, picture, title, price, state_name } = items;
    
    cy.get(`[data-cy=item-${id}] > [data-cy=thumb]`).find('img')
    .should('have.attr', 'src').should('include',picture)
    
    cy.get(`[data-cy=item-${id}] > .styles_details__2plPG > [data-cy=title]`)
    .should('have.text', title)

    cy.get(`[data-cy=item-${id}] > .styles_details__2plPG > .styles_infos__lIBRG > [data-cy=price]`)
    .should('have.text', price.decimals)

    cy.get(`[data-cy=item-${id}] > .styles_details__2plPG > .styles_infos__lIBRG > [data-cy=state_name]`)
    .should('have.text', state_name)
}

const breadCrumbIsCreated = () => {
    cy.get('.styles_breadCrumb__2v8S3').should('have.length', 1)
}

describe('Lista de produtos [FRONT]', ()=> {
    
    it('Efetua uma busca e redireciona para a listagem', ()=> {
        cy.visit('http://localhost:3000');
        cy.get('[data-cy="search-input"]').type('Iphone');
        cy.get('[data-cy=search-button-action]').click();
    })

    it('Deve estar na url /items?search=Iphone', ()=> {        
        cy.url().should('eq', 'http://localhost:3000/items?search=Iphone')
    })

    it('Valida o status da request e parametros do response', ()=> {
        cy.server()
        cy.request({
                method:'GET',
                url:'http://localhost:3001/api/items',
                qs: {
                    productName: "iphone"
            }}
        ).then(resp => {
            const { items } = resp.body;
            hasPropertys(resp.body);
            hasCreatedListProducts();
            breadCrumbIsCreated();
            items.map(item => validateDataInCard(item));
        })
    })

    it('Seleciona o item', ()=> {
        cy.get('[data-cy=item-MLA922358125]').click();
        cy.url().should('eq', 'http://localhost:3000/items/MLA922358125')
    })
})