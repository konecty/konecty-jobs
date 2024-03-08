import FiltrosGrid from "@/components/FiltrosGrid"
import Grid from "@/components/Grid"
import { api } from "@/data/api"
import { TenisResponse } from "@/interface/tenis"

async function buscaProdutos(marca: string, nome: string) {
	const response = await api('/tenis/pesquisa', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
      "marca": marca === 'Todos' ? '' : marca,
      "nome": nome
    }),
		cache: 'no-cache'
	})

	const data: TenisResponse = await response.json()

	return data
}

export default async function Home({
	searchParams,
}: {
   searchParams: { [key: string]: string}
 }) {
  const {
		marca = '',
		nome = '',
	} = searchParams
  const { tenis } = await buscaProdutos(marca, nome)

  return (
    <main className="max-w-[1000px] mx-auto p-10 space-y-10">
      <FiltrosGrid quantidadeTenis={tenis.length}/>

      <Grid tenis={tenis}/>
    </main>
  )
}
