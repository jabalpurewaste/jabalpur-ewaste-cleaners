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
        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 hover:bg-blue-600 hover:text-white duration-300"
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:text-white duration-300"
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default SocialSidebar;