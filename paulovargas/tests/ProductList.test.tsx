import { getAllProducts } from '@/api/products';
import ProductList from '../components/ProductList';
import { render } from '@testing-library/react';

const mockProducts = getAllProducts();

test('renders product list', () => {
  const { getAllByText } = render(<ProductList products={mockProducts} />);
  const productNames = mockProducts.map(product => product.name);
  const regex = new RegExp(productNames.join('|'));
  const renderedProductNames = getAllByText(regex);
  expect(renderedProductNames.length).toEqual(mockProducts.length);
});