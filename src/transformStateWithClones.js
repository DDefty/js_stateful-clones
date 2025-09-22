'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const arrOfStates = [];
  const tempState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(tempState, action.extraData);
      arrOfStates.push({ ...tempState });
    } else if (action.type === 'removeProperties') {
      for (const keys of action.keysToRemove) {
        delete tempState[keys];
      }
      arrOfStates.push({ ...tempState });
    } else if (action.type === 'clear') {
      for (const key in tempState) {
        delete tempState[key];
      }
      arrOfStates.push({ ...tempState });
    }
  }

  return arrOfStates;
}

module.exports = transformStateWithClones;
