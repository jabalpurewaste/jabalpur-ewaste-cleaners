import { useEffect, useState } from "react";

import {
  User,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

function AuthPopup({
  onLogin,
  onClose
}) {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    const handleEsc = (e) => {

      if (e.key === "Escape") {
        onClose();
      }

    };

    window.addEventListener(
      "keydown",
      handleEsc
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleEsc
      );

    };

  }, [onClose]);

  const validateForm = () => {

    if (!name.trim()) {
      return "Please enter your name";
    }

    if (name.trim().length < 3) {
      return "Name should contain at least 3 characters";
    }

    const mobileRegex =
      /^[6-9]\d{9}$/;

    if (!mobileRegex.test(mobile)) {
      return "Enter a valid 10 digit mobile number";
    }

    const blockedNumbers = [
      "1234567890",
      "0000000000",
      "1111111111",
      "9999999999"
    ];

    if (
      blockedNumbers.includes(mobile)
    ) {
      return "Enter a valid mobile number";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Enter a valid email address";
    }

    if (!place.trim()) {
      return "Please enter your city/place";
    }

    return "";

  };

  const handleSubmit =
    async () => {

      const validationError =
        validateForm();

      if (validationError) {

        setError(validationError);
        return;

      }

      setError("");
      setLoading(true);

      try {

        await onLogin({

          name: name.trim(),
          mobile,
          email: email.trim(),
          place: place.trim()

        });

        onClose();

      } finally {

        setLoading(false);

      }

    };

  return (

    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black/50
      backdrop-blur-sm
      px-4
      animate-[fadeIn_.3s_ease]
      "
    >

      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
        w-full
        max-w-md
        bg-white
        dark:bg-slate-900
        rounded-3xl
        shadow-2xl
        border
        border-green-600
        p-8
        relative
        "
      >

        {/* Close Button */}

        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4
          text-gray-400
          hover:text-red-500
          text-2xl
          "
        >
          ×
        </button>

        <div className="text-center mb-6">

          <div
            className="
            w-16
            h-16
            mx-auto
            mb-4
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            text-3xl
            "
          >
            ♻️
          </div>

          <h2
            className="
            text-3xl
            font-bold
            text-slate-800
            dark:text-white
            "
          >
            Welcome to JEWC
          </h2>

          <p
            className="
            text-gray-500
            dark:text-gray-300
            mt-2
            "
          >
            Login to continue
          </p>

        </div>

        {/* Name */}

        <div className="relative mb-4">

          <User
            size={18}
            className="
            absolute
            left-4
            top-4
            text-gray-400
            "
          />

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
            w-full
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-black
            dark:text-white
            p-3
            pl-11
            rounded-xl
            focus:outline-none
            focus:border-green-600
            focus:ring-2
            focus:ring-green-200
            "
          />

        </div>

        {/* Mobile */}

        <div className="relative mb-4">

          <Phone
            size={18}
            className="
            absolute
            left-4
            top-4
            text-gray-400
            "
          />

          <input
            type="tel"
            maxLength={10}
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) =>
              setMobile(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              )
            }
            className="
            w-full
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-black
            dark:text-white
            p-3
            pl-11
            rounded-xl
            focus:outline-none
            focus:border-green-600
            focus:ring-2
            focus:ring-green-200
            "
          />

        </div>

        {/* Email */}

        <div className="relative mb-4">

          <Mail
            size={18}
            className="
            absolute
            left-4
            top-4
            text-gray-400
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
            w-full
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-black
            dark:text-white
            p-3
            pl-11
            rounded-xl
            focus:outline-none
            focus:border-green-600
            focus:ring-2
            focus:ring-green-200
            "
          />

        </div>

        {/* Place */}

        <div className="relative mb-4">

          <MapPin
            size={18}
            className="
            absolute
            left-4
            top-4
            text-gray-400
            "
          />

          <input
            placeholder="City / Place"
            value={place}
            onChange={(e) =>
              setPlace(e.target.value)
            }
            className="
            w-full
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-black
            dark:text-white
            p-3
            pl-11
            rounded-xl
            focus:outline-none
            focus:border-green-600
            focus:ring-2
            focus:ring-green-200
            "
          />

        </div>

        {error && (

          <div
            className="
            mb-4
            px-3
            py-2
            rounded-lg
            bg-red-50
            text-red-600
            text-sm
            border
            border-red-200
            "
          >
            {error}
          </div>

        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
          w-full
          bg-green-700
          hover:bg-green-800
          disabled:bg-green-400
          disabled:cursor-not-allowed
          text-white
          py-3
          rounded-xl
          font-semibold
          transition-all
          duration-300
          hover:shadow-lg
          "
        >
          {loading
            ? "Please wait..."
            : "Continue"}
        </button>

      </div>

    </div>

  );

}

export default AuthPopup;