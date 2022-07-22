import { Router } from "express"

import validateSchema from "@/middlewares/validateSchemaMiddleware"
import testSchema from "@/schemas/testSchema"
import validateBearerToken from "@/middlewares/validateBearerTokenMiddleware"
import { createNewTest } from "@/controller/testController"

const testRouter = Router()

testRouter.use(validateBearerToken)
testRouter.get("/create", createNewTest)

export default testRouter
