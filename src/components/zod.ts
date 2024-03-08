import z from 'zod'

export const cepSchema = z.object({
  cep: z.string().min(8, 'Precisa ter 8').max(9),
  rua: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  numero: z.string(),
})

export type SchemaCep = z.infer<typeof cepSchema>
