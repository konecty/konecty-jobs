import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/app/components/SearchBar/SearchBar";

describe("SearchBar Component", () => {
  const mockSetSearchTerm = jest.fn();

  beforeEach(() => {
    mockSetSearchTerm.mockClear();
  });

  it("should render the search input with the correct value", () => {
    const search = "test";
    render(<SearchBar search={search} setSearch={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(search);
  });

  it("should call setSearch with the correct value when input changes", () => {
    const search = "test";
    render(<SearchBar search={search} setSearch={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    fireEvent.change(input, { target: { value: "new term" } });

    expect(mockSetSearchTerm).toHaveBeenCalledTimes(1);
    expect(mockSetSearchTerm).toHaveBeenCalledWith("new term");
  });

  it("should render the input with the correct placeholder text", () => {
    render(<SearchBar search="" setSearch={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toBeInTheDocument();
  });

  it("should have the correct classes applied to the input", () => {
    render(<SearchBar search="" setSearch={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toHaveClass("md:w-1/3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500");
  });

  it("should render the input with an empty value when search is empty", () => {
    render(<SearchBar search="" setSearch={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    expect(input).toHaveValue("");
  });

  it("should not call setSearch if input value is unchanged", () => {
    const search = "initial term";
    render(<SearchBar search={search} setSearch={mockSetSearchTerm} />);

    const input = screen.getByPlaceholderText("🔍 Buscar produto");
    fireEvent.change(input, { target: { value: search } });

    expect(mockSetSearchTerm).not.toHaveBeenCalled();
  });
});
