describe('blog post', () => {

beforeEach(() => {
  cy.visit('http://localhost:3000')
    cy.get('[href="/dashboard"]').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('1234')
    cy.get('[data-cy="login_button"]').click()
})

  it('should submit blog post from user', () => {
    cy.get('[data-cy="blog_title"]').type('This is my title')
    cy.get('[data-cy="blog_desc"]').type('This is my description')
    cy.get('[data-cy="blog_image"]').type('https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg')
    cy.get('[data-cy="blog_content"]').type('This is my content for my blog post')
    cy.get('[data-cy="post_blog"]').click().wait(5000)
    cy.get(':nth-child(2) > [data-cy="delete_post"]').click()
    
  })
})