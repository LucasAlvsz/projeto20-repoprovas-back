import { Router } from "express"
import "express-async-errors"

import authRouter from "./authRouter"

import handleError from "@/middlewares/handlerErrorMiddleware"

const router = Router()

router.use(authRouter)
router.use(handleError)

export default router
