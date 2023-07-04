describe('login page', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:3000')
    cy.get('[href="/dashboard"]').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('1234')
    cy.get('[data-cy="login_button"]').click()
    cy.get('h1')
  })
})

// Refactor: Testing the login flow only once and resetting database https://docs.cypress.io/guides/end-to-end-testing/testing-your-app#Logging-in