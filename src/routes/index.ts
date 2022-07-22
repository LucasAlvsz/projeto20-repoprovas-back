import { Router } from "express"
import "express-async-errors"

import authRouter from "./authRouter"

import handleError from "@/middlewares/handlerErrorMiddleware"
import testRouter from "./testRouter"

const router = Router()

router.use(authRouter)
router.use("/tests", testRouter)
router.use(handleError)

export default router
