import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (alert, type) => {
  switch (type) {
    case "error":
      {
        toast.error(alert, {
          position: "top-center",
          theme: "colored",
        });
      }
      break;
    case "success":
      {
        toast.success(alert, {
          position: "top-center",
          theme: "colored",
        });
      }
      break;
    case "info":
      {
        toast.info(alert, {
          position: "top-center",
          theme: "colored",
        });
      }
      break;
    default:
      break;
  }

};

export default showToast;
