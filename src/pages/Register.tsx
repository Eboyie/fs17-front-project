import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
//import { FormInput } from 'lucide-react';
import { FormInput } from '@/components';
import { Form, Link } from 'react-router-dom';

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="text" name="username" />
            <FormInput type="email" name="email" />
            <FormInput type="password" name="password" />
            <Button className="w-full mt-4">Register</Button>
            <p className="text-center mt-4">
              Already a member?
              <Button type="button" asChild variant="link">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
