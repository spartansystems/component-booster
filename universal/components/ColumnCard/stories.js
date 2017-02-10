import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'
import ColumnCard from './component'

const stories = storiesOf('ColumnCard', module)

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <ColumnCard
    title={text('Title', 'Hello ColumnCard')}
  />
))
