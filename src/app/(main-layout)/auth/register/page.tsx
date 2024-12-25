import { PageBreadcrumb } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { RegisterForm } from "@/modules/auth";
import SocialLogin from "@/modules/auth/social-login";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section className="pb-10">
      <PageBreadcrumb currentPage="Register" />

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

          <div className="w-full max-w-lg space-y-6 md:bg-secondary pt-8 md:p-8 rounded-md">
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
            <RegisterForm />

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
