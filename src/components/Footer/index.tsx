import Link from "next/link";
import Image from "next/image";

import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";

const LINKS = [
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "How we work",
    href: "#work",
  },
  {
    label: "Our Services",
    href: "#services",
  },
  {
    label: "Career Opportunities",
    href: "#career",
  },
  {
    label: "Contact Us",
    href: "#contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#518A51]">
      <div className="flex justify-between px-[88px] py-[32px]">
        <div className="flex flex-col gap-3">
          {LINKS.map(({ href, label }) => (
            <Link key={href} className="text-[20px]" href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="text-xl">
          Contact Information:
          <br />
          Email: aestheticgardensuk@gmail.com
          <br />
          Social medias:
          <div className="mt-3 flex gap-[22px]">
            <Link
              target="_blank"
              href={
                "https://www.instagram.com/aestheticgardensuk?igsh=b2pvNTdoMDFiNWN1&utm_source=qr"
              }
            >
              <Image src={InstagramIcon} alt="Instagram" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=61561168437821"}
            >
              <Image src={FacebookIcon} alt="Facebook" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white py-3 text-center">
        2024 © Aesthetic Gardens LTD | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
