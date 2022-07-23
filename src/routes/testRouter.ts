import { Router } from "express"

import validateSchema from "@/middlewares/validateSchemaMiddleware"
import testSchema from "@/schemas/testSchema"
import validateBearerToken from "@/middlewares/validateBearerTokenMiddleware"
import {
	createNewTest,
	getGroupedTests,
	getTestsCategories,
} from "@/controller/testsController"

const testRouter = Router()

testRouter.use(validateBearerToken)
testRouter.post("/tests", validateSchema(testSchema), createNewTest)
testRouter.get("/categories", getTestsCategories)
testRouter.get("/tests", getGroupedTests)

export default testRouter
