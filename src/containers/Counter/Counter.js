import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    const {
      ctr,
      onIncrementCounter,
      onDecrementCounter,
      onAddCounter,
      onSubtractCounter,
      onStoreResult,
      onDeleteResult,
      results
    } = this.props;

    return (
      <div>
        <CounterOutput value={ctr} />
        <CounterControl label="Increment" clicked={onIncrementCounter} />
        <CounterControl label="Decrement" clicked={onDecrementCounter} />
        <CounterControl label="Add 5" clicked={onAddCounter} />
        <CounterControl label="Subtract 5" clicked={onSubtractCounter} />
        <hr />
        <button onClick={onStoreResult(ctr)}>Store Result</button>
        <ul>
          {results.map(({ id, value }) => (
            <li key={id} onClick={onDeleteResult(id)}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// подключает необходимые части redux state к текущему компоненту
const mapStateToProps = ({ ctr, res }) => {
  return {
    ctr: ctr.counter,
    results: res.results
  };
};

// позволяет dispatch'ить экшены из компонента
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () =>
      dispatch({ type: actionTypes.ADD, payload: { value: 5 } }),
    onSubtractCounter: () =>
      dispatch({ type: actionTypes.SUBTRACT, payload: { value: 5 } }),
    onStoreResult: result => () =>
      dispatch({ type: actionTypes.STORE_RESULT, payload: { result } }),
    onDeleteResult: id => () =>
      dispatch({ type: actionTypes.DELETE_RESULT, payload: { id } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
