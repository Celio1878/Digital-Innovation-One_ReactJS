/** Iteration of TDD */

const assert = require('assert');
const Math = require('../src/math');
const expect = require ('chai').expect;
const sinon = require ('sinon');

let value = 0;

// Describe type of Test
describe('Math class', function () {

   /** hooks
    * before() -> before all tests
    * beforeEach() -> before each test
    * after() -> after all tests
    * afterEach() -> after each test
   */

   berforeEach (function() {
      value = 0;
   });

   it('Sum two numbers', function (done) {
      const math = new Math();
      this.timeout (3000);

      value = 5;

      math.sum (value, 5, value => {
         expect (value).to.equal(10);
         // assert.equal (value, 10);
         done();
      });
   });

   it ('Multiply two numbers', function() {
      const math = new Math();

      const obj = {
         name: 'Celio Vieira'
      };

      const obj2 = {
         name: 'Celio Vieira'
      };

      expect (obj).to.deep.equal(obj2);

      expect (math.multiply (value, 5)).to.equal (0);
      // assert.equal (math.multiply (value, 5), 0);
   });

   it ('Calls req with sum and index values', function() {
      const req = {};
      const res = {
         load: function load() {
            console.log ('Called!');
         }
      };

      sinon.spy (res, 'load');

      const math = new Math();

      math.printSum (req, res, 5, 5);

      expect (res.load.calledOnce).to.be.true;
   });
});
