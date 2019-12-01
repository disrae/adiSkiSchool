import React from 'react'
import { List, Label, Tab } from 'semantic-ui-react'
import { About } from './tabs/About'
import { Adults } from './tabs/Adults'
import { Kids } from './tabs/Kids'

const panes = [
    {
        menuItem: {
            key: 'about',
            icon: "bullhorn",
            content: "About Your Instructor"
        },
        pane: { key: 'about', content: (<About />) },
    },

    {
        menuItem: {
            key: 'Kids',
            icon: 'thumbs up outline',
            content: 'Kids'
        },
        pane: {
            key: 'kids',
            content: (<Kids />),
            // textAlign: 'center',
        },
    },

    {
        menuItem: {
            key: 'adults',
            icon: 'user plus',
            content: 'Ready For A New Experience?'
        },
        pane: {
            key: 'adults',
            content: (<Adults />),
        },
    }
]

export const Tabs = () => (
    <Tab panes={panes} renderActiveOnly={false} />
)


