import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from 'react'
import Blog from "../../src/app/blog/page";



describe('Blog page', () => {
    it('Should render', () => {
        render(<Blog />)
    })
})