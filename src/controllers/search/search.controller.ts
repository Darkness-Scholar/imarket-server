import { Request, Response } from "express"
import { searchService } from "./search.service"

export default class SearchController {
    static search = async (req: Request, res: Response) => {

        console.log(`Search`)

        try {
            let { keyword, type, limit }:any = req.query
            let data = await searchService({ keyword, type, limit: 10 })
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({ message: "Error" })
        }
    }
}