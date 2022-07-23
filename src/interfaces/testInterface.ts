import { Test } from "@prisma/client"

type TestData = Omit<Test, "id" | "createdAt">

type TestBody = Omit<TestData, "teacherDiscipline" | "categoryId"> & {
	category: string
	discipline: string
	teacher: string
}

type GroupBy = "disciplines" | "teachers"

export { TestData, TestBody, GroupBy }
