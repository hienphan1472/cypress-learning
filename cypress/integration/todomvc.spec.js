/// <reference types="cypress" />

it ('should navgigate to the TodoMVC app', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')

    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")

    cy.get('.toggle').click()

    cy.contains('Clear completed').click()
})