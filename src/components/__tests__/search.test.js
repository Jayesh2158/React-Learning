import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import cardList from "../../utils/mockData";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(cardList);
        },
    });
});

it("Should Search Res List for burger text input ", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(30);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza" } });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(12);
});

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(30);

    const topRatedBtn = screen.getByRole("button", {
        name: "Top Rated Restaurant",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(15);
});