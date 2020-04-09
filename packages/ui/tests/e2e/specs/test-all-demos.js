describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/*/demo/context-test/ContextTest.demo.vue')
    cy.document()
      .toMatchImageSnapshot()
      // .then(() => {
      //   cy.get('.VbDemo')
      //     .toMatchImageSnapshot()
      // })
  })
})
