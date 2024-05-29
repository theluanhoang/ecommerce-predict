import { cn } from "@hooks/cn";
import { useState } from "react";
import { SlEye } from "react-icons/sl";
import { GoEyeClosed } from "react-icons/go";
import { Button } from "../button";

interface InputProps {
  className?: string;
  label?: string;
  type?: "text" | "password";
}

const Input: React.FC<InputProps> = ({ label, type, className, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggleFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleToggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div
      className={cn(
        "w-full sm:w-[352px] border border-gray-social-border rounded-md relative transition-all flex bg-transparent",
        {
          "border-primary": isFocused,
        },
        className
      )}>
      <input
        type={isShowPassword ? "text" : type}
        className="outline-none h-[52px] w-full rounded-md px-4 z-[1] bg-transparent"
        onFocus={handleToggleFocus}
        onBlur={handleToggleFocus}
        {...rest}
      />
      {label && (
        <span
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 bg-white px-2 transition-all",
            {
              "top-0 left-2 text-primary z-[1]": isFocused,
            }
          )}>
          {label}
        </span>
      )}
      {type === "password" && (
        <Button
          className="px-4 rounded-tr-md rounded-br-md hover:bg-gray-100"
          onClick={handleToggleShowPassword}>
          {isShowPassword ? <GoEyeClosed size={20} /> : <SlEye size={20} />}
        </Button>
      )}
    </div>
  );
};

export default Input;
