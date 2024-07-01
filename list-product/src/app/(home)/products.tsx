import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductsProps } from '@/interfaces/ProductsProps';

export default function Products({ filteredProducts }: ProductsProps) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 sm:items-center'>
      {filteredProducts.map((product) => (
        <Card key={product.id} className='w-[156px] h-[215px] even:ml-auto sm:even:ml-0 bg-[#FFFFFF]'>
          <CardHeader className='w-129 h-65'>
            <img src={`/images/${product.image}`} alt="" />
          </CardHeader>
          <div className='px-[10px]'>
            <CardTitle>
              <p className='text-[16px]'>
                {product.brand}
              </p>
            </CardTitle>
            <CardDescription className='text-[13px] text-[#7C7A7A]'>
              {product.description}
            </CardDescription>
            <CardContent className='p-0'>
              <p>R$ {product.price.toFixed(2)} </p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}