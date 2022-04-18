import React from 'react'
import { render } from '@testing-library/react'
import { IconLookup, Icons } from './icons'

describe('Icons', () => {
  test('renders all icons', () => {
    Icons.forEach((icon) => {
      render(<IconLookup name={icon} />)
    })
  })
})
