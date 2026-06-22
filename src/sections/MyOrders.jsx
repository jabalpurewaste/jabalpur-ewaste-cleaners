import { useEffect, useState } from "react";

import {
  FaClipboardList,
  FaRecycle,
  FaCheckCircle,
  FaTruck,
  FaClock,
  FaTimesCircle,
  FaThumbsUp
} from "react-icons/fa";

import { fetchOrders }
from "../services/pickupService";

function MyOrders({ user }) {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const loadOrders =
    async () => {

      if (!user?.userId) return;

      try {

        const result =
          await fetchOrders(
            user.userId
          );

        setOrders(
          result.orders || []
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

  useEffect(() => {

    if (!user?.userId)
      return;

    loadOrders();

    const interval =
      setInterval(
        loadOrders,
        5000
      );

    return () =>
      clearInterval(
        interval
      );

  }, [user]);

  const getStatusStyle =
    (status) => {

      const value =
        status?.toLowerCase();

      switch (value) {

        case "accepted":
          return {
            bg: "bg-emerald-100",
            text: "text-emerald-700",
            border: "border-emerald-500",
            icon: <FaThumbsUp />
          };

        case "pending":
          return {
            bg: "bg-yellow-100",
            text: "text-yellow-700",
            border: "border-yellow-500",
            icon: <FaClock />
          };

        case "pickup scheduled":
          return {
            bg: "bg-blue-100",
            text: "text-blue-700",
            border: "border-blue-500",
            icon: <FaTruck />
          };

        case "completed":
          return {
            bg: "bg-green-100",
            text: "text-green-700",
            border: "border-green-500",
            icon: <FaCheckCircle />
          };

        case "canceled":
        case "cancelled":
          return {
            bg: "bg-red-100",
            text: "text-red-700",
            border: "border-red-500",
            icon: <FaTimesCircle />
          };

        default:
          return {
            bg: "bg-gray-100",
            text: "text-gray-700",
            border: "border-gray-400",
            icon: <FaClock />
          };
      }

    };

  return (

    <section
      id="orders"
      className="
      py-24
      bg-gradient-to-b
      from-green-50
      via-white
      to-green-50
      "
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-12">

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-green-100
            text-green-700
            mb-4
            font-medium
            "
          >
            <FaRecycle />
            Live Order Tracking
          </div>

          <h2
            className="
            text-4xl
            font-bold text-slate-900
            "
          >
            My Orders
          </h2>

          {/* <p
            className="
            text-gray-500
            mt-3
            "
          >
            Status updates refresh automatically every 5 seconds
          </p> */}

          {orders.length > 0 && (

            <div
              className="
              inline-flex
              mt-4
              px-4
              py-2
              rounded-full
              bg-white
              shadow-md
              text-green-700
              font-medium
              "
            >
              Total Orders : {orders.length}
            </div>

          )}

        </div>

        {loading ? (

          <div className="text-center text-lg">
            Loading Orders...
          </div>

        ) : orders.length === 0 ? (

          <div
            className="
            bg-white
            rounded-3xl
            shadow-xl
            p-10
            text-center
            "
          >

            <FaClipboardList
              className="
              text-5xl
              text-green-600
              mx-auto
              mb-4
              "
            />

            <h3
              className="
              text-2xl
              font-semibold
              mb-2
              "
            >
              No Orders Yet
            </h3>

            <p className="text-gray-500">
              Your pickup requests will appear here.
            </p>

          </div>

        ) : (

          <div
            className="
            grid
            md:grid-cols-2
            gap-6 text-slate-900
            "
          >

            {orders.map(
              (
                item,
                index
              ) => {

                const status =
                  getStatusStyle(
                    item.status
                  );

                return (

                  <div
                    key={index}
                    className={`
                    bg-white
                    rounded-3xl
                    shadow-lg
                    p-6
                    border-l-4
                    ${status.border}
                    hover:-translate-y-1
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    `}
                  >

                    <div
                      className="
                      flex
                      justify-between
                      items-start
                      mb-5
                      "
                    >

                      <div>

                        <p
                          className="
                          text-xs
                          text-gray-400
                          "
                        >
                          ORDER ID
                        </p>

                        <h3
                          className="
                          font-bold
                          text-lg
                          break-all
                          "
                        >
                          {item.orderId}
                        </h3>

                      </div>

                      <div
                        className={`
                        flex
                        items-center
                        gap-2
                        px-3
                        py-1.5
                        rounded-full
                        text-sm
                        font-medium
                        ${status.bg}
                        ${status.text}
                        `}
                      >

                        {status.icon}

                        {item.status}

                      </div>

                    </div>

                    <div className="space-y-4">

                      <div>

                        <p
                          className="
                          text-xs
                          uppercase
                          tracking-wide
                          text-gray-400
                          "
                        >
                          Material
                        </p>

                        <p
                          className="
                          font-medium
                          text-slate-700
                          "
                        >
                          {item.material}
                        </p>

                      </div>

                      <div>

                        <p
                          className="
                          text-xs
                          uppercase
                          tracking-wide
                          text-gray-400
                          "
                        >
                          Quantity
                        </p>

                        <p
                          className="
                          font-medium
                          text-slate-700
                          "
                        >
                          {item.quantity}
                        </p>

                      </div>

                    </div>

                  </div>

                );

              }
            )}

          </div>

        )}

      </div>

    </section>
  );
}

export default MyOrders;