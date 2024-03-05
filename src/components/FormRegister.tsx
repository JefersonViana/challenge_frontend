'use client';
import { useRouter } from "next/navigation";
import FormLogin from "./FormLogin";

type Props = {
  email: string;
  password: string;
  userName: string;
  setEmail: (e: string) => void;
  setPassword: (e: string) => void;
  setUserName: (e: string) => void;
}

export default function FormRegister({ email, password, userName, setEmail, setPassword, setUserName }: Props) {
  const router = useRouter();
  const redirect = () => {
    router.push('/home');
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
      <FormLogin email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
    </>
  );
}