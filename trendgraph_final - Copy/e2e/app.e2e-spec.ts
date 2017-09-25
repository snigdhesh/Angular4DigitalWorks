import { TrendgraphPage } from './app.po';

describe('trendgraph App', () => {
  let page: TrendgraphPage;

  beforeEach(() => {
    page = new TrendgraphPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
