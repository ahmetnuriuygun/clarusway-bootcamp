console.log('module 2 loaded');

import { inc } from './mymodule.js';
import { selam } from './app.js';

console.log(inc(100));
console.log('selam :>> ', selam);
