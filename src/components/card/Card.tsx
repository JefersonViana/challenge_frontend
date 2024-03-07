'use client';
import React, { JSX } from 'react';
import Image from 'next/image';
import iconDelete from '../../assets/icons8-lixeira-24.png';
import iconEdit from '../../assets/icons8-editar-48.png';
import { useRouter, usePathname } from 'next/navigation';

type Props = {
  phone: any;
  deleteCard: (id: number) => void;
}

export default function Card({ phone, deleteCard }: Props): JSX.Element {
  const { push } = useRouter();

  return (
    <div
      className="flex flex-col justify-between my-2 w-full rounded shadow-md"
      key={phone.id}
    >
      <div
        className="bg-slate-200 w-full h-12 rounded-t-md rounded-b-none flex items-center justify-center font-bold text-xl"
      >
        <span>{phone.name}</span>
      </div>
      <div
        className="flex p-1 w-full justify-around bg-slate-200 rounded-b-md rounded-t-none opacity-30"
      >
        <p className="flex flex-col items-center h-12 w-20">
          <span className="font-bold text-slate-900">Marca</span>
          <span className="overflow-hidden text-black max-w-20 whitespace-nowrap text-ellipsis">{phone.brand}</span>
        </p>
        <p className="flex flex-col items-center h-12 w-20">
          <span className="font-bold text-slate-900">Modelo</span>
          <span className="overflow-hidden text-black max-w-20 whitespace-nowrap text-ellipsis">{phone.model}</span>
        </p>
        <p className="flex flex-col items-center h-12 w-20">
          <span className="font-bold text-slate-900">Preço</span>
          <span className="overflow-hidden text-black max-w-20 whitespace-nowrap text-ellipsis">{`R$${phone.price}`}</span>
        </p>
        <p className="flex flex-col items-center h-12 w-20">
          <span className="font-bold text-slate-900">Cor</span>
          <span className="overflow-hidden text-black max-w-20 whitespace-nowrap text-ellipsis">{phone.color}</span>
        </p>
      </div>
      {
        !(usePathname().includes('edit')) && (
        <div
          className="relative left-72 bottom-22 w-12 flex justify-between pr-1"
        >
          <button
            className="absolute right-6"
            onClick={() => push(`/listphones/${phone.id}/edit`) }
            type='button'
          >
            <Image
              src={iconEdit}
              alt="edit"
              width={18}
              height={18}
            />
          </button>
          <button
            className="absolute right-0"
            onClick={() => deleteCard(phone.id)}
            type='button'
          >
            <Image
              src={iconDelete}
              alt="delete"
              width={18}
              height={18}
            />
          </button>
        </div>
      )}
    </div>
  )
}