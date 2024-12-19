import { Form } from "@/components/ui/form";
import { FC, ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

type FormWrapperProps = {
  formMethods: UseFormReturn<FieldValues>;
  onSubmit: (data: FieldValues) => void;
  children: ReactNode;
};

const FormWrapper: FC<FormWrapperProps> = ({
  formMethods,
  onSubmit,
  children,
}) => {
  return (
    <Form {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormWrapper;
