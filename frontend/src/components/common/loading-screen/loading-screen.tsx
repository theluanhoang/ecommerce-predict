import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin" size={40} />
    </div>
  );
};

export default LoadingScreen;
