import stringValidator from 'utils/stringValidator';
import mergeSort from 'utils/mergeSort';
import { ORDER } from 'utils/constants';

describe('ASC-TEST', () => {
  test('ASC-1', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  test('ASC-2', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  test('ASC-3', () => {
    expect(mergeSort([3, 5, 2, 4, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  test('ASC-4', () => {
    expect(mergeSort([-1, -2, -3, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
  });
  test('ASC-5', () => {
    expect(mergeSort([1.1, 1, 1.5, 1.4])).toEqual([1, 1.1, 1.4, 1.5]);
  });
});

describe('DESC-TEST', () => {
  test('DESC-1', () => {
    expect(mergeSort([5, 4, 3, 2, 1], ORDER.DESC)).toEqual([5, 4, 3, 2, 1]);
  });
  test('DESC-2', () => {
    expect(mergeSort([1, 2, 3, 4, 5], ORDER.DESC)).toEqual([5, 4, 3, 2, 1]);
  });
  test('DESC-3', () => {
    expect(mergeSort([3, 5, 2, 4, 1], ORDER.DESC)).toEqual([5, 4, 3, 2, 1]);
  });
  test('DESC-4', () => {
    expect(mergeSort([-3, -5, -2, -4, -1], ORDER.DESC)).toEqual([
      -1, -2, -3, -4, -5,
    ]);
  });
  test('DESC-5', () => {
    expect(mergeSort([1.1, 1, 1.5, 1.4], ORDER.DESC)).toEqual([
      1.5, 1.4, 1.1, 1,
    ]);
  });
});

describe('input-test', () => {
  test('alphabet', () => {
    expect(stringValidator('a')).toContainEqual(NaN);
  });
  test('other Char', () => {
    expect(stringValidator('!')).toContainEqual(NaN);
  });

  test('contain Alphabet', () => {
    expect(stringValidator('1A')).toContainEqual(NaN);
  });
  test('contain Alphabet-2', () => {
    expect(stringValidator('1,2,3,4 a')).toContainEqual(NaN);
  });
  test('contain other Char', () => {
    expect(stringValidator('1,2,3,4,....')).toContainEqual(NaN);
  });
  test('contain other Char2', () => {
    expect(stringValidator('...1,2,3,4,5,')).toContainEqual(NaN);
  });
  test('white space', () => {
    expect(stringValidator(' ')).toEqual([]);
  });
  test('white space with commas', () => {
    expect(stringValidator(', , , , ,')).toEqual([]);
  });
});
