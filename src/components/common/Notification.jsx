import { useEffect } from "react";

import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle
} from "lucide-react";

function Notification({

  message,
  show,
  onClose,
  type = "success"

}) {

  useEffect(() => {

    if (!show) return;

    const timer =
      setTimeout(() => {

        onClose();

      }, 3000);

    return () =>
      clearTimeout(timer);

  }, [show, onClose]);

  if (!show) return null;

  const styles = {

    success: {

      title: "Success",

      icon:
        <CheckCircle2
          size={18}
          className="text-green-600"
        />,

      border:
        "border-green-600"

    },

    error: {

      title: "Validation Error",

      icon:
        <AlertCircle
          size={18}
          className="text-red-600"
        />,

      border:
        "border-red-600"

    },

    warning: {

      title: "Warning",

      icon:
        <AlertTriangle
          size={18}
          className="text-orange-500"
        />,

      border:
        "border-orange-500"

    }

  };

  const current =
    styles[type];

  return (

    <div
      className="
        fixed  
        top-[73px]
        left-1/2
        -translate-x-1/2
        z-[9999]
      "
    >

      <div
        className={`
        bg-white
        border-l-4
        border-r
        border-b
        shadow-xl
        rounded-xl
        px-5
        py-2.5
        w-[650px]
        max-w-[92vw]
        ${current.border}
        `}
      >

        <div className="flex items-center gap-3">

          {current.icon}

          <div>

           <p className="font-semibold text-sm text-slate-800">
              {current.title}
            </p>

           <p className="text-xs text-slate-600">
              {message}
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Notification;