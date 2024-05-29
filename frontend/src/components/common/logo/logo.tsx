import logo from "@assets/logo.svg";
import { cn } from "@hooks/cn";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <img src={logo} alt="logo" className={cn("w-16 h-16", className)} />;
};

export default Logo;
