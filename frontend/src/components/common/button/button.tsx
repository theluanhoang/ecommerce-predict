import { cn } from "@hooks/cn";

interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  type?: "primary" | "outline";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  center?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  leftIcon,
  rightIcon,
  children,
  className,
  center,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "transition-all py-1 px-4 flex items-center rounded-md",
        {
          "bg-primary text-white hover:opacity-80": type === "primary",
          "bg-transparent border border-gray-social-border hover:shadow-button-hover":
            type === "outline",
          "justify-center": center,
        },
        className
      )}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
