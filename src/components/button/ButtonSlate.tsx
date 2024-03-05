type Props = {
  name: string;
  handleClick: (e: any) => void;
}

export default function ButtonSlate({ name, handleClick }: Props) {
  return (
    <button
      className="bg-slate-900 text-white py-2 px-4 rounded-md"
      onClick={(e) => handleClick(e)}
    >
      {name}
    </button>
  );
}