import React from 'react';
import ReactDom from 'react-dom';

const el = <h2>Lift Stuff! <span>heart</span></h2>

ReactDom.render(el, document.getElementById('lift-stuff-app'));
console.log(el);