'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function FiltrosGrid({quantidadeTenis}: { quantidadeTenis : number }) {
  const [inputPesquisa, setInputPesquisa] = useState('')
  const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

  const marcas = ["Todos", "Nike", "Converse", "New Balance", "Adidas"]

	const nome = searchParams.get('nome') || ''
	const marca = searchParams.get('marca') || ''

  useEffect(() => {
    setInputPesquisa(nome)
  }, [nome])

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			
			if (value !== '') {
				params.set(name, value)
			} else {
				params.delete(name)
			}
         
			return params.toString()
		},
		[searchParams]
	)

  return (
    <div className="max-w-lg space-y-8">   
          <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Pesquisar</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input 
                type="search" 
                id="default-search" 
                className="block w-full p-4 ps-10 text-sm text-gray-600 border rounded-lg bg-white focus:ring-gray-50 focus:border-gray-50" 
                placeholder="Buscar produto"
                value={inputPesquisa}
                onChange={(e) => {
                  setInputPesquisa(e.target.value)
                }} 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    router.push(pathname + '?' + createQueryString('nome', `${inputPesquisa}`))
                  }
                }} 
              />
              <button 
                type="submit" 
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                onClick={() => {
                  router.push(pathname + '?' + createQueryString('nome', `${inputPesquisa}`))
                }} 
              >
                  Buscar
              </button>
          </div>
        <h1 className="text-5xl font-extrabold">
          Tênis
        </h1>
        <h2 className="text-xl ml-1">
          {quantidadeTenis} produtos encontrados
        </h2>

        <div className="flex space-x-4">
        {
  marcas.map(nome => (
    <button 
      key={nome} 
      className={`${
        marca === nome ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-white hover:bg-gray-50'
      } rounded-2xl p-3 cursor-pointer `}
      onClick={() => {
        const novaMarca = marca === nome ? '' : nome
        router.push(pathname + '?' + createQueryString('marca', `${novaMarca}`))
      }}
    >
      <h1>{nome}</h1>
    </button>
  ))
}

        </div>

      </div> 
  )

}