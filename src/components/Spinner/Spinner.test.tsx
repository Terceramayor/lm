import React from 'react'
import { render } from '@testing-library/react-native'
import { toHaveStyle } from '@testing-library/jest-native'
import Spinner from './Spinner'

describe('Spinner', () => {
  expect.extend({ toHaveStyle })
  const initialProps = { testID: 'testSpinner' }

  it('renders correctly', () => {
    const { getByTestId } = render(<Spinner testID={initialProps.testID} />)

    expect(getByTestId(`${initialProps.testID}-view`)).toBeDefined
    expect(getByTestId(`${initialProps.testID}-view`)).toHaveStyle({})

    expect(getByTestId('spinner')).toBeDefined
  })
  it('renders correctly with given props', () => {
    const customStyle = { backgroundColor: 'red' }
    const props = { ...initialProps, style: customStyle, fill: true }

    const { getByTestId } = render(
      <Spinner fill={props.fill} style={props.style} testID={props.testID} />,
    )

    expect(getByTestId(`${initialProps.testID}-view`)).toBeDefined
    expect(getByTestId(`${initialProps.testID}-view`)).toHaveStyle(customStyle)

    expect(getByTestId('spinner')).toBeDefined
  })
})
