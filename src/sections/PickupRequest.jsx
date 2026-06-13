import { useState } from "react";
import { createPickup } from "../services/pickupService";
import Notification from "../components/common/Notification";

function PickupRequest({ user }) {

  const [material, setMaterial] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [notification, setNotification] =
    useState({
      show: false,
      message: "",
      type: "success"
    });

   
   const handleSubmit = async () => {

        if (
          material.trim().length < 3
        ) {

          setNotification({
            show: true,
            message:
              "Please enter a valid material.",
            type: "error"
          });

          return;
        }

        if (
          !quantity.trim()
        ) {

          setNotification({
            show: true,
            message:
              "Please enter quantity.",
            type: "error"
          });

          return;
        }

        if (
          address.trim().length < 10
        ) {

          setNotification({
            show: true,
            message:
              "Please enter complete pickup address.",
            type: "error"
          });

          return;
        }

        setLoading(true);

        try {

          const result =
            await createPickup({

              userId:
                user.userId,

              userName:
                user.name,

              mobile:
                user.mobile,

              material:
                material.trim(),

              quantity:
                quantity.trim(),

              address:
                address.trim()

            });

          if (
            result.success
          ) {

            setNotification({
              show: true,
              message:
                `Pickup request submitted successfully. Order ID: ${result.orderId}`,
              type: "success"
            });

            setMaterial("");
            setQuantity("");
            setAddress("");

          }

        } catch (err) {

          console.log(err);

          setNotification({
            show: true,
            message:
              "Failed to submit pickup request.",
            type: "error"
          });

        } finally {

          setLoading(false);

        }

      };
  return (

    <section
      id="pickup"
      className="
      py-24
      bg-gradient-to-br
      from-white
      via-green-50
      to-white
      "
    >

      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() =>
          setNotification(prev => ({
            ...prev,
            show: false
          }))
        }
      />

      <div className="max-w-4xl mx-auto px-6">

        <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-3 text-slate-900
          "
        >
          Request Pickup
        </h2>

        <p
          className="
          text-center
          text-gray-500
          mb-10
          "
        >
          Schedule your e-waste pickup request
        </p>

        <div
          className="
          relative
          bg-white
          rounded-3xl
          shadow-2xl
          overflow-hidden
          p-8
          "
        >

          {/* Top Right Corner */}

          <div
            className="
            absolute
            top-0
            right-0
            w-24
            h-24
            border-t-4
            border-r-4
            border-green-600
            rounded-tr-3xl
            "
          />

          {/* Bottom Left Corner */}

          <div
            className="
            absolute
            bottom-0
            left-0
            w-24
            h-24
            border-b-4
            border-l-4
            border-green-600
            rounded-bl-3xl
            "
          />

          {/* Green Glow */}

          <div
            className="
            absolute
            -top-10
            -left-10
            w-40
            h-40
            bg-green-100
            rounded-full
            blur-3xl
            opacity-50
            "
          />

          {/* Decorative Background */}

          <div
            className="
            absolute
            right-5
            bottom-5
            text-[140px]
            opacity-[0.03]
            select-none
            pointer-events-none
            "
          >
            ♻
          </div>

          <div className="relative z-10">

            <span
              className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-green-100
              text-green-700
              font-semibold
              text-sm
              mb-4
              "
            >
              Quick Pickup
            </span>

            <h3
              className="
              text-2xl
              font-bold
              mb-2 text-slate-900
              "
            >
              Pickup Request Form
            </h3>

            <p
              className="
              text-gray-500
              mb-6
              "
            >
              Fill the details below and our team will contact you shortly.
            </p>

            <input
              type="text"
              placeholder="Material"
              value={material}
              onChange={(e)=>
                setMaterial(
                  e.target.value
                )
              }
              className="
              w-full
              border
              border-gray-200
              p-4
              rounded-xl
              mb-4
              focus:outline-none
              focus:ring-2
              focus:ring-green-200
              focus:border-green-500
              "
            />

            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e)=>
                setQuantity(
                  e.target.value
                )
              }
              className="
              w-full
              border
              border-gray-200
              p-4
              rounded-xl
              mb-4
              focus:outline-none
              focus:ring-2
              focus:ring-green-200
              focus:border-green-500
              "
            />

            <textarea
              rows="4"
              placeholder="Pickup Address"
              value={address}
              onChange={(e)=>
                setAddress(
                  e.target.value
                )
              }
              className="
              w-full
              border
              border-gray-200
              p-4
              rounded-xl
              mb-5
              focus:outline-none
              focus:ring-2
              focus:ring-green-200
              focus:border-green-500
              "
            />

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
                py-4
                rounded-xl
                font-semibold
                duration-300
                hover:shadow-xl
                hover:scale-[1.01]
                "
              >
                {loading
                  ? "Submitting..."
                  : "Submit Pickup Request"}
              </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PickupRequest;