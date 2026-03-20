import http from "http"

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.end("Funcionando 🚀")
})

server.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT)
})