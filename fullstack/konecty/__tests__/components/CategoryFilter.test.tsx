import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "@/app/components/CategoryFilter/CategoryFilter";

describe("CategoryFilter Component", () => {
  const mockHandleBrandClick = jest.fn();

  beforeEach(() => {
    mockHandleBrandClick.mockClear();
  });

  const brandNames = ["Nike", "Adidas", "Puma", "Reebok"];

  it("should render the correct number of brand buttons", () => {
    render(
      <CategoryFilter
        brandNames={brandNames}
        selectedBrand=""
        handleBrandClick={mockHandleBrandClick}
      />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(brandNames.length);
  });

  it("should display the correct brand names", () => {
    render(
      <CategoryFilter
        brandNames={brandNames}
        selectedBrand=""
        handleBrandClick={mockHandleBrandClick}
      />
    );

    brandNames.forEach((brand) => {
      expect(screen.getByText(brand)).toBeInTheDocument();
    });
  });

  it("should call handleBrandClick with the correct brand name when a button is clicked", () => {
    render(
      <CategoryFilter
        brandNames={brandNames}
        selectedBrand=""
        handleBrandClick={mockHandleBrandClick}
      />
    );

    const brandButton = screen.getByText("Nike");
    fireEvent.click(brandButton);

    expect(mockHandleBrandClick).toHaveBeenCalledTimes(1);
    expect(mockHandleBrandClick).toHaveBeenCalledWith("Nike");
  });

  it("should apply the selected styles to the button with the selected brand", () => {
    render(
      <CategoryFilter
        brandNames={brandNames}
        selectedBrand="Adidas"
        handleBrandClick={mockHandleBrandClick}
      />
    );

    const selectedButton = screen.getByText("Adidas");
    expect(selectedButton).toHaveClass("bg-[#51BAE8] text-white");

    brandNames
      .filter((brand) => brand !== "Adidas")
      .forEach((brand) => {
        const button = screen.getByText(brand);
        expect(button).toHaveClass("bg-white text-black");
      });
  });

  it("should render correctly when no brands are provided", () => {
    render(
      <CategoryFilter
        brandNames={[]}
        selectedBrand=""
        handleBrandClick={mockHandleBrandClick}
      />
    );

    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toBe(0);
  });
});
