import { Form, Link } from 'react-router-dom';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { FormInput } from '@/components';
import { Button } from '@/components/ui/button';

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form>
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" name="password" />
            <Button className="w-full mt-4">Login</Button>
            <Button
              asChild
              type="button"
              variant="outline"
              className="w-full mt-4"
            >
              <Link to="/cart">Guest User</Link>
            </Button>
            <p className="text-center mt-4">
              Not a member yet?
              <Button type="button" asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
