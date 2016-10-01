/*
 *
 * PerceptualFusion actions
 *
 */

import {
  SET_FREQUENCY,
} from './constants';

export function setFrequency(frequency) {
  return {
    type: SET_FREQUENCY,
    frequency,
  };
}
