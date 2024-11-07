/// <reference types='cypress'/>

import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro do usuário', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
    });
    
    it('Efetuar cadastro do usuário com sucesso', () => {

        var nome      = faker.person.firstName()
        var email     = faker.internet.email(nome)
        var sobreNome = faker.person.lastName()
        var senha     = faker.internet.password()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobreNome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')        
    });
});

