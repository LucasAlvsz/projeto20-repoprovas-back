import prisma from "@/db"

const findByTeacherAndDisciplineId = async (
	teacherId: number,
	disciplineId: number
) => {
	return prisma.teacherDiscipline.findFirst({
		where: {
			teacherId,
			disciplineId,
		},
	})
}

export default {
	findByTeacherAndDisciplineId,
}
