import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SocialLogin from "@/modules/auth/social-login";
import Image from "next/image";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

const RegisterPage = () => {
  return (
    <section className="pb-10">
      <div className="bg-secondary hidden md:block md:py-10 mb-5">
        <div className="container">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-bold">Register</h2>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/">
                    <TiHome size={20} />
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">
                    Register
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:flex justify-center hidden">
            <Image
              width={600}
              height={600}
              src={`/illustrations/signup.svg`}
              alt="signup-illustration"
            />
          </div>

          <div className="w-full max-w-lg space-y-6 md:bg-secondary md:p-8 rounded-md">
            <div className="text-center md:text-start">
              <h2 className="text-2xl font-semibold">
                <span>Welcome to </span>
                <span className="font-quickSand font-bold">
                  Camp<span className="text-primary">gears</span>
                </span>
              </h2>
              <p className="text-muted-foreground">Create new Account</p>
            </div>

            {/* login form */}
            <div className="space-y-4">
              <Input
                className="py-6 bg-white"
                placeholder="Full Name"
                type="text"
              />
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

              <div>
                <div className="flex space-x-2 items-center">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with Terms and Privacy
                  </Label>
                </div>
              </div>

              <Button className="w-full py-6 text-base">Register</Button>
            </div>

            {/* social login */}
            <SocialLogin />

            <Separator />
            {/* sing up */}
            <div className="text-center flex justify-center space-x-1">
              <p>Already have an account?</p>
              <Link
                className="text-primary hover:underline"
                href={`/auth/login`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
