'use client'
import Input from '@/components/Input'
import { SchemaCep, cepSchema } from '@/components/zod'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SchemaCep>({
    resolver: zodResolver(cepSchema),
  })

  async function onSubmit(data: SchemaCep) {
    console.log(data)
  }

  const handleCep = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${getValues('cep')}/json/`,
      )
      console.log(response.data)
      setValue('rua', response.data.logradouro)
      setValue('bairro', response.data.bairro)
      setValue('cidade', response.data.localidade)
      setValue('estado', response.data.uf)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="cep"
          label="CEP"
          register={register}
          error={errors.cep}
          schema="cep"
          type="text"
          onBlur={handleCep}
        />
        <Input
          id="rua"
          label="Rua"
          register={register}
          error={errors.rua}
          schema="rua"
          type="text"
        />
        <Input
          id="bairro"
          label="Bairro"
          register={register}
          error={errors.bairro}
          schema="bairro"
          type="text"
        />
        <Input
          id="cidade"
          label="Cidade"
          register={register}
          error={errors.cidade}
          schema="cidade"
          type="text"
        />
        <Input
          id="estado"
          label="Estado"
          register={register}
          error={errors.estado}
          schema="estado"
          type="text"
        />
        <Input
          id="numero"
          label="Número"
          register={register}
          error={errors.numero}
          schema="numero"
          type="text"
        />

        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Enviar
        </button>
      </form>
    </main>
  )
}
