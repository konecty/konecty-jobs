import { TenisResponse } from "@/interface/tenis"

export default function Grid({tenis}: TenisResponse) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        tenis.map((tenis, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 cursor-pointer space-y-2 h-[250px] flex  flex-col justify-end">    
            <a href="https://imgbb.com/">
              <img 
                src={tenis.imagem} alt={tenis.nome} 
                className="mx-auto max-w-full h-max"
              />
            </a>
            <h1 className="font-medium">{tenis.marca}</h1>
            <h1 className="text-[#7C7A7A]">{tenis.nome}</h1>
            <h1 className="font-medium">R${tenis.preco}</h1>
          </div>
        ))
      }
    </div>
  )
}