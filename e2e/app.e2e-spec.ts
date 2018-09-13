import { PrimeraAppPage } from './app.po';

describe('primera-app App', function() {
  let page: PrimeraAppPage;

  beforeEach(() => {
    page = new PrimeraAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
