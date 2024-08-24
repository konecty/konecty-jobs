import { render, screen } from "@testing-library/react";
import Product from "@/app/components/Product/Product";
import { ISneaker } from "@/interfaces/ISneaker.interface";

describe("Product Component", () => {
  const mockSneaker: ISneaker = {
    brand_name: "Nike",
    category: ["Air max"],
    name: "Air Max 90",
    grid_picture_url: "",
    retail_price_cents: 15000,
  };

  it("should render the brand name correctly", () => {
    render(<Product {...mockSneaker} />);
    const brandName = screen.getByText("Nike");
    expect(brandName).toBeInTheDocument();
  });

  it("should render the sneaker name correctly", () => {
    render(<Product {...mockSneaker} />);
    const sneakerName = screen.getByText("Air Max 90");
    expect(sneakerName).toBeInTheDocument();
  });

  it("should render the price correctly", () => {
    render(<Product {...mockSneaker} />);
    const price = screen.getByText("$ 150");
    expect(price).toBeInTheDocument();
  });

  it("should render the image with correct attributes", () => {
    render(<Product {...mockSneaker} />);
    const image = screen.getByAltText("Nike");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "160");
    expect(image).toHaveAttribute("height", "160");
  });

  it("should apply the correct classes for styling", () => {
    render(<Product {...mockSneaker} />);
    const container = screen.getByRole("img").parentElement?.parentElement;
    expect(container).toHaveClass(
      "flex min-h-[240px] w-full flex-col justify-between rounded-[15px] bg-white px-4 pb-4 shadow-md transition-shadow hover:shadow-lg",
    );
  });
});
