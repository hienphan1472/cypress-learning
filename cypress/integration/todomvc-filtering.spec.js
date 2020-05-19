/// <reference types="cypress" />

describe('todo actions', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')

        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()

    })

    it ('should filter "Active" todos', () => {
        cy.contains('Active').click()
    })
    
    
})
