import { CheckCircle } from "lucide-react";

function FormSuccess({ message, show }) {

  if (!show) return null;

  return (
    <div
      className="
      fixed
      top-24
      right-6
      z-[9999]
      bg-white
      border-l-4
      border-r
      border-b
      border-green-600
      rounded-xl
      shadow-xl
      px-5
      py-4
      min-w-[320px]
      "
    >
      <div className="flex items-center gap-3">

        <CheckCircle
          className="text-green-600"
          size={22}
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

export default FormSuccess;