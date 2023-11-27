import express, { Application, Request, Response } from "express";
import cors from "cors"
import { Configuration, OpenAIApi } from "openai";

const PORT: number = 8000

const app: Application = express()

app.use(cors())
app.use(express.json())


const API_KEY: string = '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'

const configuration = new Configuration({
    apiKey: API_KEY
})

const openai = new OpenAIApi(configuration)