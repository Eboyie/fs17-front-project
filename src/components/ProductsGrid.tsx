import { Card, CardContent } from '@/components/ui/card';
import { formatAsDollars, type ProductsType, storeSchema } from '@/utils';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://fakestoreapi.com/products';
const ProductsGrid = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }
        const rawData: ProductsType[] = await response.json();
        const result = storeSchema.array().safeParse(rawData);
        //console.log(result);

        if (!result.success) {
          console.log(result.error.message);
          throw new Error(`Failed to parse tours`);
        }
        setProducts(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'there was an error...';
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error {isError}</h3>;
  }
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product;
        const dollarsAmount = formatAsDollars(price);
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div key={product.id}>
              <Card>
                <CardContent className="p-4">
                  <img
                    src={image}
                    alt={title.slice(0, 30)}
                    className="rounded-md h-64 md:h-48 w-full object-contain"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-primary font-light mt-2">
                      {dollarsAmount}
                    </p>

                    <h2 className="text-xl font-semibold capitalize">
                      {title.slice(0, 30)}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
