import {describe, test, expect} from 'vitest'

import { IPesquisaTenis } from "../interface/tenis"
import PesquisaTenis from "./pesquisa-tenis"

describe('Pesquisa Tenis Controller', () => {
  test('Deve ser possível filtrar um tênis pela marca', () => {
    const pesquisaTenis: IPesquisaTenis = {
      marca: 'Converse'
    }
    
    const tenis = PesquisaTenis(pesquisaTenis)

    expect(tenis).toHaveLength(2)
  })

  test('Deve ser possível filtrar um tênis pelo nome', () => {
    const pesquisaTenis: IPesquisaTenis = {
      nome: 'Run Star Hike Three Color Unisex'
    }
    
    const tenis = PesquisaTenis(pesquisaTenis)

    expect(tenis).toHaveLength(2)
  })
})