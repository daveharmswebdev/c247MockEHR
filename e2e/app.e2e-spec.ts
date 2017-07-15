import { MockEhrPage } from './app.po';

describe('mock-ehr App', () => {
  let page: MockEhrPage;

  beforeEach(() => {
    page = new MockEhrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
