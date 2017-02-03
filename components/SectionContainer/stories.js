import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import SectionContainer from './component'

const notes = 'This story demonstrates the props that can be passed to SectionContainer.'

const props = {
  customClass: 'customClass',
  boxModel: [
    'boxDefault',
    'flexCol',
    'flexRow'
  ],
  bg: [
    'bgDefault',
    'white',
    'black',
    'moireOne'
  ]
}

storiesOf('SectionContainer', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <SectionContainer
          customClass={text('type in a custom class that will show up in the DOM?', props.customClass)}
          boxModel={select('What box model is this section?', props.boxModel, props.boxModel[0])}
          bg={select('What background do you want? Default is transparent.', props.bg, props.bg[0])}
        />
      </WithNotes>
    )
  })
