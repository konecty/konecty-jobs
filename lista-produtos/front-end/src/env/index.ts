import { z } from 'zod'

const envSchema = z.object({
	API_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if(!parsedEnv.success) {
	console.error(
		'Variáveis de ambiente inválidas', 
		parsedEnv.error
	)

	throw new Error('Variáveis de ambiente inválidas')
}

export const env = parsedEnv.data