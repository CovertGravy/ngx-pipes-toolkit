import { SumByPipe } from './sum-by.pipe';

import { TEST_DATA } from 'test/test.data';
import type { TestModel } from 'test/test.model';

describe('Sum by', () => {
  let pipe: SumByPipe;

  beforeEach(() => {
    pipe = new SumByPipe();
  });

  test('Should return null if nil value', () => {
    expect(
      pipe.transform(undefined as TestModel[] | undefined, 'numberOnly'),
    ).toEqual(null);
    expect(pipe.transform(null as TestModel[] | null, 'numberOnly')).toEqual(
      null,
    );
  });

  test('Should return null if empty array', () => {
    expect(pipe.transform([] as TestModel[], 'numberOnly')).toEqual(null);
  });

  test('Should return null if non-empty array and non-number property', () => {
    expect(pipe.transform(TEST_DATA, 'nil')).toEqual(null);
    expect(pipe.transform(TEST_DATA, 'nestedObject')).toEqual(null);
  });

  test('Should return correct sum if non-empty array and number property', () => {
    expect(pipe.transform(TEST_DATA, 'numberOnly')).toEqual(6);
    expect(pipe.transform(TEST_DATA, 'optionalNumber')).toEqual(1);
    expect(pipe.transform(TEST_DATA, 'nullableNumber')).toEqual(3);
    expect(pipe.transform(TEST_DATA, 'numberAndString')).toEqual(1);
    expect(pipe.transform(TEST_DATA, 'unknown')).toEqual(1);
  });
});
