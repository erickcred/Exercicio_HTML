/// <reference types="cypress" />

describe('Testando interação com contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Adicionando 2 contato', () => {
        cy.get('input[type="text"]').type('Fulano da Silva')
        cy.get('input[type="email"]').type('fulano@email.com')
        cy.get('input[type="tel"]').type('41987234123')

        cy.get('.adicionar').click()

        cy.get('input[type="text"]').type('Astoufo Fernandes')
        cy.get('input[type="email"]').type('atef@email.com')
        cy.get('input[type="tel"]').type('4188812343')

        cy.get('.adicionar').click()
    })

    it('Deve apresentar 2 contatos na lista', () => {
        cy.get('.contato').should('have.length', 2)
    })

    it('Deve selecionar e editar 1 contato', () => {
        cy.get('.edit').first().click()

        cy.get('input[type="text"]').clear().type('Fulano da Silva Souza Sauro')
        cy.get('input[type="email"]').clear().type('fulano.sas@email.com')
        cy.get('input[type="tel"]').clear().type('4198723433')

        cy.get('.alterar').click()
    })

    it('Deve deletar 1 contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    })

    it('Deve apresentar 1 contato na lista', () => {
        cy.get('.contato').should('have.length', 1)
    })
})