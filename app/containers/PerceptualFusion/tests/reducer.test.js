import expect from 'expect';
import perceptualFusionReducer from '../reducer';
import { fromJS } from 'immutable';

describe('perceptualFusionReducer', () => {
  it('returns the initial state', () => {
    expect(perceptualFusionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
