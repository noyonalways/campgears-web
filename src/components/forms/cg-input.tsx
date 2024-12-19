import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { Control, FieldValues } from "react-hook-form";

type InputFieldProps = {
  name: string; // Field name
  control: Control<FieldValues>; // React Hook Form's control
  placeholder?: string; // Placeholder text
  type?: string; // Input type, default is "text"
  className?: string; // Additional CSS classes for the input
};

const InputField: FC<InputFieldProps> = ({
  name,
  control,
  placeholder,
  type = "text",
  className,
}) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Input
            className={className}
            placeholder={placeholder}
            type={type}
            {...field}
            value={field.value ?? ""}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default InputField;
