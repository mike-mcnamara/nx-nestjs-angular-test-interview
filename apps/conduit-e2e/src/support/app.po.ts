export const getLandingPageBannerName = () =>
  cy.get('div.home-page h1.logo-font');
export const getLandingPageBannerContent = () => cy.get('div.home-page p');
export const getEmailInput = () => cy.get('[formcontrolname="email"]');
export const getPasswordInput = () => cy.get('[formcontrolname="password"]');
export const getRegisterLink = () => cy.get('[routerlink="/register"]');
export const getSigninLink = () => cy.get('[routerlink="/login"]');
export const getSettingsLink = () => cy.get('[routerlink="/settings"]');
export const getTypeSubmit = () => cy.get('[type="submit"]');
export const getSignoutButton = () => cy.get('.btn.btn-outline-danger');
export const getUserNameInput = () => cy.get('[formcontrolname="username"]');
export const getConfirmationButton = () => cy.get('.close-button');
