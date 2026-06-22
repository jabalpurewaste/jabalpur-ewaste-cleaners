import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const whatsappNumber = "9179199758"; // change if needed

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* Tooltip */}
      <div className="
        absolute
        right-16
        top-1/2
        -translate-y-1/2
        bg-slate-900
        text-white
        text-sm
        px-3
        py-2
        rounded-lg
        opacity-0
        pointer-events-none
        group-hover:opacity-100
        transition-all
        duration-300
        whitespace-nowrap
      ">
        Chat With Us
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        aria-label="Chat on WhatsApp"
      >

        {/* Pulse Ring */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-green-500
            animate-ping
            opacity-30
          "
        />

        {/* Main Button */}
        <div
          className="
            relative
            w-40
            h-14
            md:w-12
            md:h-12
            rounded-full
            bg-gradient-to-br
            from-green-500
            to-green-600
            shadow-[0_8px_30px_rgba(34,197,94,0.4)]
            flex
            items-center
            justify-center
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:shadow-[0_12px_40px_rgba(34,197,94,0.6)]
            cursor-pointer
          "
        >
          <FaWhatsapp
            size={30}
            className="text-white"
          />
        </div>

      </a>

    </div>
  );
}