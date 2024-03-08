import { data } from "../../data";
import { IPesquisaTenis, ITenis } from "../interface/tenis";

export default function PesquisaTenis(pesquisa: IPesquisaTenis): ITenis[] {
  let { tenis } = data
 
  pesquisa.nome && (
    tenis = 
      tenis.filter(
        item => item.nome.toLowerCase().includes(pesquisa.nome?.toLowerCase() ?? '')
      )
  )

  pesquisa.marca && (
    tenis = 
      tenis.filter(
        item => item.marca.toLowerCase().includes(pesquisa.marca?.toLowerCase() ?? '')
      )
  )

  return tenis
}