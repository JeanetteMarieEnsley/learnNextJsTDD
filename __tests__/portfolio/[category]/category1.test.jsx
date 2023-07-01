import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from 'react'
import Category from "../../../src/app/portfolio/[category]/page";




describe('Category one', () => {
    it('Should render', () => {
        render(<Category />)
    })
})