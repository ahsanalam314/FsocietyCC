import { SmartInterviewerPage } from './app.po';

describe('smart-interviewer App', () => {
  let page: SmartInterviewerPage;

  beforeEach(() => {
    page = new SmartInterviewerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
