import prisma from "@/db"
import { TestData } from "@/interfaces/testInterface"

const create = async (testData: TestData) => {
	return prisma.test.create({ data: testData })
}

const getAllGroupedByTermAndDiscipline = async () => {
	return prisma.term.findMany({
		orderBy: { number: "asc" },
		select: {
			id: true,
			number: true,
			disciplines: {
				select: {
					id: true,
					name: true,
					teacherDisciplines: {
						select: {
							discipline: { select: { name: true } },
							teacher: { select: { name: true } },
							tests: {
								select: {
									id: true,
									name: true,
									pdfUrl: true,
									createdAt: true,
									category: {
										select: { id: true, name: true },
									},
								},
							},
						},
					},
				},
			},
		},
	})
}

export const getAllGroupedByTeachers = async () => {
	return prisma.teacherDiscipline.findMany({
		select: {
			id: true,
			teacher: { select: { name: true } },
			discipline: { select: { name: true } },
			tests: {
				select: {
					id: true,
					name: true,
					pdfUrl: true,
					category: { select: { id: true, name: true } },
				},
			},
		},
	})
}

export default {
	create,
	getAllGroupedByTermAndDiscipline,
	getAllGroupedByTeachers,
}
