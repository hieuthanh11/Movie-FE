import { toast } from "react-toastify";

export const notifiSuccess = (str) => {
  toast.success("😲" + str.toUpperCase());
};

export const notifiError = (str) => {
  toast.error("😲" + str.toUpperCase());
};
