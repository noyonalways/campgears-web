"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TGenericErrorResponse } from "@/interface";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { singInFormSchema } from "@/schemas/auth";
import { getCurrentUser, setUserToken } from "@/services/auth";
import { TUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const LoginFormSuspense = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect") || "/";
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof singInFormSchema>>({
    resolver: zodResolver(singInFormSchema),
  });

  const [login, { isLoading, data }] = useLoginMutation();

  const onSubmit = async (data: z.infer<typeof singInFormSchema>) => {
    try {
      const res = await login(data).unwrap();
      if (res.success) {
        toast.success(res.message, { id: "user-login" });

        // Set tokens and reload the user
        await setUserToken({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
      }
    } catch (err) {
      const errorResponse = err as TGenericErrorResponse["data"];
      toast.error(errorResponse?.message, { id: "user-login" });
    } finally {
      form.reset();
    }
  };

  // Handle redirection after login
  useEffect(() => {
    const handleRedirection = async () => {
      const currentUser = await getCurrentUser();

      if (currentUser) {
        dispatch(setUser(currentUser as TUser));
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      }
    };

    if (!isLoading && data?.success) {
      handleRedirection();
    }
  }, [isLoading, data, redirect, router, dispatch]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-6 bg-background"
                    placeholder="Email Address"
                    type="email"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-6 bg-background"
                    placeholder="Password"
                    type="password"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full py-6 text-base"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Logging
              </>
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

const LoginForm = () => {
  return (
    <Suspense>
      <LoginFormSuspense />
    </Suspense>
  );
};

export default LoginForm;
