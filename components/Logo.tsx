import Link from "next/link";
import Image from "next/image";
import logoImage from "@/images/company_logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center focus-visible:outline-none" aria-label="Huromata — home">
      <Image
        src={logoImage}
        alt="Huromata"
        height={36}
        priority
        className="h-9 w-auto object-contain"
      />
    </Link>
  );
}
