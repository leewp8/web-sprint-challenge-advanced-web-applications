// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import { render, screen, rerender } from '@testing-library/react'
import React from 'react'
import Spinner from './Spinner'
import '@testing-library/jest-dom/extend-expect'

test('Spinner renders on true, null on false', () => {
  const ren = render(<Spinner on={true}/>)
  const spinner = screen.getByText('Please wait...')
  expect(spinner).toBeInTheDocument()
  ren.rerender(<Spinner on={false}/>)
  expect(spinner).not.toBeInTheDocument()
})
