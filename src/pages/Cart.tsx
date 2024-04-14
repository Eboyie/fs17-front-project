import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
function Cart() {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <p>
        <Link to="/" className="text-3xl text-red-900 ">
          back home
        </Link>
      </p>
      <Button asChild size="lg" className="mt-4">
        <Link to="/">home button</Link>
      </Button>
    </div>
  );
}
export default Cart;
