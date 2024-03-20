const assert = require('assert');

describe('Date test', function() {
  it('should verify that today is January 1, 2028', function() {
    const today = new Date();
    const expectedDate = new Date(2028, 0, 1); // Months are 0-indexed in JavaScript Date

    assert.strictEqual(today.getFullYear(), expectedDate.getFullYear());
    assert.strictEqual(today.getMonth(), expectedDate.getMonth());
    assert.strictEqual(today.getDate(), expectedDate.getDate());
  });
});