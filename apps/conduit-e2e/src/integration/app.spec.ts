import {
  getLandingPageBannerContent,
  getLandingPageBannerName,
  getPasswordInput,
  getRegisterLink,
  getUserNameInput,
  getEmailInput
} from '../support/app.po';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title page', () => {
    // Function helper example, see `../support/app.po.ts` file
    getLandingPageBannerName().contains('conduit');
    getLandingPageBannerContent().contains('A place to share your knowledge.');
  });

  describe('given: user creds exist and r valid', () => {
    const signup = () => {
      const username = 'username' + Math.random();
      const email = 'email' + Math.random();
      const password = 'pw' + Math.random();
      getRegisterLink().click();
      getUserNameInput().type(username);
      getEmailInput().type(email);
      getPasswordInput().type(password);

      return {username, email, password};
    };

    it('should support sign up', () => {
      signup();
    });

    describe('signing in', () => {
      it('should support sign in', () => {
        const { username, password } = signup();
        getEmailInput().type(username)
        getPasswordInput().type(password);
      });
    })
  });
});
