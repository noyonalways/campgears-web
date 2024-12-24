"use client";

import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const redirect = searchParams.get("redirect") || "/";

  // console.log(redirect);

  // useEffect(() => {
  //   if (redirect) {
  //     router.push(redirect);
  //   } else {
  //     router.push("/");
  //   }
  // }, [redirect, router]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Separator className="basis-[46%]" />
        <p className="text-muted-foreground">or</p>
        <Separator className="basis-[46%]" />
      </div>
      <div>
        <button
          onClick={() => {
            signIn("google", {
              callbackUrl: "/",
            });
          }}
          className="flex bg-white items-center justify-center font-medium space-x-2 w-full border py-3 rounded-md hover:bg-primary/5 active:scale-95 duration-200"
        >
          <FcGoogle size={28} />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
