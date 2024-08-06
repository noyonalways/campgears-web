import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
};

type TProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className: string;
} & TFormConfig;

const CGForm: React.FC<TProps> = ({
  children,
  onSubmit,
  defaultValues,
  className,
}) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CGForm;
