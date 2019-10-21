import React, { Component } from 'react';
import './Layout.css'

import Auxiliary from '../../hoc/Auxiliary';

class Layout extends Component {
    render() {
        return(
            <Auxiliary>
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }

};

export default Layout;