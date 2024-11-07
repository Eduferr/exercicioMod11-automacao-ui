/// <reference types='cypress'/>

import { faker, NameModule } from '@faker-js/faker';

describe('Funcionalidade: produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });
    
    it('Selecionar um produto da lista para compra', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(3) > .page-numbers').click()
        cy.get('.product-block > .block-inner > .image > .product-image > .image-hover').eq(1).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').should('exist')
        //Acessando o carrinho
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.woocommerce-form-login-toggle > .woocommerce-info').should('exist')        
        //Detalhes do faturamento - Usuário não cadastrado
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var empresa = faker.company.name()
        var endereco = 'Avenida Paulista'
        var cidade = 'São Paulo'
        var cep = '01010-000'
        var telefone = '11 98765-4321'
        var email = faker.internet.email()

        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#createaccount').click()
        cy.get('#account_password').type('teste@1234')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')  
    });
});