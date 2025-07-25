"use client";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { SOCIALS } from "@/constants";
import { usePathname } from "next/navigation";
import Head from "next/head";

const Header = () => {

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <>
      <Head>
        <title>FGDCM - Kharian Cantt </title>
        <meta
          name="description"
          content="Our focus is to make students motivated, studious, analytical, proactive, and focused. They are often ambitious, driven, and not afraid to take risks in their pursuit of knowledge and success. Join us in our mission to make a difference."
        />
      </Head>
      <header
        className={` animate-fade-in ${
          isHomePage ? "lg:fixed bg-white" : null
        }  w-full border-b`}
      >
        <div className="flex md:items-center justify-between md:py-1 md:mb-3 rounded-full bg-blue-100">
          <Link href="/" className=" md:32 mx-auto">
            <Image
              src="/logo1.jpeg"
              width={100}
              height={16}
              alt="FGDCM logo"
              objectFit="cover"
              className="rounded-full "
            />
          </Link>
          <h1 className="hidden xl:block font-bold   lg:mx-6 animate-pulse">
            FG Degree College for Men (FGDCM) Kharian Cantt
          </h1>
          <ul className="regular-14  xl:flex w-36 gap-1  items-center mx-auto hidden  ">
            {SOCIALS.links.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="fill-current hover:bg-gray-300 p-2 rounded-full transition duration-300"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={16}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            ))}
          </ul>

          <nav className="md:flex items-center justify-end gap-x-6 hidden w-full max-w-lg lg:mx-40">
            <NavItems />
          </nav>
          <Link href="/" className=" md:32  mx-auto">
            <Image
              src="/logo2.jpeg"
              width={100}
              height={16}
              alt="FGDCM logo"
              objectFit="cover"
              className="rounded-full "
            />
          </Link>
          <div className="lg:hidden m-7">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
