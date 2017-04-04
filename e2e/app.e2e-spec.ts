import { Angular4TodoPage } from './app.po';

describe('angular4-todo App', () => {
  let page: Angular4TodoPage;

  beforeEach(() => {
    page = new Angular4TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
