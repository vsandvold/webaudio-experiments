/*
 *
 * PerceptualFusion
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectPerceptualFusion from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

import { setFrequency } from './actions';

export class PerceptualFusion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.perceptualFusion}>
        <Helmet
          title="PerceptualFusion"
          meta={[
            { name: 'description', content: 'Description of PerceptualFusion' },
          ]}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <output>{this.props.frequency} Hz</output>
        <div>
          <input
            type="range"
            min="0"
            max="22100"
            defaultValue={this.props.frequency}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

PerceptualFusion.propTypes = {
  frequency: React.PropTypes.number,
  handleChange: React.PropTypes.func,
};

const mapStateToProps = selectPerceptualFusion();

function mapDispatchToProps(dispatch) {
  return {
    handleChange: event => {
      oscillator.frequency.value = event.target.value;
      dispatch(setFrequency(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PerceptualFusion);


// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = 'sawtooth';
oscillator.frequency.value = 3000; // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
