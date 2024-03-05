'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
type Props = {
  email: string;
  password: string;
  setEmail: (e: string) => void;
  setPassword: (e: string) => void;
}

export default function FormLogin({ email, password, setEmail, setPassword }: Props) {
  const [isHidden, setIsHidden] = useState(true);

  const router = useRouter();

  const redirect = () => {
    router.push('/home');
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
        >{isHidden ? '🏀' : '🏐'}</button>
      </label>
    </>
  );
}