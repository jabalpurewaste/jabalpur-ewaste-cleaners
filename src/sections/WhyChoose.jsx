import { whyChooseData } from "../data/whyChooseData";
import { FaCheckCircle } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="py-24 bg-green-50 dark:bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {whyChooseData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-md"
            >
              <FaCheckCircle className="text-green-600 text-2xl" />

              <span className="text-lg">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;