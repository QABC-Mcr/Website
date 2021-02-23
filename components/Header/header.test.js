// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

// the component to test
import Header from './index'

describe('<Header>', () => {
	test('Renders the title', () => {
		const testTitle = 'Howdy doody'

		render(<Header title={testTitle} />)
		expect(screen.getByRole('heading')).toHaveTextContent(testTitle)
	})
})
