import { PageBreadcrumb } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SocialLogin from "@/modules/auth/social-login";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="pb-10">
      <PageBreadcrumb currentPage="Login" />

      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:flex justify-center hidden">
            <Image
              width={600}
              height={600}
              src={`/illustrations/login.svg`}
              alt="login-illustration"
            />
          </div>

          <div className="w-full max-w-lg space-y-6 md:bg-secondary md:p-8 md:rounded-md md:shadow-md">
            <div className="text-center md:text-start">
              <h2 className="text-2xl font-semibold">
                <span>Welcome to </span>
                <span className="font-quickSand font-bold">
                  Camp<span className="text-primary">gears</span>
                </span>
              </h2>
              <p className="text-muted-foreground">Log in to Account</p>
            </div>

            {/* login form */}
            <div className="space-y-4">
              <Input
                className="py-6 bg-white"
                placeholder="Email Address"
                type="email"
              />
              <Input
                className="py-6 bg-white"
                placeholder="Password"
                type="password"
              />

              <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                  <Checkbox id="remember-me" />
                  <Label
                    htmlFor="remember-me"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember Me
                  </Label>
                </div>

                <Link
                  className="text-primary hover:underline"
                  href={`/auth/forget-password`}
                >
                  Forget Password?
                </Link>
              </div>

              <Button className="w-full py-6 text-base">Login</Button>
            </div>

            {/* social login */}
            <SocialLogin />

            <Separator />
            {/* sing up */}
            <div className="text-center flex justify-center space-x-1">
              <p>Don&apos;t have an account?</p>
              <Link
                className="text-primary hover:underline"
                href={`/auth/register`}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
