// app/api/produtos/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Product } from '../../../interfaces/Product';

// Simulando um banco de dados com um array
let produtos: Product[] = [
  { id: 1, brand: 'Nike', price: 96.00, description: 'Air Force 1 Jester XX Black Sonic Yellow ...', image: 'image 3.png' },
  { id: 2, brand: 'Converse', price: 85.50, description: 'Run Star Hike Three Color Unisex.', image: 'Rectangle 2192_6.png' },
  { id: 3, brand: 'Nike', price: 196.00, description: 'Air Jordan 1 Retro High Obsidian UNC', image: 'Rectangle 2192_1.png' },
  { id: 4, brand: 'Nike', price: 115.00, description: 'Air Force 1 Shadow Beige Pale Ivory.', image: 'image 3_3.png' },
  { id: 5, brand: 'New Balance', price: 96.00, description: 'Air Force 1 Jester XX Black Sonic Yellow ...', image: 'Rectangle 2192_2.png' },
  { id: 6, brand: 'Asics', price: 96.00, description: 'Air Force 1 Jester XX Black Sonic Yellow ...', image: 'Rectangle 2192_3.png' },
  { id: 7, brand: 'Nike', price: 96.00, description: 'Air Force 1 Jester XX Black Sonic Yellow ...', image: 'image 3_3.png' },

];

export async function GET() {
  return NextResponse.json(produtos);
}

