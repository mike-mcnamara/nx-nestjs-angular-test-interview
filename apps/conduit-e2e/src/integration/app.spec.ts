import {
  getLandingPageBannerContent,
  getLandingPageBannerName,
  getPasswordInput,
  getRegisterLink,
  getUserNameInput,
  getEmailInput,
  getTypeSubmit,
  getSettingsLink,
  getSignoutButton,
  getConfirmationButton,
  getSigninLink
} from '../support/app.po';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title page', () => {
    // Function helper example, see `../support/app.po.ts` file
    getLandingPageBannerName().contains('conduit');
    getLandingPageBannerContent().contains('A place to share your knowledge.');
  });

  describe('given: user creds exist and r valid', () => {
    const signout = () => {
      getSettingsLink().click();
      getSignoutButton().click();
    };

    const signup = () => {
      const rando = (postfix: string) => `${Math.round(Math.random() * 100000)}-${postfix}`;

      const username = rando('username');
      const email = rando('user@email.com');
      const password = rando('password');

      getRegisterLink().click();
      getUserNameInput().type(username);
      getEmailInput().type(email);
      getPasswordInput().type(password);

      getTypeSubmit().click();
      getConfirmationButton().click();

      return { username, email, password };
    };

    afterEach(signout);

    describe('signing up', () => {
      it('should support sign up', () => {
        signup();
      });
    });

    describe('signing in', () => {
      it('should support sign in', () => {
        const { email, password } = signup();
        signout();
        getSigninLink().click();
        getEmailInput().type(email)
        getPasswordInput().type(password);
        getTypeSubmit().click();
        getConfirmationButton().click();
      });
    })
  });
});
