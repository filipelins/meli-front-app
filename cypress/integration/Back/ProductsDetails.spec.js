///<reference types="cypress"/>
const hasPropertys = (body) => {
    expect(body).has.property('author');
    expect(body).has.property('item');
}

const validateAuthor = ({author}) => {
    expect(author).has.property('name');
    expect(author).has.property('lastname');
    expect(author.name).eq('Filipe')
    expect(author.lastname).eq('Lins')
}

const validateItems = ({item}) => {
    expect(item).has.property('condition');
    expect(item).has.property('description');
    expect(item).has.property('free_shipping');
    expect(item).has.property('id');
    expect(item).has.property('picture');
    expect(item).has.property('price');
    expect(item).has.property('sold_quantity');
    expect(item).has.property('title');
}

describe('Lista detalhes do produto', ()=> {
    it('Valida o status da request e parametros do response', ()=> {
        cy.server()
        cy.request({
                method:'GET',
                url:'http://localhost:3001/api/items/MLA838607077',
        }
        ).then(resp => {
            const { body } = resp;
            expect(resp.status).be.equals(200);
            hasPropertys(body);
            validateAuthor(body);
            validateItems(body);
        })
    })
})