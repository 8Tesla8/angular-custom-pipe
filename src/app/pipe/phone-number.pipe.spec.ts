import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
