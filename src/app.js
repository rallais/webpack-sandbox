'use strict';

import {cube} from './math.js';

let component = () => {
    let element = document.createElement('div');
    element.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5) // use cube function
    ].join('\n\n');
    return element;
}

document.body.appendChild(component());