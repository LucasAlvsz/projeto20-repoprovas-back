import { LoginData } from "@/interfaces/userInterface"
import Joi from "joi"

const bodySchema = Joi.object<LoginData>({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
})
	.required()
	.options({ allowUnknown: false })

const signInSchema = Joi.object({
	body: bodySchema,
}).options({ allowUnknown: true })

export default signInSchema
