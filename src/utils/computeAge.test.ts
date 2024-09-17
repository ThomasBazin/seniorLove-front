// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, test } from '@jest/globals';

import computeAge from './computeAge';

describe('Test computeAge', () => {
  test('No argument passed', () => {
    expect(computeAge).toThrow('You must provide a string !');
  });

  test('Argument passed is not a string', () => {
    expect(() => {
      // @ts-expect-error Ignore type error for test purpose
      computeAge(1950);
    }).toThrow('You must provide a string !');
  });

  test('ISO format YYYY-MM-DD 74y.o', () => {
    expect(computeAge('1950-06-15')).toBe(74);
  });

  test('ISO format YYYY-MM-DD 24y.o', () => {
    expect(computeAge('2000-09-16')).toBe(24);
  });

  test('Format YYYY/MM/DD', () => {
    expect(computeAge('1950/06/15')).toBe(74);
  });

  test('Format YY/MM/DD', () => {
    expect(computeAge('50/06/15')).toBe(74);
  });

  test('Format YY-MM-DD', () => {
    expect(computeAge('50-06-15')).toBe(74);
  });

  test('Year only', () => {
    expect(computeAge('1950')).toBe(74);
  });

  test('End of year birthday ISO format YYYY-MM-DD', () => {
    expect(computeAge('1950-12-31')).toBe(73);
  });

  test('ISO Date Format with time', () => {
    expect(computeAge('Thu Jan 01 1950 01:00:01 GMT+0100')).toBe(74);
  });

  test('Short Date Format MM/DD/YYYY', () => {
    expect(computeAge('06/14/1964')).toBe(60);
  });
});
