import { render, screen } from '@testing-library/react';
import Products from '@/app/(home)/products';
import { Product } from '@/interfaces/Product';

const mockProducts: Product[] = [
  { id: 1, brand: 'Nike', price: 96.00, description: 'Air Force 1 Jester XX Black Sonic Yellow ...', image: 'image 3.png' },
  { id: 2, brand: 'Converse', price: 85.50, description: 'Run Star Hike Three Color Unisex.', image: 'Rectangle 2192_6.png' },
];

describe('Products Component', () => {
  it('renders a list of products', () => {
    render(<Products filteredProducts={mockProducts} />);
    const productElements = screen.getAllByRole('presentation');
    expect(productElements).toHaveLength(mockProducts.length);
  });

  it('displays product information correctly', () => {
    render(<Products filteredProducts={mockProducts} />);
    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Converse')).toBeInTheDocument();
    expect(screen.getByText('R$ 96.00')).toBeInTheDocument();
    expect(screen.getByText('R$ 85.50')).toBeInTheDocument();
  });
});
