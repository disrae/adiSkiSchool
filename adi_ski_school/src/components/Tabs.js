import React from 'react'
import { List, Label, Tab } from 'semantic-ui-react'

const panes = [
    {
        menuItem: 'About Your Instructor',
        pane: { key: 'tab1', content: 'This is massive tab', size: 'massive' },
    },
    {
        menuItem: 'Kids',
        pane: {
            key: 'tab2',
            content: 'This tab has a center aligned text',
            textAlign: 'center',
        },
    },
    {
        menuItem: 'Ready For A Fun Experience?',
        pane: {
            key: 'tab3',
            content: (
                <div>
                    This tab contains an <Label>JSX</Label> element
        </div>
            ),
        },
    },
]

export const Tabs = () => (
    <Tab panes={panes} renderActiveOnly={false} />
)


