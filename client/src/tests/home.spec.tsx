import {describe,expect,test} from "@jest/globals"
import {render, screen} from "@testing-library/react"
import Home from "@/app/page"

describe("<Home/>", () => {
    it("Testando se os produtos foram filtrados corretamente",() => {
        render(<Home/>)

        .then(content => {
            const produtos = screen.getAllByTestId("produto")
            const result:any = content.json()

            //testando se o número de produtos na tela é o mesmo da base de dados
            expect(produtos.length).toBe(30)

            //testando se o número de produtos na tela com o texto "pa" é o mesmo da base de dados
            expect(produtos.filter(item => item.text.toLowerCase().match('pa'))).toBe(3)
        })
    })
})
