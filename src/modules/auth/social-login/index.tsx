"use client";

import { Separator } from "@/components/ui/separator";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getCurrentUser } from "@/services/auth";
import { TLoggedInUser } from "@/types/user";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const SocialLogin = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect") || "/";
  const dispatch = useAppDispatch();

  const handleSocialLogin = async () => {
    signIn("google", {
      redirect: false,
    });
  };

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      dispatch(setUser(user as TLoggedInUser));

      if (user && redirect) {
        toast.success("User logged is successfully", { id: "user-login" });
        router.push(redirect);
      }
    })();
  }, [dispatch, router, redirect]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Separator className="basis-[46%]" />
        <p className="text-muted-foreground">or</p>
        <Separator className="basis-[46%]" />
      </div>
      <div>
        <button
          onClick={handleSocialLogin}
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
