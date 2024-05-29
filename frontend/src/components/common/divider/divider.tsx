import { cn } from "@hooks/cn";

interface DividerProps {
  text?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ text, className }) => {
  return (
    <div
      className={cn("relative w-full h-[1px] bg-gray-mid", className)}>
      {text && (
        <span className="text-text text-sm absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white px-4">
          {text}
        </span>
      )}
    </div>
  );
};

export default Divider;
