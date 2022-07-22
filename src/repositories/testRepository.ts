import prisma from "@/db"
import { TestData } from "@/interfaces/testInterface"

const create = async (testData: TestData) => {
	return prisma.test.create({ data: testData })
}

export default { create }
