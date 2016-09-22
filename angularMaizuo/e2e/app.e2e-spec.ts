import { AngularMaizuoPage } from './app.po';

describe('angular-maizuo App', function() {
  let page: AngularMaizuoPage;

  beforeEach(() => {
    page = new AngularMaizuoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
