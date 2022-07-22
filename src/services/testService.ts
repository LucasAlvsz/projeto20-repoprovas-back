import { notFoundError } from "@/errors"
import queryFactory from "@/factories/queryFactory"
import { TestBody } from "@/interfaces/testInterface"
import teacherDisciplineRepository from "@/repositories/teacherDisciplineRepository"
import testRepository from "@/repositories/testRepository"

const createTest = async (testBody: TestBody) => {
	const { categoryId, teacherDisciplineId } =
		await validateElegibilityToCreateTest(testBody)
	const test = await testRepository.create({
		...testBody,
		categoryId,
		teacherDisciplineId,
	})
	return { id: test.id, name: test.name, pdfUrl: test.pdfUrl }
}

const validateElegibilityToCreateTest = async (testBody: TestBody) => {
	const { category, discipline, teacher } = testBody
	const validCategory = await queryFactory.findByName(category, "category")
	if (!validCategory) throw notFoundError("category not found")

	const validDiscipline = await queryFactory.findByName(
		discipline,
		"discipline"
	)
	if (!validDiscipline) throw notFoundError("discipline not found")

	const validTeacher = await queryFactory.findByName(teacher, "teacher")
	if (!validTeacher) throw notFoundError("teacher not found")

	const validTeacherDiscipline =
		await teacherDisciplineRepository.findByTeacherAndDisciplineId(
			validTeacher.id,
			validDiscipline.id
		)
	if (!validTeacherDiscipline)
		throw notFoundError("This teacher does not teach this discipline")

	return {
		categoryId: validCategory.id,
		teacherDisciplineId: validTeacherDiscipline.id,
	}
}

export default {
	createTest,
}
