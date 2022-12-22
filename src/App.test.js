import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import { Home } from "./pages";
import React from "react";

test("render home component", () => {
    const component = render(<Home />)
    console.log(component)
})