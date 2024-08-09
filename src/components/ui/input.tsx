import { useForm } from "react-hook-form";

interface IProps {
  label: string;
  type: string;
  name: string;
}

const InputField: React.FC<IProps> = ({ label, type, name }) => {
  const { register } = useForm();

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name)}
        type={type}
        id={name}
        className="border border-gray-300 rounded p-2"
      />
    </>
  );
};

export default InputField;
