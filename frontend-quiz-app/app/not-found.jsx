import React from "react";
import Image from "next/image";
import NotFoundImg from "@/public/notfound-page.svg";
import Link from "next/link";
function notFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6  ">
      <h1 className="text-dark-navy text-4xl pt-20">
        The page you are looking for has not been created yet!
      </h1>
      <Link href="/" className="underline font-thin text-lg">
        Homepage
      </Link>
      <Image
        src={NotFoundImg}
        width={500}
        height={500}
        alt="Picture of Not Found"
      />
    </div>
  );
}

export default notFound;
