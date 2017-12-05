/* global document */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'components/root/App';
import { store } from 'store/setup';
import { Provider } from 'react-redux';

export default ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
