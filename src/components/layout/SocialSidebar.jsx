import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function SocialSidebar() {
  return (
    <div
      className="
      fixed
      right-6
      top-1/2
      -translate-y-1/2
      hidden
      lg:flex
      flex-col
      gap-4
      z-50
      "
    >
      <a
        href="#"
        className="
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center

        bg-white
        dark:bg-slate-800

        text-blue-600
        dark:text-blue-400

        border
        border-gray-200
        dark:border-slate-700

        shadow-lg

        hover:bg-blue-600
        hover:text-white
        hover:scale-110

        transition-all
        duration-300
        "
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center

        bg-white
        dark:bg-slate-800

        text-pink-600
        dark:text-pink-400

        border
        border-gray-200
        dark:border-slate-700

        shadow-lg

        hover:scale-110
        hover:text-white

        hover:bg-[linear-gradient(45deg,#833AB4,#C13584,#E1306C,#FD1D1D,#F56040)]

        transition-all
        duration-300"
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default SocialSidebar;