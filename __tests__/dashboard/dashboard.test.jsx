import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from 'react'
import Dashboard from "../../src/app/dashboard/page";



describe('Dashboard', () => {
    it('Should render', () => {
        render(<Dashboard />)
    })
})