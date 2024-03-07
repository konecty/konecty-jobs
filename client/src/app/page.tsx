"use client"

import {Product} from "@/components/product"
import { useState, useEffect } from "react"
import axios from 'axios'

type products = {
  categoria: String,
  nome: String,
  preco: Number,
  imagem: String
}

export default function Home() {
  // UseStates
  const [data, setData] = useState<products[]>([])
  const [fullData, setFullData] = useState<products[]>([])

  // Alimentando lista de produtos
  useEffect(() => {
      axios.get("http://localhost:5000/products")
        .then((response) => {
            setData(response.data)
            setFullData(response.data)
        })
  },[])

  //Fazendo o filtro dos produtos conforme a escolha do usuário
  function filtraProduto(){
    let category:any = document.getElementById("category")
    let search:any = document.getElementById("search")

    if(category.value == "" && search.value == ""){
      setData(fullData)
    }

    if(category.value != "" && search.value == ""){
      setData(fullData.filter(a => a.categoria == category.value))
    }

    if(search.value != ""  && category.value == ""){
      setData(fullData.filter(a => a.nome.match(search.value)))
    }

    if(search.value != ""  && category.value != ""){
      setData(fullData.filter(a => a.nome.toLowerCase().match(search.value.toLowerCase()) && a.categoria == category.value))
    }
  }

  return (
      <div>
        <div className="w-auto h-20 bg-blue-500">
          <p className="text-4xl w-auto text-center text-black">Mercado dias</p>
          <div className="flex flex-row w-auto">
            <p className="mx-4">Categoria</p>
            <select id="category" data-testid="category">
              <option></option>
              <option>Grãos</option>
              <option>Laticínios</option>
              <option>Proteínas</option>
              <option>Café da manhã</option>
              <option>Óleos</option>
              <option>Frutas</option>
              <option>Legumes e verduras</option>
              <option>Bebidas</option>
              <option>Higiene</option>
              <option>Iluminação</option>
            </select>

            <p className="ml-10 mr-4">Pesquisar</p>
            <input type="text" id="search" data-testid="search" className="mr-10 w-80"/>

            <input
              type="button"
              value="Buscar"
              className="w-60 border bg-white cursor-pointer"
              onClick={filtraProduto}
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          {
            data.map((item) => {
              return(
                <Product
                  data-testid="produto"
                  nome={item.nome}
                  imagem={item.imagem}
                />
              )
            })
          }
        </div>
      </div>
  );
}
