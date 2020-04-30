describe('Request access to Image Carousel component html.', () => {
  it('Visits the hosted URL for the Image Carousel', () => {
    cy.visit('http://localhost:3000');

    cy.contains('PreviousNext').click();
  });
});
