/*
 *
 * PerceptualFusion reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_FREQUENCY,
} from './constants'

const initialState = fromJS({
  frequency: 440
})

function perceptualFusionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FREQUENCY:
      return state.set('frequency', action.frequency)
    default:
      return state
  }
}

export default perceptualFusionReducer
