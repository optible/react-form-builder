import React from 'react';
import ReactDOM from 'react-dom';
import DemoBar from './demobar';
// eslint-disable-next-line no-unused-vars
import FormBuilder, { Registry } from './src/index';
import * as variables from './variables';

// Add our stylesheets for the demo.
require('./scss/application.scss');

const url = '/api/formdata';
const saveUrl = '/api/formdata';

const App = () => (
  <FormBuilder.ReactFormBuilder
    variables={variables}
    url={url}
    saveUrl={saveUrl}
    locale='en'
    saveAlways={false}
  />);

ReactDOM.render(
  <App />,
  document.getElementById('form-builder'),
);
