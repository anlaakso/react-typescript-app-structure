import * as React from 'react';
import block from 'helpers/bem';
import './styles';

const b = block('app');

const { PureComponent } = React;

/**
    Main Application component
*/
export default class App extends PureComponent {
    render() {
        return (
            <div className={b()}>

            </div>
        );
    }
}
