//import React from 'react';
import { ProductsGrid } from '@/components';
import { Button } from '@/components/ui/button';

import { Link } from 'react-router-dom';

function SingleProduct() {
  //const [search, setSearch] = React.useState('');
  //console.log(search);
  return (
    <>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>

      <ProductsGrid />
    </>
  );
}
export default SingleProduct;
