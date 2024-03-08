'use client';

import Link from "next/link";
import iconAdd from '../../assets/add.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="flex fixed z-10 top-0 justify-around items-center w-full h-16"
    >
      <Link
        className="font-bold text-white"
        href="/listphones">Lista</Link>
      <Link
        className="font-bold text-white text-2xl"
        href="https://lexartlabs.com/"
      >LexartLabs</Link>
      <Link href="/adicionar">{
        <Image
          src={iconAdd}
          alt="adicionar"
          className="w-8 h-8"
        />
      }</Link>
    </header>
  )
}