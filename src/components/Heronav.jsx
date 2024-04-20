"use client";

import React from "react";
import {
   CheckCircle,
   ChevronDown,
   ChevronUp,
   Menu,
   Star,
   X,
} from "lucide-react";

const menuItems = [
   {
      name: "Home",
      href: "/",
   },
   {
      name: "Docs",
      href: "",
   },
   {
      name: "About Us",
      href: "/about",
   },
   {
      name: "Blogs",
      href: "/blogs",
   },
   {
      name: "Contact Us",
      href: "/contact",
   },
];

export default function NavBarSection() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="w-full bg-transparent pb-4 relative" id="sticky-nav">
         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 mt-4 rounded-lg sticky top-0">
            <div className="inline-flex items-center space-x-2 ">
               <span className="font-bold text-3xl">Sight Speek</span>
            </div>
            <div className="hidden lg:block">
               <ul className="inline-flex space-x-8">
                  {menuItems.map((item) => (
                     <li key={item.name}>
                        <a
                           href={item.href}
                           className="text-sm font-semibold text-white hover:text-slate-400">
                           {item.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="hidden lg:block">
               {/* <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Button text
               </button> */}
               <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Login
               </button>
            </div>
            <div className="lg:hidden">
               <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
            </div>
            {isMenuOpen && (
               <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                  <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                     <div className="px-5 pb-6 pt-5">
                        <div className="flex items-center justify-between">
                           <div className="inline-flex items-center space-x-2">
                              <span className="font-bold">Myfuse.In</span>
                           </div>
                           <div className="-mr-2">
                              <button
                                 type="button"
                                 onClick={toggleMenu}
                                 className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                 <span className="sr-only">Close menu</span>
                                 <X className="h-6 w-6" aria-hidden="true" />
                              </button>
                           </div>
                        </div>
                        <div className="mt-6">
                           <nav className="grid gap-y-4">
                              {menuItems.map((item) => (
                                 <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50">
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                       {item.name}
                                    </span>
                                 </a>
                              ))}
                           </nav>
                        </div>
                        <button
                           type="button"
                           className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                           Login
                        </button>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </header>
   );
}
