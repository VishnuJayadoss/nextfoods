'use client';
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Menu } from "lucide-react";

function MobileNavLink({
  href,
  children,
  setIsOpen,
}: {
  href: string;
  children: React.ReactNode;
  setIsOpen: (val: boolean) => void;
}) {
  return (
    <Link
      href={href}
      className="mobile-nav-link"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}

export default function MobileHeader() {
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const [subSubmenuOpen, setSubSubmenuOpen] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(true)} className="lg:hidden text-black">
        <Menu size={24} />
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          className="z-50 fixed inset-0 bg-opacity-50"
        >
          <motion.div className="relative bg-white shadow-lg p-5 w-64 h-full text-black">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="top-4 right-4 absolute text-black text-2xl"
            >
              <X size={24} />
            </button>

            {/* Back Buttons */}
            {submenuOpen && !subSubmenuOpen && (
              <button
                onClick={() => setSubmenuOpen(null)}
                className="top-4 left-4 absolute text-black text-2xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {subSubmenuOpen && (
              <button
                onClick={() => setSubSubmenuOpen(null)}
                className="top-4 left-4 absolute text-black text-2xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Nav Links */}
            <nav className="flex flex-col space-y-4 mt-12">
              {!submenuOpen && !subSubmenuOpen && (
                <>
                  <MobileNavLink href="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
                  <MobileNavLink href="/about" setIsOpen={setIsOpen}>About Us</MobileNavLink>

                  <div className="flex justify-between items-center mobile-nav-link">
                    <div className="flex-1 text-left">
                      <MobileNavLink href="/service" setIsOpen={setIsOpen}>
                        Services
                      </MobileNavLink>
                    </div>
                    <button
                      onClick={() => setSubmenuOpen("services")}
                      className="ml-2 p-1"
                      aria-label="Open services submenu"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Uncomment if needed */}
                  {/* <button
                    onClick={() => setSubmenuOpen("products")}
                    className="flex justify-between items-center mobile-nav-link"
                  >
                    Products <ChevronRight size={16} />
                  </button> */}

                 <MobileNavLink href="/menu" setIsOpen={setIsOpen}>Menu</MobileNavLink>  
                 <MobileNavLink href="/gallery" setIsOpen={setIsOpen}>Gallery</MobileNavLink>
                  <MobileNavLink href="/blog" setIsOpen={setIsOpen}>Blogs</MobileNavLink>
                  <MobileNavLink href="/contact" setIsOpen={setIsOpen}>Contact Us</MobileNavLink>
                </>
              )}

              {/* Services Submenu */}
              {submenuOpen === "services" && !subSubmenuOpen && (
                <>
                  <MobileNavLink href="/service/hh" setIsOpen={setIsOpen}>Service 1</MobileNavLink>
                  <MobileNavLink href="/service/jjj" setIsOpen={setIsOpen}>Service 2</MobileNavLink>

                  {/* <button
                    onClick={() => setSubSubmenuOpen("service-details")}
                    className="flex justify-between items-center submenu-link"
                  >
                    Service 3 <ChevronRight size={16} />
                  </button> */}
                </>
              )}

              {/* Products Submenu (if needed) */}
              {submenuOpen === "products" && !subSubmenuOpen && (
                <>
                  <MobileNavLink href="/product-1" setIsOpen={setIsOpen}>Product 1</MobileNavLink>
                  <MobileNavLink href="/product-2" setIsOpen={setIsOpen}>Product 2</MobileNavLink>

                  <button
                    onClick={() => setSubSubmenuOpen("product-details")}
                    className="flex justify-between items-center submenu-link"
                  >
                    Product 3 <ChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Nested Service Submenu */}
              {subSubmenuOpen === "service-details" && (
                <>
                  <MobileNavLink href="/service-3-1" setIsOpen={setIsOpen}>Service 3.1</MobileNavLink>
                  <MobileNavLink href="/service-3-2" setIsOpen={setIsOpen}>Service 3.2</MobileNavLink>
                </>
              )}

              {/* Nested Product Submenu */}
              {subSubmenuOpen === "product-details" && (
                <>
                  <MobileNavLink href="/product-3-1" setIsOpen={setIsOpen}>Product 3.1</MobileNavLink>
                  <MobileNavLink href="/product-3-2" setIsOpen={setIsOpen}>Product 3.2</MobileNavLink>
                </>
              )}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
