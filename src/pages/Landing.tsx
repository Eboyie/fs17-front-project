import { FeaturedProducts, Hero } from '@/components';
import { customFetch, type ProductsType } from '@/utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products?featured=true';

export const loader: LoaderFunction = async (): Promise<ProductsType> => {
  const response = await customFetch<ProductsType>(url);
  return { ...response.data };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
export default Landing;
