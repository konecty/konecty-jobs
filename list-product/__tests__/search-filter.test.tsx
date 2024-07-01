import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilter from '@/components/search-filter';
import { Product } from '@/interfaces/Product';

const mockProducts: Product[] = [
  { id: 1, brand: 'Nike', price: 96.00, description: 'Air Force 1 Jester XX Black Sonic Yellow ...', image: 'image 3.png' },
  { id: 2, brand: 'Converse', price: 85.50, description: 'Run Star Hike Three Color Unisex.', image: 'Rectangle 2192_6.png' },
];

describe('SearchFilter Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchFilter products={mockProducts} filteredProducts={mockProducts} setFilteredProducts={() => {}} />
    );
    expect(getByPlaceholderText('Buscar produtos...')).toBeInTheDocument();
  });

  it('filters products based on search query', () => {
    const setFilteredProducts = jest.fn();
    render(
      <SearchFilter products={mockProducts} filteredProducts={mockProducts} setFilteredProducts={setFilteredProducts} />
    );
    const searchInput = screen.getByPlaceholderText('Buscar produtos...');
    fireEvent.change(searchInput, { target: { value: 'Nike' } });
    expect(setFilteredProducts).toHaveBeenCalledWith([mockProducts[0]]);
  });

  it('filters products based on selected brand', () => {
    const setFilteredProducts = jest.fn();
    render(
      <SearchFilter products={mockProducts} filteredProducts={mockProducts} setFilteredProducts={setFilteredProducts} />
    );
    const nikeButton = screen.getByText('Nike');
    fireEvent.click(nikeButton);
    expect(setFilteredProducts).toHaveBeenCalledWith([mockProducts[0]]);
  });
});
