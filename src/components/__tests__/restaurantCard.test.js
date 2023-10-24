import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import cardList from "../../utils/mockData"
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard cardData={cardList[0].data.data} />);

    const name = screen.getByText("Chianti");

    expect(name).toBeInTheDocument();
});
