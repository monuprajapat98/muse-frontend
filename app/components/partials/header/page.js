"use client";

import { useState } from "react";
import Image from "next/image";
import MuseLogo from "../../../../public/image/muse-logo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { FaBarsStaggered } from "react-icons/fa6";
import { MainMenu } from "@/app/_lib/constants";
import { Button } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter()

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary custom-container-fluid shadow-shadow2 py-4 px-8 fixed left-0 top-0 w-full z-[999]">
      <div className="flex items-center justify-between w-full flex-wrap global-container">
        <div className="flex items-center flex-shrink-0 text-white md:mr-8 lg:mr-8 xl:mr-8">
          <div className=" lg:hidden flex items-center ml-auto">
            <FaBarsStaggered
              size={25}
              className="text-[#1495ea] cursor-pointer mr-3"
              onClick={toggleMobileMenu}
            />
          </div>

          <Link href="/home">
            <Image
              src={MuseLogo}
              alt="logo"
              width={280}
              height={30}
              className="w-[160px] md:w-[180px] 2xl:w-[280px] h-[30px]"
            />
          </Link>
          <Link
            href="/"
            className={` "active-link text-[#1495ea]" : ""
              } block md:inline-block relative md:mt-0 text-secondary hover:text-[#1495ea] px-4 py-3 border-l-[1px] border-secondary`}
          >
            Developers
          </Link>
        </div>

        <div className={`hidden lg:flex lg:items-center lg:w-auto flex-grow`}>
          <div className="text-sm lg:flex-grow text-end">
            {/* {MainMenu &&
              MainMenu.map((item, index) => {
                return (
                  <Link
                    href={item.url}
                    key={index}
                    className={`${pathname === item.url ? "active-link text-[#1495ea]" : ""
                      } block md:inline-block relative md:mt-0 text-secondary hover:text-[#1495ea] px-4 py-3`}
                  >
                    {item.name}
                  </Link>
                );
              })} */}
            {MainMenu &&
              MainMenu.map((item, index) => {
                return (
                  <Link
                    href={item.url}
                    key={index}
                    className={`${pathname === item.url ? "active-link text-[#1495ea]" : ""
                      } block md:inline-block relative md:mt-0 text-secondary hover:text-[#1495ea] px-4 py-3`}
                  >
                    {item.name}
                  </Link>
                );
              })}

            <Button color="primary" onClick={() => router.push('/signin')} className=" mr-4 hover:bg-blue border-blue border-[1px] rounded-lg text-grey hover:text-white hover:!opacity-100">
              Login
            </Button>

            <Dropdown className="profileDropdown">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform profileDropdown"
                  name="Tony Reichert"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="settings" onClick={() => router.push('/profile')}>
                  My Profile
                </DropdownItem>
                <DropdownItem key="logout" onClick={() => router.push('/signin')} color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute h-screen md:h-auto z-50 pb-10 top-16 left-0 w-full bg-secondaryShade1 text-white shadow-lg border-t border-[#353535]">
          {MainMenu &&
            MainMenu.map((item, index) => {
              return (
                <Link
                  href={item.url}
                  key={index}
                  onClick={handleCloseMenu}
                  className={`${pathname === item.url ? "active-link text-white" : ""
                    } block md:inline-block relative md:mt-0 text-[#A6A6A6] hover:text-white px-5 py-3`}
                >
                  {item.name}
                </Link>
              );
            })}
        </div>
      )}
    </nav>
  );
};

export default Header;
