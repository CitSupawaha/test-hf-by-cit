import {
  Facebook,
  X,
  Instagram,
  Youtube,
  Linkedin,
  BookOpen,
} from "lucide-react";
import AppStore from "../assets/image/app-store.png";
import GooglePlay from "../assets/image/googleplay.png";

const socialIcons = [
  { icon: <Facebook className="w-5 h-5" />, href: "#" },
  { icon: <X className="w-5 h-5" />, href: "#" },
  { icon: <Instagram className="w-5 h-5" />, href: "#" },
  { icon: <Youtube className="w-5 h-5" />, href: "#" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  { icon: <BookOpen className="w-5 h-5" />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white pt-10 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="text-sm">Find us on</p>
          <div className="flex gap-x-3 mt-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-white text-gray-400"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="mt-6">
            <p className="font-semibold mb-3 text-sm">Download HFM App</p>
            <div className="flex gap-4">
              <img src={AppStore} alt="App Store" className="h-8" />
              <img src={GooglePlay} alt="Google Play" className="h-8" />
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <p className="font-semibold mb-2 text-sm">Risk Warning</p>
          <p className="text-xs text-[#999999] leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu...
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
