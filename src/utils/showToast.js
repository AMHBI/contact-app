import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (alert, type) => {
    if (type === "error") {
      toast.error(alert, {
        position: "top-center",
        theme: "colored",
      });
    } else if (type === "success") {
      toast.success(alert, {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  export default showToast