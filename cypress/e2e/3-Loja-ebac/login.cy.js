/// <reference types='cypress'/>

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
    });
    
    it('Efetuar login com sucesso', () => {
        cy.get('#username').type('eduferr@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome eduferr')        
    });

    it('Apresentar mensagem de erro para usuário inválido', () => {
        cy.get('#username').type('edutestando@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Apresentar mensagem de erro para senha inválida', () => {
        cy.get('#username').type('eduferr@teste.com.br')
        cy.get('#password').type('teste@testando')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail eduferr@teste.com.br está incorreta')         
    });
    

    it('Efetuar logout com sucesso', () => {
        cy.get('#username').type('eduferr@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        //Logout do usuário
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
        cy.get('#primary-menu > .menu-item-629 > a').should('exist')                
    });


    afterEach(() => {
        cy.screenshot()
    });
});