import { getAllProducts } from '@/api/products';
import ProductList from '../components/ProductList';
import { render } from '@testing-library/react';

const mockProducts = getAllProducts();

test('renders product list', () => {
  const { getAllByText } = render(<ProductList products={mockProducts} />);
  const productNames = mockProducts.map(product => product.name);
  console.log('Produtos mock:', mockProducts);
  console.log('Nomes dos produtos:', productNames);
  const regex = new RegExp(productNames.join('|'));
  const renderedProductNames = getAllByText(regex);
  console.log('Número de produtos renderizados:', renderedProductNames.length);
  console.log('Número esperado de produtos:', mockProducts.length);
  expect(renderedProductNames.length).toEqual(mockProducts.length);
});