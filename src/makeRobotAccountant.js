'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  const getSum = (num) => {
    return (secondnumber) => {
      callCounter++;

      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num + secondnumber;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
