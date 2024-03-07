import {describe,expect,test} from "@jest/globals"
import {render, screen} from "@testing-library/react"
import Home from "@/app/page"

describe("<Home/>", () => {
    test("Testando se os produtos estão vindo corretamente",() => {
        render(<Home/>)

        .then(content => {
            const produtos = screen.getAllByTestId("produto")

            //testando se o número de produtos na tela é o mesmo da base de dados
            expect(produtos.length).toBe(30)

            //testando se o número de produtos na tela com o texto "pa" é o mesmo da base de dados
            expect(produtos.filter(item => item.text.toLowerCase().match('pa')).length).toBe(3)
        })
    })
})
