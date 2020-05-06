import { FilterByAlcoholicPipe } from './filter-by-alcoholic.pipe';

describe('FilterByAlcoholicPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByAlcoholicPipe();
    expect(pipe).toBeTruthy();
  });
});
