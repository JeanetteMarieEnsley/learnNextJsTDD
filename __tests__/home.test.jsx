import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from 'react'
import Home from "../src/app/page";




describe('Home page', () => {
    it('Should render', () => {
        render(<Home />)
    })
})