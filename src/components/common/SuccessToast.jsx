import { CheckCircle } from "lucide-react";

function SuccessToast({
  show,
  message
}) {

  if (!show) return null;

  return (
    <div
      className="
      fixed
      top-24
      right-6
      z-[9999]
      bg-white
      shadow-2xl
      rounded-2xl
      border-l-4
      border-green-600
      px-5
      py-4
      min-w-[320px]
      animate-[fadeIn_.3s_ease]
      "
    >
      <div className="flex items-center gap-3">

        <CheckCircle
          className="text-green-600"
          size={24}
        />

        <div>

          <p className="font-semibold">
            Success
          </p>

          <p className="text-sm text-gray-600">
            {message}
          </p>

        </div>

      </div>
    </div>
  );
}

export default SuccessToast;