import React, { Component, Fragment } from 'react'
import { Button } from 'semantic-ui-react'

import { Tabs } from './Tabs'
import '../App.css'

// boy image 
// image from https://pixabay.com/photos/boy-ski-skiing-cold-goggles-kid-1835416/
// open use license

export class HomePage extends Component {
    render() {
        return (
            <div className="background">
                <div className="background-image">
                    <h1 className="ctr-text">
                        <Button
                            fluid
                            className="landing-text"
                            size="massive"
                            content="Learn to Ski"
                        />
                    </h1>
                </div>
                <Tabs menuPosition="right" />
            </div>
        )
    }
}

export default HomePage
