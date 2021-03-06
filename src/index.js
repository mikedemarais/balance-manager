import React from 'react';
import ReactDOM from 'react-dom';
import './helpers/intercom';
import { injectGlobal } from 'styled-components';
import { globalStyles } from './styles';
import { bootIntercom } from './helpers/utilities';
import Root from './Root';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

// Intercom
bootIntercom();

ReactDOM.render(<Root />, document.getElementById('root'));
