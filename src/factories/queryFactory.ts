import prisma from "@/db"

const findByName = async (name: string, model: string) => {
	return prisma[model].findUnique({
		where: {
			name,
		},
	})
}

export default {
	findByName,
}
