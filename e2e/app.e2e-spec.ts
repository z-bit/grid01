import { Grid01Page } from './app.po';

describe('grid01 App', () => {
  let page: Grid01Page;

  beforeEach(() => {
    page = new Grid01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
