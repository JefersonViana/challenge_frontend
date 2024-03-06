'use client';
import { AppStateProvider } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import visible from '../../assets/icons8-eye-24.png';
import invisible from '../../assets/icons8-invisível-24.png';
import Image from "next/image";

export default function FormLogin() {
  const { email, setEmail, password, setPassword } = AppStateProvider();
  const [isHidden, setIsHidden] = useState(true);

  const router = useRouter();

  const redirect = () => {
    router.push('/listphones');
  }

  return (
    <>
      <label
        className="flex flex-col gap-1 text-slate-500"
      >
        Email:
        <input
          className="border border-slate-400 rounded-md p-2"
          type="email"
          name="email"
          placeholder="usuario@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label
        className="flex flex-col gap-1 text-slate-500"
      >
        Senha:
        <input
          className="border border-slate-400 rounded-md p-2"
          type={isHidden ? "password" : "text"}
          name="password"
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="text-slate-500 text-sm relative left-56 bottom-11 w-8 h-9 p-1"
          type="button"
          onClick={() => setIsHidden(!isHidden)}
        >{isHidden ? (
          <Image
            src={visible}
            alt="visible"
            width={18}
            height={18}
          />
        ) : (
          <Image
            src={invisible}
            alt="invisible"
            width={18}
            height={18}
          />
        )}</button>
      </label>
    </>
  );
}