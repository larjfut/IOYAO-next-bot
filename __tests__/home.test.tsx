import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Home from '../app/page'

test('home page renders heading and sections', () => {
  const html = renderToStaticMarkup(<Home />)
  expect(html).toContain('Welcome to IOYAO Next Bot')
  expect(html).toContain('A Next.js application with FastAPI backend integration')
  expect(html).toContain('Frontend')
  expect(html).toContain('Backend')
})
