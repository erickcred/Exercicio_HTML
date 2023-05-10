/// <reference types="cypress" />

describe('Testando projeto de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Testando renderização do hrader', () => {
        cy.get('h1').contains('Agenda de contatos')
    })

    it('Testando renderização dos contato aprensentando 3', () => {

        cy.get('.contato').should('have.length', 3)
    })
})