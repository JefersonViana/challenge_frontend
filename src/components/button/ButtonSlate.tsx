type Props = {
  name: string;
  handleClick: (e: any) => void;
  wid?: string;
}

export default function ButtonSlate({ name, handleClick, wid="w-auto" }: Props) {
  return (
    <button
      className={`${wid} bg-slate-900 text-white py-2 px-4 rounded-md w-auto`}
      onClick={(e) => handleClick(e)}
    >
      {name}
    </button>
  );
}