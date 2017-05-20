import { Ng8Page } from './app.po';

describe('ng8 App', function() {
  let page: Ng8Page;

  beforeEach(() => {
    page = new Ng8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
