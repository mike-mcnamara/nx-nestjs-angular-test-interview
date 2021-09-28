export const getLandingPageBannerName = () =>
  cy.get('div.home-page h1.logo-font');
export const getLandingPageBannerContent = () => cy.get('div.home-page p');
