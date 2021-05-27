///<reference types="cypress"/>

const hasPropertys = (body) => {
    expect(body).has.property('author');
    expect(body).has.property('categories');
    expect(body).has.property('items');
}

const validateAuthor = (body) => {
    expect(body.author).has.property('name');
    expect(body.author).has.property('lastname');
    expect(body.author).has.property('gender');
}

describe('Search Bar', ()=> {

    it('Realiza uma  busca', ()=> {
        cy.visit('http://localhost:3000');
        cy.get('[data-cy="search-input"]').type('Iphone');
        cy.get('[data-cy=search-button-action]').click();
    })

    it('Deve estar na url /items?search=Iphone', ()=> {        
        cy.url().should('eq', 'http://localhost:3000/items?search=Iphone')
    })


    it('Retorna para a home', ()=> {        
        cy.get('[data-cy=home-button-action]').click();
        cy.url().should('eq', 'http://localhost:3000/')
    })

})

