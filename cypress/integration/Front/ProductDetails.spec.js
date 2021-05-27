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

const breadCrumbIsCreated = () => {
    cy.get('.styles_breadCrumb__2v8S3').should('have.length', 1)
}

describe('Detalhes do produto', ()=> {
    
    let product = {};

    it('Efetua uma busca e redireciona para a listagem', ()=> {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy="search-input"]').type('Iphone');
        cy.get('[data-cy=search-button-action]').click();
    })

    it('Deve estar na url /items?search=Iphone', ()=> {        
        cy.url().should('eq', 'http://localhost:3000/items?search=Iphone')
    })

    it('Realiza a busca de um produto', ()=> {
        cy.server()
        cy.request({
                method:'GET',
                url:'http://localhost:3001/api/items',
                qs: {
                    productName: "iphone"
            }}
        ).then(resp => {
            hasPropertys(resp.body);
            Cypress.env('product',resp.body[0] );
        })
    })

    it('Seleciona item', ()=> {
        cy.get('[data-cy=item-MLA922358125]').click();
        cy.url().should('eq', 'http://localhost:3000/items/MLA922358125')
    })

    it('Should tela de busca', ()=> {
        // ToDO: Implements
    })
})