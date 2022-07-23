import { GroupBy, TestBody } from "@/interfaces/testInterface"
import queryFactory from "@/factories/queryFactory"
import testRepository from "@/repositories/testRepository"
import teacherDisciplineRepository from "@/repositories/teacherDisciplineRepository"
import { notFoundError } from "@/errors"

const createTest = async (testBody: TestBody) => {
	const { categoryId, teacherDisciplineId } =
		await validateElegibilityToCreateTest(testBody)
	const { name, pdfUrl } = testBody
	const { id } = await testRepository.create({
		name,
		pdfUrl,
		categoryId,
		teacherDisciplineId,
	})
	return { id, name, pdfUrl }
}

const validateElegibilityToCreateTest = async (testBody: TestBody) => {
	const { category, discipline, teacher } = testBody
	const validCategory = await queryFactory.findByName(category, "Category")
	if (!validCategory) throw notFoundError("category not found")

	const validDiscipline = await queryFactory.findByName(
		discipline,
		"Discipline"
	)
	if (!validDiscipline) throw notFoundError("discipline not found")

	const validTeacher = await queryFactory.findByName(teacher, "Teacher")
	if (!validTeacher) throw notFoundError("teacher not found")

	const validTeacherDiscipline =
		await teacherDisciplineRepository.findByTeacherAndDisciplineId(
			validTeacher.id,
			validDiscipline.id
		)
	if (!validTeacherDiscipline)
		throw notFoundError("This teacher does not teach this discipline")
	console.log
	return {
		categoryId: validCategory.id,
		teacherDisciplineId: validTeacherDiscipline.id,
	}
}

const getGroupedTests = async (groupBy: GroupBy) => {
	if (groupBy === "disciplines")
		return testRepository.getAllGroupedByTermAndDiscipline()
	if (groupBy === "teachers") return testRepository.getAllGroupedByTeachers()
	throw notFoundError(`${groupBy} not found`)
}

export default {
	createTest,
	getGroupedTests,
}
