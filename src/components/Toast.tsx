import { toast, ToastOptions } from "react-toastify";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  options?: ToastOptions;
}

const Toast = ({ message = "", type = "success", options }: ToastProps) => {
  const processedOptions = {
    type,
    position:
      window.innerWidth > 768
        ? toast.POSITION.TOP_CENTER
        : toast.POSITION.BOTTOM_CENTER,
    autoClose: 3000,
    pauseOnFocusLoss: false,
    ...options,
  };

  return toast.success(message, processedOptions);
};

export { Toast };
