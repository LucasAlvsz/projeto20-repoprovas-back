import { Router } from "express"

import validateSchema from "@/middlewares/validateSchemaMiddleware"
import signUpchema from "@/schemas/authSchemas/signUpSchema"
import signInSchema from "@/schemas/authSchemas/signInSchema"
import { signIn, signUp } from "@/controller/authController"

const authRouter = Router()

authRouter.post("/sign-up", validateSchema(signUpchema), signUp)
authRouter.post("/sign-in", validateSchema(signInSchema), signIn)

export default authRouter
