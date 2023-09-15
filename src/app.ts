import express from "express"
import cors from "cors"
import router from "./routes/indexRoute"

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`Server is up and runnig on port ${port}`))