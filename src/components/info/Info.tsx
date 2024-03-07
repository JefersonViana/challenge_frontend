'use client';

type Props = {
  text: string;
};

export default function Info({ text }: Props) {
  return (
    <div
      className="w-full h-screen flex items-center justify-center absolue top-0 left-0"
    >
      <h1
        className="text-white font-bold"
      >{text}</h1>
    </div>
  );
}