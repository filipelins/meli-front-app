///<reference types="cypress"/>
const Mock = {
    id: "MLA880143053",
    price:{
        amount: 67999,
        currency: "ARS",
        decimals: "$ 67,999.00",
    },
    condition: "new",
    free_shipping: true,
    state_name: "Buenos Aires",
    picture: "https://http2.mlstatic.com/D_883371-MLA32731749246_112019-O.jpg",
    title: "Nintendo Switch 32gb Standard  Color Rojo Neón, Azul Neón Y Negro"
}

const hasPropertys = (body) => {
    expect(body).has.property('author');
    expect(body).has.property('categories');
    expect(body).has.property('items');
}

const validateAuthor = ({author}) => {
    expect(author).has.property('name');
    expect(author).has.property('lastname');
    expect(author.name).eq('Filipe')
    expect(author.lastname).eq('Lins')
}

const validateCategories = ({categories}) => {
    const mock = ["Consolas y Videojuegos", "Consolas"];
    categories.map((category, index) => {
        expect(category).eq(mock[index]);    
    })
}

const validateItems = ({items}) => {
    expect(items.length).be.equals(4);

    Object.keys(items[0]).map(key => {
        if(key !== 'price') {
            expect(items[0][key]).equals(Mock[key]);
        } 
    })

    Object.keys(items[0].price).map(key => {
        
        if(key !== 'decimals') {
            expect(items[0].price[key]).equals(Mock.price[key]);
        } else {
             // expect((items[0].price[key]).toString()).equals((Mock.price[key]).toString());
        }


    })
}

describe('Lista produtos referentes a busca', ()=> {

    it('Valida o status da request e parametros do response', ()=> {
        cy.server()
        cy.request({
                method:'GET',
                url:'http://localhost:3001/api/items',
                qs: {
                    productName: "nintendo"
            }}
        ).then(resp => {
            const { body } = resp;
            console.log(body);
            expect(resp.status).be.equals(200);
            hasPropertys(body);
            validateAuthor(body);
            validateCategories(body);
            validateItems(body);

        })
    })
})




