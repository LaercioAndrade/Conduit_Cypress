/* global Given, Then, When*/

import cadastroPage from '../PageObjects/cadastroPage'
const Cadastro = new cadastroPage

Given("que acesso a tela de cadastro no site", () => {
    Cadastro.acessarUrl();
    Cadastro.clicarSignUp();
}), 

When("informo os dados de cadastro", () => {
    Cadastro.informarusername();
    Cadastro.informaremail();
    Cadastro.informarpassword();
    Cadastro.clicarbotao();
}),

Then("valido se o cadastro foi realizado com sucesso", () => {
    Cadastro.validarcadastrocomsucesso();
})