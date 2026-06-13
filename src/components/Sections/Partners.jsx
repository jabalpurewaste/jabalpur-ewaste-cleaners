import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getPartners } from "../../services/partnerService";

function Partners() {

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    loadPartners();
  }, []);

  const loadPartners = async () => {

    try {

      const result = await getPartners();

      console.log("PARTNERS API:", result);

      setPartners(result.partners || []);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <section
      className="
      py-16
      bg-white
      dark:bg-slate-900
      overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2
          className="
          text-center
          text-3xl
          md:text-4xl
          font-bold
          text-slate-800
          dark:text-white
          mb-10
          "
        >
          WE ARE PROUDLY ASSOCIATED WITH
        </h2>

        {/* Scroller */}

        <div className="relative max-w-6xl mx-auto">

          {/* Left Arrow */}

          <div
            className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-20
            w-11
            h-11
            rounded-full
            bg-white
            dark:bg-slate-800
            border
            border-gray-200
            dark:border-slate-700
            shadow-lg
            flex
            items-center
            justify-center
            "
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
          </div>

          {/* Right Arrow */}

          <div
            className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-20
            w-11
            h-11
            rounded-full
            bg-white
            dark:bg-slate-800
            border
            border-gray-200
            dark:border-slate-700
            shadow-lg
            flex
            items-center
            justify-center
            "
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300" />
          </div>

          {/* Cards */}

          <div className="overflow-hidden mx-14">

            <div
              className="
              flex
              gap-8
              animate-marquee
              whitespace-nowrap
              py-4
              "
            >

              {[...partners, ...partners].map((item, index) => (

                <div
                  key={index}
                  className="
                  min-w-[220px]
                  h-28
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-gray-200
                  dark:border-slate-700
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  duration-300
                  flex
                  flex-col
                  items-center
                  justify-center
                  "
                >

                  <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-green-100
                    dark:bg-green-900/30
                    flex
                    items-center
                    justify-center
                    text-green-700
                    font-bold
                    mb-2
                    "
                  >
                    ♻
                  </div>

                  <span
                    className="
                    text-lg
                    font-semibold
                    text-slate-700
                    dark:text-white
                    "
                  >
                    {item.name}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Partners;