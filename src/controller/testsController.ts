import { Request, Response } from "express"

import { GroupBy, TestBody } from "@/interfaces/testInterface"
import testService from "@/services/testService"
import queryFactory from "@/factories/queryFactory"

const createNewTest = async (req: Request, res: Response) => {
	const testBody: TestBody = req.body
	const test = await testService.createTest(testBody)
	res.status(201).send(test)
}

const getTestsCategories = async (req: Request, res: Response) => {
	const categories = await queryFactory.findAll("Category")
	res.send({ categories })
}

const getGroupedTests = async (req: Request, res: Response) => {
	const groupBy = req.query.groupBy as GroupBy
	const tests = await testService.getGroupedTests(groupBy)
	res.send({ tests })
}

export { createNewTest, getTestsCategories, getGroupedTests }
