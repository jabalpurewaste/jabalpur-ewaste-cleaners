function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Jabalpur E-Waste Cleaners
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Safe collection, transportation and environmentally responsible
              disposal of electronic waste for hospitals, banks,
              institutions, corporate organizations and individuals.
            </p>

            <div className="mt-5">
              <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-medium">
                Safe • Responsible • Sustainable
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#home"
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  Services & Solutions
                </a>
              </li>

              <li>
                <a
                  href="#materials"
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  Materials We Buy
                </a>
              </li>

              <li>
                <a
                  href="#certificates"
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  Certificates
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <a
                href="tel:7024298343"
                className="block hover:text-green-400 transition cursor-pointer"
              >
                📞 7024298343
              </a>

              <a
                href="tel:9179199758"
                className="block hover:text-green-400 transition cursor-pointer"
              >
                📞 9179199758
              </a>

              <a
                href="tel:9424957664"
                className="block hover:text-green-400 transition cursor-pointer"
              >
                📞 9424957664
              </a>

              <a
                href="mailto:jabalpurwaste@gmail.com"
                className="block hover:text-green-400 transition cursor-pointer"
              >
                ✉️ jabalpurwaste@gmail.com
              </a>

              <a
                href="https://maps.google.com/?q=IT+Park+Plot+No+61+Phase+2+Bargi+Hills+Purwa+Jabalpur+Madhya+Pradesh+482008"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-green-400 transition cursor-pointer"
              >
                📍 IT Park, Plot No 61, Phase 2,
                Bargi Hills, Purwa,
                Jabalpur, MP - 482008
              </a>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect With Us
            </h3>

            <div className="flex gap-5 mb-5">

              <a
                href="#"
                className="cursor-pointer hover:scale-110 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>

              <a
                href="#"
                className="cursor-pointer hover:scale-110 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>

              <a
                href="#"
                className="cursor-pointer hover:scale-110 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  className="w-10 h-10"
                />
              </a>

            </div>

            <a
              href="mailto:jabalpurwaste@gmail.com"
              className="text-gray-300 hover:text-green-400 transition cursor-pointer"
            >
              ✉️ jabalpurwaste@gmail.com
            </a>

          </div>

        </div>

        {/* Google Map */}
        <div className="mt-12">

          <h3 className="text-xl font-semibold mb-4">
            Find Us On Map
          </h3>

          <div className="overflow-hidden rounded-2xl border border-green-700 shadow-2xl">

            <iframe
              title="Jabalpur E-Waste Cleaners Location"
              src="https://maps.google.com/maps?q=IT%20Park%20Plot%20No%2061%20Phase%202%20Bargi%20Hills%20Purwa%20Jabalpur%20Madhya%20Pradesh%20482008&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-green-800 mt-12 pt-6 text-center">

          <p className="text-gray-400">
            © 2026 Jabalpur E-Waste Cleaners. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;