/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Test from "./pages/home/test"
import { sum } from "./sum"
import React from "react"

test("sum will be 3", () => {
    expect(sum(1, 2)).toBe(3)
})

test("render text shoule test", () => {
    const test = render(<Test />)
    console.log(test)
    // const todoElement = screen.getByText("test");
    // expect(todoElement).toBeInTheDocument()
})