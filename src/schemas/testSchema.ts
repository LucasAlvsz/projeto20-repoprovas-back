import Joi from "joi"

import { TestBody } from "@/interfaces/testInterface"

const bodySchema = Joi.object<TestBody>({
	name: Joi.string().required(),
	pdfUrl: Joi.string().uri().required(),
	category: Joi.string().required(),
	teacher: Joi.string().required(),
})
	.required()
	.options({ allowUnknown: false })

const testSchema = Joi.object({
	body: bodySchema,
})
	.required()
	.options({ allowUnknown: true })

export default testSchema
