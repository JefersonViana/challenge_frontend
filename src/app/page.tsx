'use client';
import ButtonGreen from "@/components/button/ButtonGreen";
import ButtonSlate from "@/components/button/ButtonSlate";
import FormLogin from "@/components/form/FormLogin";
import FormRegister from "@/components/form/FormRegister";
import { AppStateProvider } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const { email, password, userName, fetchLogin } = AppStateProvider();
  const [isLogin, setIsLogin] = useState(true);
  const [warning, setWaning] = useState('');

  const router = useRouter();

  const handleWaning = (message: string) => {
    setWaning(message);
    setTimeout(() => {
      setWaning('');
    }
    , 2000);
  }

  const validateTextFieds = (): boolean => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email) || password.length < 6 || !isLogin && userName.length < 3) {
      handleWaning('Preencha os campos corretamente!');
      return false;
    }
    return true;
  }

  const handleLogin = async (e: any, action: string) => {
    e.preventDefault();
    const response = validateTextFieds();
    if (response) {
      const res = await fetchLogin(action);
      if (res) {
        setWaning('Sucesso!');
        router.push('/listphones');
      } else {
        handleWaning('Usuário ou senha incorretos!');
      }
    }
  }

  const changeButton = (e: any) => {
    e.preventDefault();
    setIsLogin(!isLogin);
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
        <small className={`${warning === 'Sucesso!' ? 'text-green-700' : 'text-red-500'} relative bottom-10 h-5`}>{warning}</small>
        <div
          className="flex justify-between"
        >
          {isLogin ? (
            <ButtonSlate name="Registrar" handleClick={changeButton} />
          ) : (
            <ButtonSlate name="Voltar" handleClick={changeButton} />
          
          )}
          {isLogin ? (
            <ButtonGreen name="Entrar" handleClick={handleLogin}/>
          ) : (
            <ButtonGreen name="Criar" handleClick={handleLogin}/>
          )}
        </div>
      </form>
    </div>
  );
}
