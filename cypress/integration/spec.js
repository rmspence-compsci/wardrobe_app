/// <reference types="cypress" />

it('works', () => {
    cy.visit('/')
    cy.contains("Today's Outfit")
      .should('be.visible')
  })