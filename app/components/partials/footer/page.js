import { FooterMenu } from "@/app/_lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary custom-container-fluid shadow-shadow2 px-8">
      <div className="global-container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full bg-secondaryShade1 shadow-shadow2 py-4 custom-container-fluid md:h-16">
      <div className="flex">
          <p className="text-sm text-grey text-darkWhite flex items-center font-medium">
            ©️ 2024, Muse. All Rights Reserved
          </p>
        </div>
        <div className="block">
          <ul className="flex items-center gap-5">
            {FooterMenu &&
              FooterMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-secondary hover:text-[#1495ea] text-sm py-2 block font-normal"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
