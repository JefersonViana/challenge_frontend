'use client';
import { useRouter } from "next/navigation";
import FormLogin from "./FormLogin";
import { AppStateProvider } from "@/context/AppProvider";

export default function FormRegister() {
  const { userName, setUserName } = AppStateProvider();
  const router = useRouter();
  const redirect = () => {
    router.push('/listphones');
  }

  return (
    <>
      <label
        className="flex flex-col gap-1 text-slate-500"
      >
        Nome:
        <input
          className="border border-slate-400 rounded-md p-2"
          type="text"
          name="userName"
          placeholder="Nome"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <FormLogin />
    </>
  );
}