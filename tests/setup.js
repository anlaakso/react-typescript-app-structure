import 'ignore-styles';
import 'babel-polyfill';
import chai from 'chai';
import { jsdom } from 'jsdom';


global.document = jsdom('');
global.window = document.defaultView;

global.navigator = {
  userAgent: 'chrome'
};
