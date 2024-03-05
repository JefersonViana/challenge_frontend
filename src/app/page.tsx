'use client';
import FormLogin from "@/components/FormLogin";
import FormRegister from "@/components/FormRegister";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
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
        className="bg-slate-200 p-8 rounded-lg shadow-lg w-80 flex flex-col gap-4"
      >
        <h1
          className="text-2xl font-bold text-center text-slate-900"
        >LexartLabs</h1>
        {isLogin ? (
          <FormLogin email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        ) : (
          <FormRegister email={email} password={password} userName={userName} setEmail={setEmail} setPassword={setPassword} setUserName={setUserName} />
        )}
        <small className="text-red-500">{error}</small>
        <div
          className="flex justify-between"
        >
          {isLogin ? (
            <button
            className="bg-slate-900 text-white py-2 px-4 rounded-md"
            onClick={handleLogin}
          >
            Registrar
          </button>
          ) : (
            <button
              className="bg-slate-900 text-white py-2 px-4 rounded-md"
              onClick={handleLogin}
            >
              Voltar
            </button>
          
          )}
          {isLogin ? (
            <button
              className="bg-green-700 text-white py-2 px-4 rounded-md"
              onClick={(e) => validateTextFieds(e, 'Email ou senha inválidos')}
            >
              Entrar
            </button>
          ) : (
            <button
              className="bg-green-700 text-white py-2 px-4 rounded-md"
              onClick={(e) => validateTextFieds(e, 'Campos inválidos')}
            >
              Criar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
