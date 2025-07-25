import type { FieldError } from "react-hook-form";
import { Input } from "../ui/input";

interface Props {
  type?: string;
  placeholder?: string;
  error?: FieldError;
  register: any; 
  readOnly?: boolean
}

export default function FormInput({ type = "text", placeholder, error, register,readOnly = false }: Props) {
  return (
    <div>
      <Input type={type} placeholder={placeholder} {...register} readOnly={readOnly}/>
      {error && <p className="text-sm text-red-500 text-start">{error.message}</p>}
    </div>
  );
}