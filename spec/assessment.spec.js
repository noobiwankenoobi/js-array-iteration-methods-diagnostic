'use strict';

var assessment = require('../lib/assessment.js');

describe('reduce', function() {

  var array = [-1, -2, -3, -4, -5];

  describe('sum', function() {

    it('returns the sum of the array', function() {
      expect(array.reduce(assessment.sum)).toBe(-15);
    });

  });

  describe('min', function() {

    it('returns the minimum of the array elements', function() {
      expect(array.reduce(assessment.min)).toBe(-5);
    });

  });

});

describe('enumerable', function() {

  var array = [-1, -2, -3, -4, -5];

  describe('any', function() {

    it('returns false for greater than 0 predicate', function() {
      expect(assessment.any(array, n => n > 0)).toBe(false);
    });

    it('returns true for less than 0 predicate', function() {
      expect(assessment.any(array, n => n < 0)).toBe(true);
    });

  });

  describe('select', function() {

    var answer = [-1, -3, -5];

    it('returns correct array for not even predicate', function() {
      expect(assessment.select(array, n => n % 2)).toEqual(answer);
    });

  });

  describe('find', function() {

    var withDuplicates = [
      { name: 'first' },
      { name: 'repeat' },
      { name: 'third' },
      { name: 'repeat' },
      { name: 'fifth' },
    ];

    it('returns correct object in array', function() {
      expect(assessment.find(withDuplicates,
        o => o.name === 'repeat')).toBe(withDuplicates[1]);
    });

    it('returns undefined for unmatched object', function() {
      expect(assessment.find(withDuplicates,
        o => o.name === 'fourth')).toBeUndefined();
    });

  });

});
