'use client';
import React, { JSX } from 'react';
import Image from 'next/image';
import iconDelete from '../../assets/icons8-lixeira-24.png';
import iconEdit from '../../assets/icons8-editar-48.png';

export default function Card({ phone }: any): JSX.Element {
  
  const handleEdit = () => {
    console.log('editar')
  }

  const handleDelete = () => {
    console.log('deletar')
  }

  return (
    <div
      className="flex flex-col justify-between my-2 w-full rounded shadow-md"
      key={phone.id}
    >
      <div
        className="bg-slate-200 w-full h-12 rounded-t-md rounded-b-none flex items-center justify-center text-slate-900 font-bold text-xl"
      >
        <span>{phone.name}</span>
      </div>
      <div
        className="flex flex-col justify-between p-2 bg-slate-200 rounded-b-md rounded-t-none opacity-30"
      >
        <p className="text-slate-900">
          <span className="font-bold">Marca:</span> {phone.brand}
        </p>
        <p className="text-slate-900">
          <span className="font-bold">Modelo:</span> {phone.model}
        </p>
        <p className="text-slate-900">
          <span className="font-bold">Preço:</span> {`R$${phone.price},00`}
        </p>
        <p className="text-slate-900">
          <span className="font-bold">Cor:</span> {phone.color}
        </p>
      </div>
      <div
        className="relative left-72 bottom-7 w-12 flex justify-between pr-1"
      >
        <button
          className="absolute right-6"
          onClick={handleEdit}
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
          onClick={handleDelete}
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
    </div>
  )
}