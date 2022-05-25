import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  it('create an instance', () => {
    const pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });
  it('should transforme data', ()=>{
    const pipe = new PhonePipe();
    const data = '012345'
    expect(pipe.transform(data)).toBe('01 23 45')
  })
});
