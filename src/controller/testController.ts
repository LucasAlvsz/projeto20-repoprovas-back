import { Request, Response } from "express"

import { TestBody } from "@/interfaces/testInterface"
import testService from "@/services/testService"

const createNewTest = async (req: Request, res: Response) => {
	const testBody: TestBody = req.body
	//const test = await testService.createTest(testBody)
	res.status(201).send("aaa")
}

export { createNewTest }
