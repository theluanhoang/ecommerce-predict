import { Button, Divider, Input, Logo } from "@components/common";
import { cn } from "@hooks/cn";
import { Link } from "react-router-dom";
import iconGoogle from "@assets/icons/google.svg";
import iconMicrosoft from "@assets/icons/microsoft.svg";
import iconApple from "@assets/icons/apple.svg";

export const SignUpPage = () => {
  const styleBtn = "h-[52px] w-full";
  const styleIcon = "w-5 h-5 mr-2";

  const optionsLogin = [
    {
      key: 0,
      name: "Continue with Google",
      icon: iconGoogle,
    },
    {
      key: 1,
      name: "Continue with Microsoft Account",
      icon: iconMicrosoft,
    },
    {
      key: 2,
      name: "Continue with Apple",
      icon: iconApple,
    },
  ];

  return (
    <div className="flex flex-col items-center mt-16">
      <Logo />
      <div className="py-20 flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center mb-6">
          Create your account
        </h1>
        <Input label="Username" />
        <Input label="Password" type="password" />
        <Input label="Confirm password" type="password" />
        <Button
          center
          type="primary"
          className={cn("text-center mt-3", styleBtn)}>
          Sign In
        </Button>
        <div className="flex items-center justify-center text-sm gap-1">
          <p>Already have an account?</p>
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </div>
        <Divider text="OR" className="my-4" />
        <div className="flex flex-col gap-y-2">
          {optionsLogin.map((option) => (
            <Button
              key={option.key}
              leftIcon={
                <img
                  className={styleIcon}
                  src={option.icon}
                  alt="icon google"
                />
              }
              type="outline"
              className={styleBtn}>
              {option.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
