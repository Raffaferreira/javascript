"use strict";

var sum = require('../units/sum');

test('adds 1 + 2 to equal 3', function () {
  expect(sum(1, 2)).toBe(3);
});