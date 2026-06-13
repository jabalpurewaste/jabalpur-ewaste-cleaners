import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {

  return (

    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="space-y-6">

            <div className="flex gap-4">

              <FaPhone className="text-green-600 text-2xl" />

              <div>

                <h3 className="font-bold">
                  Phone
                </h3>

                <a href="tel:7024298343" className="hover:text-green-700"> 7024298343 </a>
                <br />
                <a href="tel:7024298343" className="hover:text-green-700"> 9179199758 </a>
                <br />
                <a href="tel:7024298343" className="hover:text-green-700"> 9424957664 </a>

              </div>

            </div>

            <div className="flex gap-4">

              <FaEnvelope className="text-green-600 text-2xl" />

              <div>

                <h3 className="font-bold">
                  Email
                </h3>

                <p>jabalpurwaste@gmail.com</p>

              </div>

            </div>

            <div className="flex gap-4">

              <FaMapMarkerAlt className="text-green-600 text-2xl" />

              <div>

                <h3 className="font-bold">
                  Address
                </h3>

                <p>
                  IT Park, Plot No 61,
                  Phase 2, Bargi Hills,
                  Purwa, Jabalpur,
                  MP 482008
                </p>

              </div>

            </div>

          </div>

          <div>

            <iframe
              title="map"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=IT%20Park,%20Plot%20No%2061,%20Phase%202,%20Bargi%20Hills,%20Purwa,%20Jabalpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;