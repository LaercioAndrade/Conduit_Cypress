/// <reference types ="cypress"/>

import cadastroElements from '../Elements/cadastroElements'
const Elements = new cadastroElements
const NavegadorUrl = Cypress.config("baseUrl")


class cadastroPage{

    acessarUrl(){
        cy.visit(NavegadorUrl)
    }

    clicarSignUp(){
        cy.get(Elements.signUp()).click();
    }

    informarusername(){
        cy.get(Elements.username()).type("TesteCy6")
    }

    informaremail(){
        cy.get(Elements.email()).type("teste@1046.com")
    }

    informarpassword(){
        cy.get(Elements.password()).type("12345678")
    }

    clicarbotao(){
        cy.route('POST', '**/users').as('getUsers')
        cy.get(Elements.buttonSignUp()).click()
    }

    validarcadastrocomsucesso(){
        cy.get(Elements.cadastrocomsucesso()).contains("conduit")   
        cy.wait('@getUsers').then((xhr) => {
            expect(xhr.status).be.eq(200);
        })
    }
}
export default cadastroPage;