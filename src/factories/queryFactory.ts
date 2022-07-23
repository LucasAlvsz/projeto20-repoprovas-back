import prisma from "@/db"
import { Prisma } from "@prisma/client"

const findByName = async (name: string, model: Prisma.ModelName) => {
	return prisma[model].findUnique({
		where: {
			name,
		},
	})
}

const findAll = async (model: Prisma.ModelName) => {
	return prisma[model].findMany({})
}

export default {
	findByName,
	findAll,
}
