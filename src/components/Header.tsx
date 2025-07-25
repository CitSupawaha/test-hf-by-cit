import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import En from "../assets/image/en.png";
import Logo from "../assets/image/logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"; 

const navItems = ["Markets", "Trading", "Investing", "Tools & Education", "Company"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#161616] text-[#EEEEEE] px-4 md:px-12 py-3">
      <div className="hidden xl:flex justify-between items-center max-w-screen-xl mx-auto">
        <p className="text-xs text-[#A8A8A8]">Member of HF Markets Group</p>
        <div className="flex items-center gap-4 text-sm">
          <Button
            variant="outline"
            size="sm"
            className="gap-1 text-white bg-[#161616] border-[#999999] h-7 px-3"
          >
            Download App
          </Button>
          <span className="text-gray-400">Contact us</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-400">Partner with us</span>
          <span className="text-gray-400">|</span>
          <img src={En} alt="EN" className="w-5 h-5" />
        </div>
      </div>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto xl:mt-4">
        <div className="flex items-center gap-x-4 xl:gap-x-12">
          <img src={Logo} alt="HFM Logo" className="h-8 xl:h-14 w-auto" />
          <nav className="hidden xl:flex gap-6 text-sm text-[#EEEEEE]">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="xl:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#161616] text-white w-[240px]">
                <SheetHeader>  <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
              
              </div></SheetHeader>
            
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm hover:text-white text-[#EEEEEE] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-[#179149] hover:bg-green-500">Register</Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-[#EEEEEE] border-[#CD0511] hover:bg-gray-800"
                >
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden xl:flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="text-[#EEEEEE] border-[#CD0511] bg-transparent w-[70px] h-[36px]"
          >
            Login
          </Button>
          <Button
            size="sm"
            className="bg-[#179149] hover:bg-green-500 text-white w-[100px] h-[36px]"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
