// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');

observe(pieces =>
  ReactDOM.render(
    <Board {...pieces} />,
    rootEl
  )
);