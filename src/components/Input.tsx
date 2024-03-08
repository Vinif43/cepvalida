import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { SchemaCep } from './zod'

interface InputProps {
  id: string
  schema: keyof SchemaCep
  label: string
  type: string
  register: UseFormRegister<SchemaCep>
  error: FieldError | undefined
  onBlur?: () => void
}

export default function Input({
  id,
  schema,
  label,
  type,
  register,
  error,
  onBlur,
}: InputProps) {
  return (
    <div className="flex flex-col mb-4 text-red-600">
      <label className="text-red-600 font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="border border-gray-300 rounded-md p-2"
        {...register(schema)}
        onBlur={onBlur}
      />
      {error && <span>{error.message}</span>}
    </div>
  )
}
