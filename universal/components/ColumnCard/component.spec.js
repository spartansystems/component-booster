import React from 'react'
import ColumnCard from './component'
import { shallow } from 'enzyme'

describe('(Component) ColumnCard', () => {
  it('breaks cause you have to write a test', () => {
    const subject = shallow(<ColumnCard />)

    expect(subject.text()).toEqual('this will never work! muahahahahahahah!')
  })
})
