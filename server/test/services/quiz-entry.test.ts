import app from '../../src/app';

describe('\'quizEntry\' service', () => {
  it('registered the service', () => {
    const service = app.service('quiz-entry');
    expect(service).toBeTruthy();
  });
});
