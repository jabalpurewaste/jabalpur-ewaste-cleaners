import { certificatesData } from "../data/certificatesData";
import { ShieldCheck } from "lucide-react";

function Certificates() {

  return (

    <section
      id="certificates"
      className="py-24 bg-white dark:bg-slate-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span
            className="
            inline-block
            px-4
            py-1
            rounded-full
            bg-green-100
            text-green-700
            text-sm
            font-semibold
            mb-4
            "
          >
            Government Approved
          </span>

          <h2 className="text-4xl font-bold">
            Government Certifications
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We operate under authorized certifications and regulatory
            approvals, ensuring environmentally responsible and
            compliant recycling practices.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {certificatesData.map((item, index) => (

            <div
              key={index}
              className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-green-100
              bg-gradient-to-br
              from-white
              to-green-50
              dark:from-slate-800
              dark:to-slate-900
              p-8
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              {/* Decorative Top Border */}
              <div
                className="
                absolute
                top-0
                left-0
                w-full
                h-1
                bg-gradient-to-r
                from-green-500
                via-green-600
                to-green-400
                "
              />

              <div className="flex items-center gap-4 mb-5">

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-green-100
                  text-green-700
                  flex
                  items-center
                  justify-center
                  "
                >
                  <ShieldCheck size={28} />
                </div>

                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-green-100
                  text-green-700
                  text-xs
                  font-semibold
                  "
                >
                  Certified
                </span>

              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Certificates;