import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden"
    >
      {/* Background Decoration */}

      <div
        className="
        absolute
        left-0
        bottom-0
        w-[450px]
        h-[450px]
        opacity-5
        bg-no-repeat
        bg-contain
        "
        style={{
          backgroundImage: "url('/services-bg.jpg')",
        }}
      />

      <div
        className="
        absolute
        right-0
        top-0
        w-80
        h-80
        rounded-full
        bg-green-500/10
        blur-3xl
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold tracking-widest uppercase mb-2">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Services & Solutions
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            We provide professional e-waste collection, transportation,
            documentation and environmentally responsible disposal solutions
            for organizations and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="
              relative
              overflow-hidden
              rounded-3xl
              bg-white
              dark:bg-slate-800
              p-8
              shadow-lg
              border
              border-gray-100
              dark:border-slate-700
              hover:-translate-y-3
              hover:shadow-2xl
              duration-300
              group
              "
            >
              {/* Decorative Circle */}

              <div
                className="
                absolute
                -right-10
                -top-10
                w-32
                h-32
                rounded-full
                bg-green-100
                dark:bg-green-900/20
                group-hover:scale-125
                duration-500
                "
              />

              <div className="relative z-10">
                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-green-100
                  dark:bg-green-900/30
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                  "
                >
                  ♻️
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  {service.desc}
                </p>

                {/* <div className="mt-6 text-green-700 font-semibold flex items-center gap-2">
                  Learn More →
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;