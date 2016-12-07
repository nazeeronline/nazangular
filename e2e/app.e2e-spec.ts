import { NazangularPage } from './app.po';

describe('nazangular App', function() {
  let page: NazangularPage;

  beforeEach(() => {
    page = new NazangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
