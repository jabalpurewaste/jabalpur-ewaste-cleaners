import { useState } from "react";

import { submitEnquiry }
from "../services/enquiryService";

import Notification
from "../components/common/Notification";

function Enquiry({ user }) {

  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [contactNumber, setContactNumber] =
    useState(user?.mobile || "");

  const [notification, setNotification] =
    useState({
      show: false,
      message: "",
      type: "success"
    });

  const handleSubmit = async () => {

    /* LOGIN CHECK */

    if (!user) {

      setNotification({
        show: true,
        message:
          "Please login first to submit enquiry.",
        type: "error"
      });

      return;
    }

    /* DESCRIPTION VALIDATION */

    if (!description.trim()) {

      setNotification({
        show: true,
        message:
          "Please enter your requirement.",
        type: "error"
      });

      return;
    }

    /* MOBILE VALIDATION */

    const mobileRegex =
      /^[6-9]\d{9}$/;

    if (
      !mobileRegex.test(contactNumber)
    ) {

      setNotification({
        show: true,
        message:
          "Please enter a valid 10 digit mobile number.",
        type: "error"
      });

      return;
    }

    setLoading(true);

    try {

      const result =
        await submitEnquiry({

          userId:
            user.userId,

          userName:
            user.name,

          mobile:
            contactNumber,

          description:
            description.trim()

        });

      if (result.success) {

        setNotification({
          show: true,
          message:
            `Enquiry submitted successfully. ID: ${result.enquiryId}`,
          type: "success"
        });

        setDescription("");

      }

    } catch (err) {

      console.log(err);

      setNotification({
        show: true,
        message:
          "Failed to submit enquiry.",
        type: "error"
      });

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      id="enquiry"
      className="
      py-24
      bg-gradient-to-br
      from-green-50
      via-white
      to-green-100
      dark:from-slate-900
      dark:via-slate-800
      dark:to-slate-900
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

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span
              className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-green-100
              text-green-700
              font-semibold
              mb-5
              "
            >
              Connect With Us
            </span>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              mb-6
              text-slate-900
              dark:text-white
              "
            >
              Need E-Waste Collection
              or Disposal Support?
            </h2>

            <p
              className="
              text-lg
              text-gray-600
              dark:text-gray-300
              mb-8
              "
            >
              Share your requirement and our
              team will contact you for
              collection, recycling, disposal
              support and certification.
            </p>

          </div>

          <div
            className="
            relative
            bg-white
            dark:bg-slate-800
            p-8
            rounded-3xl
            shadow-2xl
            overflow-hidden
            "
          >

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
                Quick Support
              </span>

              <h3
                className="
                text-2xl
                font-bold
                mb-2
                text-slate-900
                dark:text-white
                "
              >
                Submit Enquiry
              </h3>

              <p
                className="
                text-gray-500
                dark:text-gray-300
                mb-6
                "
              >
                Our team will contact you shortly.
              </p>

              <textarea
                rows="6"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe your requirement..."
                className="
                w-full
                border
                border-gray-200
                rounded-xl
                p-4
                mb-5
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-green-500
                text-black
                dark:text-white
                placeholder:text-gray-400
                dark:placeholder:text-gray-500
                bg-white
                dark:bg-slate-800
                "
              />

              <input
                type="text"
                maxLength="10"
                value={contactNumber}
                onChange={(e) =>
                  setContactNumber(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="Contact Number"
                className="
                w-full
                border
                border-gray-200
                rounded-xl
                p-4
                mb-5
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-green-500
                text-black
                dark:text-white
                placeholder:text-gray-400
                dark:placeholder:text-gray-500
                bg-white
                dark:bg-slate-800
                "
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                w-full
                py-4
                rounded-xl
                bg-green-700
                hover:bg-green-800
                disabled:bg-green-400
                disabled:cursor-not-allowed
                text-white
                font-semibold
                duration-300
                hover:shadow-xl
                "
              >
                {loading
                  ? "Submitting..."
                  : "Submit Enquiry"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Enquiry;