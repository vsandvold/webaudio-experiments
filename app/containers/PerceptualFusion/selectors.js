import { createSelector } from 'reselect';

/**
 * Direct selector to the perceptualFusion state domain
 */
const selectPerceptualFusionDomain = () => state => state.get('perceptualFusion');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PerceptualFusion
 */

const selectPerceptualFusion = () => createSelector(
  selectPerceptualFusionDomain(),
  (substate) => substate.toJS()
);

export default selectPerceptualFusion;
export {
  selectPerceptualFusionDomain,
};
