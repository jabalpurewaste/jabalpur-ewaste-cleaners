import { materialsData } from "../data/materialsData";

function Materials() {
  return (
    <section
      id="materials"
      className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* Decorative Blur */}

      <div
        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-green-500/5
        rounded-full
        blur-3xl
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold tracking-widest uppercase mb-2">
            Scrap Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Materials We Buy
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            We purchase bulk quantities of electronic waste materials from
            hospitals, institutions, corporates and industries at competitive
            market prices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {materialsData.map((item, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              from-white
              to-green-50
              dark:from-slate-800
              dark:to-slate-900
              p-8
              text-center
              shadow-lg
              border
              border-gray-100
              dark:border-slate-700
              hover:-translate-y-3
              hover:shadow-2xl
              duration-300
              "
            >
              {/* Decorative Background */}

              <div
                className="
                absolute
                -right-8
                -bottom-8
                w-28
                h-28
                rounded-full
                bg-green-100
                dark:bg-green-900/20
                group-hover:scale-150
                duration-500
                "
              />

              <div className="relative z-10">
                <div
                  className="
                  w-20
                  h-20
                  mx-auto
                  mb-5
                  rounded-full
                  bg-green-100
                  dark:bg-green-900/30
                  flex
                  items-center
                  justify-center
                  text-4xl
                  group-hover:scale-110
                  duration-300
                  "
                >
                  ♻️
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {item}
                </h3>

                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Bulk Purchase
                </p>

                <div
                  className="
                  mt-5
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-green-700
                  text-white
                  text-sm
                  font-medium
                  "
                >
                  Best Market Price
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Materials;