import React from 'react';
import ReactDOM from 'react-dom';
import Component from "./Component";

const RetoolConnectedComponent = Retool.connectReactComponent(Component);
document.body.setAttribute('style', 'margin: 0;') 
ReactDOM.render(
  <RetoolConnectedComponent/>, 
  document.body.appendChild(document.createElement('div')) 
);