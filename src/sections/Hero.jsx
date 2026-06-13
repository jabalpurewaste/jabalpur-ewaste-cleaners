import { motion } from "framer-motion";
import { heroData } from "../data/heroData";
import { FaRecycle } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      bg-gradient-to-br
      from-green-50
      via-white
      to-green-100
      dark:from-slate-900
      dark:via-slate-950
      dark:to-slate-900
      relative
      overflow-hidden
      "
    >
      {/* Background Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-300/20 rounded-full blur-3xl pointer-events-none"></div>
     <div className="absolute bottom-10 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        grid
        lg:grid-cols-2
        gap-14
        items-center
      "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-green-100
            dark:bg-green-900/20
            mb-6
          "
          >
            <FaRecycle className="text-green-600" />

            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Sustainable E-Waste Recycling
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
            text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-slate-800
            dark:text-white
          "
          >
            {heroData.title}
          </h1>

          {/* Subtitle */}
          <p
            className="
            mt-6
            text-lg
            text-slate-600
            dark:text-slate-300
            leading-8
          "
          >
            {heroData.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8" >

            <a
            href="#pickup"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-xl
              bg-green-700
              text-white
              font-semibold
              shadow-lg
              cursor-pointer
              transition-all
              duration-300
              hover:bg-green-800
              hover:scale-105
              hover:shadow-xl
            "
          >
            🚚 {heroData.button1}
          </a>

            <a
              href="tel:7024298343"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-xl
                border-2
                border-green-700
                text-green-700
                dark:text-green-400
                font-semibold
                cursor-pointer
                transition-all
                duration-300
                hover:bg-green-700
                hover:text-white
                hover:scale-105
                hover:shadow-lg
              "
            >
              📞 {heroData.button2}
            </a>

          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-3 mt-8">

            <div
              className="
                px-4
                py-2
                rounded-full
                bg-white
                shadow-md
                text-sm
                font-medium
                text-green-700
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              ✓ State Pollution Board
            </div>

            <div
              className="
                px-4
                py-2
                rounded-full
                bg-white
                shadow-md
                text-sm
                font-medium
                text-green-700
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              ✓ GST Registered
            </div>

            <div
              className="
                px-4
                py-2
                rounded-full
                bg-white
                shadow-md
                text-sm
                font-medium
                text-green-700
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              ✓ Udyam Certified
            </div>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="
              relative
              rounded-3xl
              overflow-hidden
              shadow-2xl
            "
          >
            <img
              src="/hero-placeholder.jpg"
              alt="Jabalpur E-Waste Cleaners"
              className="
                w-full
                max-w-lg
                rounded-3xl
                object-cover
                transition-all
                duration-500
                hover:scale-105
              "
            />

            {/* Overlay Badge */}
            <div
              className="
                absolute
                bottom-5
                left-5
                bg-white/90
                backdrop-blur-sm
                px-4
                py-3
                rounded-xl
                shadow-lg
              "
            >
              <p className="text-sm font-semibold text-green-700">
                ♻ Responsible E-Waste Disposal
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;