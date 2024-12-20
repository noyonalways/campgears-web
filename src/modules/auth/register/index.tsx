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
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { registerFormSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
  });
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { terms, ...restData } = data;

    try {
      const res = await register(restData).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          id: "user-register",
        });
        router.push("/auth/login");
      }
    } catch (err) {
      const errorResponse = err as TGenericErrorResponse["data"];
      toast.error(errorResponse?.message, {
        id: "user-register",
      });
    } finally {
      form.reset();
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="py-6 bg-background"
                      placeholder="Full Name"
                      type="text"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="py-6 bg-background"
                      placeholder="Email"
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

            <FormField
              name="terms"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex space-x-2 items-center">
                      <Checkbox
                        onCheckedChange={(checked) => field.onChange(checked)}
                        checked={field.value ?? false}
                        id="terms"
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree with Terms and Privacy
                      </Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isLoading}
              type="submit"
              className="w-full py-6 text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Registering
                </>
              ) : (
                "Register"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RegisterForm;
