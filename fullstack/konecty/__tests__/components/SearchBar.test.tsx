import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/app/components/SearchBar/SearchBar";

describe("SearchBar Component", () => {
  const mockSetSearchTerm = jest.fn();

  beforeEach(() => {
    mockSetSearchTerm.mockClear();
  });

  it("should render the search input with the correct value", () => {
    const searchTerm = "test";
    render(<SearchBar searchTerm={searchTerm} setSearchTerm={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(searchTerm);
  });

  it("should call setSearchTerm with the correct value when input changes", () => {
    const searchTerm = "test";
    render(<SearchBar searchTerm={searchTerm} setSearchTerm={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    fireEvent.change(input, { target: { value: "new term" } });

    expect(mockSetSearchTerm).toHaveBeenCalledTimes(1);
    expect(mockSetSearchTerm).toHaveBeenCalledWith("new term");
  });

  it("should render the input with the correct placeholder text", () => {
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toBeInTheDocument();
  });

  it("should have the correct classes applied to the input", () => {
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toHaveClass("md:w-1/3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500");
  });

  it("should render the input with an empty value when searchTerm is empty", () => {
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toHaveValue("");
  });

  it("should not call setSearchTerm if input value is unchanged", () => {
    const searchTerm = "initial term";
    render(<SearchBar searchTerm={searchTerm} setSearchTerm={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    fireEvent.change(input, { target: { value: searchTerm } });

    expect(mockSetSearchTerm).not.toHaveBeenCalled();
  });
});
