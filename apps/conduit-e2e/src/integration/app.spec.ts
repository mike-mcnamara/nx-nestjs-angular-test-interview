import {
  getLandingPageBannerContent,
  getLandingPageBannerName,
} from '../support/app.po';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title page', () => {
    // Function helper example, see `../support/app.po.ts` file
    getLandingPageBannerName().contains('conduit');
    getLandingPageBannerContent().contains('A place to share your knowledge.');
  });

  it('should support sign up');
  it('should support sign in');
});
