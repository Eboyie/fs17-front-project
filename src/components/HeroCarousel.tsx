import { ProductsType, storeSchema } from '@/utils';

import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const url = 'https://fakestoreapi.com/products';
function HeroCarousel() {
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
    <>
      <div className="hidden lg:block">
        <Carousel>
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <img
                      src={product.image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-contain"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
export default HeroCarousel;
