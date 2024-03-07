import {describe,expect,test} from "@jest/globals"
import {render, screen} from "@testing-library/react"
import Home from "@/app/page"

describe("<Home/>", () => {
    it("Testando se os produtos foram filtrados corretamente",() => {
        render(<Home/>)

        fetch("http://localhost:5000/products",{
            method:"GET",
            mode:"cors"
        })
        .then(content => {
            const produtos = screen.getAllByTestId("produto")
            const search:any =  screen.getByTestId("search")
            const category:any =  screen.getByTestId("category")
            const result:any = content.json()

            if(search.value == "" && category.value == ""){
                expect(produtos.length).toBe(result.length)
            }

            if(category.value != "" && search.value == ""){
                expect(produtos.length).toBe(result.filter(a => a.categoria == category.value).length)
            }
        
            if(search.value != ""  && category.value == ""){
                expect(produtos.length).toBe(result.filter(a => a.nome.toLowerCase().match(search.value.toLowerCase())).length)
            }
        
            if(search.value != ""  && category.value != ""){
                expect(produtos.length).toBe(result.filter(a => a.nome.toLowerCase().match(search.value.toLowerCase()) && a.categoria == category.value).length)
            }
        })
    })
})