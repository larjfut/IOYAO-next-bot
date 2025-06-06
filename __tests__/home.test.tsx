import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /welcome to ioyao next bot/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Home />)
    const description = screen.getByText(/a next\.js application with fastapi backend integration/i)
    expect(description).toBeInTheDocument()
  })

  it('renders frontend and backend cards', () => {
    render(<Home />)
    const frontendCard = screen.getByText(/built with next\.js 15 and react 19/i)
    const backendCard = screen.getByText(/powered by fastapi/i)
    expect(frontendCard).toBeInTheDocument()
    expect(backendCard).toBeInTheDocument()
  })
})

