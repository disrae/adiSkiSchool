import React, { Component, Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import './App.css'

import boyImage from './images/adi-boySki.jpg'

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="background-image">
                    <h1 className="ctr-text">
                        <div className="landing-text">
                            Learn To Ski <br />
                            With Adrian
                        </div>

                    </h1>
                </div>
            </Fragment>
        )
    }
}

export default HomePage
