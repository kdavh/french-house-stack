import { expect, test } from 'vitest';

interface Assertion<T> {
  /**
   *
   */
  readonly given: string;
  readonly should: string;
  readonly actual: T;
  readonly expected: T;
}

/**
 * An assertion function that forces you to answer the [5 questions every unit
 * test must answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).
 *
 * @param assertion - Prose descriptions for `given` and `should`, as well as
 * `actual` and `expected` to perform a deep equality check.
 *
 * @see https://github.com/paralleldrive/riteway
 * @see https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d
 */
export function assert<T>(assertion: Assertion<T>) {
  test(`given ${assertion.given}: should ${assertion.should}`, () => {
    expect(assertion.actual).toEqual(assertion.expected);
  });
}

assert.todo = function todo<T>(assertion: Assertion<T>) {
  test.todo(`given ${assertion.given}: should ${assertion.should}`, () => {
    expect(assertion.actual).toEqual(assertion.expected);
  });
};

assert.only = function only<T>(assertion: Assertion<T>) {
  test.only(`given ${assertion.given}: should ${assertion.should}`, () => {
    expect(assertion.actual).toEqual(assertion.expected);
  });
};

assert.skip = function skip<T>(assertion: Assertion<T>) {
  test.skip(`given ${assertion.given}: should ${assertion.should}`, () => {
    expect(assertion.actual).toEqual(assertion.expected);
  });
};
