'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  const getSum = (num) => {
    callCounter++;

    return (operator) => {
      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num + operator;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
