'use client';
import ButtonGreen from "@/components/button/ButtonGreen";
import ButtonSlate from "@/components/button/ButtonSlate";
import FormLogin from "@/components/form/FormLogin";
import FormRegister from "@/components/form/FormRegister";
import { AppStateProvider } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const { email, password, userName } = AppStateProvider();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();

  const validateTextFieds = (e: any, text: string) => {
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email) || password.length < 6 || !isLogin && userName.length < 3) {
      setError(text);
      setTimeout(() => {
        setError('');
      }
      , 2000);
      return null;
    }
    // esperar resposta do banco e redirecionar para home
    router.push('/home');
  }

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    // setTimeout(() => {
    //   setIsLogin(true);
    //   router.push('/home');
    // }
    // , 2000);
  }

  return (
    <div
      className="bg-slate-900 h-screen flex justify-center items-center"
    >
      <form
        className="bg-slate-200 p-8 rounded-lg shadow-lg w-80 flex flex-col gap-2"
      >
        <h1
          className="text-2xl font-bold text-center text-slate-900"
        >LexartLabs</h1>
        {isLogin ? <FormLogin /> :  <FormRegister />}
        <small className="text-red-500 relative bottom-10 h-5">{error}</small>
        <div
          className="flex justify-between"
        >
          {isLogin ? (
            <ButtonSlate name="Registrar" handleClick={handleLogin} />
          ) : (
            <ButtonSlate name="Voltar" handleClick={handleLogin} />
          
          )}
          {isLogin ? (
            <ButtonGreen name="Entrar" text="Email ou senha incorretos!" handleClick={validateTextFieds}/>
          ) : (
            <ButtonGreen name="Criar" text="Campos Invalidos" handleClick={validateTextFieds}/>
          )}
        </div>
      </form>
    </div>
  );
}
