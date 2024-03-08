import express from 'express'
import PesquisaTenis from './controller/pesquisa-tenis'

export const app = express()

app.use(express.json())

app.post(
  '/tenis/pesquisa', 
  ( request: express.Request, response: express.Response) => {
  const tenis = PesquisaTenis(request.body)

  return response.status(200).send({
    tenis
  })
})