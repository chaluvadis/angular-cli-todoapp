import { Angular4TodoPage } from './app.po';

describe('angular4-todo App', () => {
  let page: Angular4TodoPage;

  beforeEach(() => {
    page = new Angular4TodoPage();
  });

  it('should display message saying My Todo App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My Todo App');
  });
});
