/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('test1', () => {
    cy.get('.action-email');
  });
});
