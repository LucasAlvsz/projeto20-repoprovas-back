import prisma from "@/db"

import { UserData } from "@/interfaces/userInterface"

const create = async (user: UserData) => prisma.user.create({ data: user })

const getByEmail = async (email: string) => {
	return prisma.user.findUnique({ where: { email } })
}

export default { create, getByEmail }
