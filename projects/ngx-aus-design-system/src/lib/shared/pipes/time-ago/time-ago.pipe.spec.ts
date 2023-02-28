import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeAgoPipe();
    expect(pipe).toBeTruthy();
  });

  it('Returns time from "now"', () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2022/01/31'));
    const pipe = new TimeAgoPipe();
    const text = pipe.transform('2022/01/01');
    expect(text).toBe('a month ago');
    jasmine.clock().uninstall();
  });
});
