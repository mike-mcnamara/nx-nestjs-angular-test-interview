export const getLandingPageBannerName = () =>
  cy.get('div.home-page h1.logo-font');
export const getLandingPageBannerContent = () => cy.get('div.home-page p');
export const getEmailInput = () => cy.get('[formcontrolname="email"]');
export const getPasswordInput = () => cy.get('[formcontrolname="password"]');
export const getRegisterLink = () => cy.get('[routerlink="/register"]');
export const getUserNameInput = () => cy.get('[formcontrolname="username"]');
