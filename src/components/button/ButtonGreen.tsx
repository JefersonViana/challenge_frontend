type Props = {
  name: string;
  handleClick: (e: any, action: string) => void;
}

export default function ButtonGreen({ name, handleClick }: Props) {
  return (
    <button
      className="bg-green-700 text-white py-2 px-4 rounded-md"
      onClick={(e) => handleClick(e, name === 'Entrar' ? 'login' : 'register')}
    >
      {name}
    </button>
  );
}