type Props = {
  name: string;
  handleClick: (e: any, text: string) => void;
  text: string;
}

export default function ButtonGreen({ name, handleClick, text }: Props) {
  return (
    <button
      className="bg-green-700 text-white py-2 px-4 rounded-md"
      onClick={(e) => handleClick(e, text)}
    >
      {name}
    </button>
  );
}