/// <reference types="cypress" />

it('title visible', () => {
    cy.visit('/')
    cy.contains("Today's Outfit")
      .should('be.visible')
  })
  it('weather page transition from home', () => {
    cy.visit('/');
    cy.get('more_weather_button')
      .click();
    cy.contains('Good Morning')
      .should('be.visible');
  })
  it('addClothes page transition from home', () => {
    cy.visit('/');
    cy.get('add_clothes_button')
      .click();
    cy.contains('Add Clothes')
      .should('be.visible');
  })
  it('calendar page transition from home', () => {
    cy.visit('/');
    cy.get('calendar_button')
      .click();
    cy.contains('Calendar')
      .should('be.visible');
  })
  it('saved outfits page transition from home', () => {
    cy.visit('/');
    cy.get('add_clothes_button')
      .click();
    cy.get('saved_outfits_text')
      .click();
    cy.contains('Saved Outfits')
      .should('be.visible');
  })
  it('add event page transition from home', () => {
    cy.visit('/');
    cy.get('calendar_button')
      .click();
    cy.get('add_event_text')
      .click();
    cy.contains('Add Event')
      .should('be.visible');
  })
