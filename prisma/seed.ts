import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const main = async () => {
	const terms = [
		{
			number: 1,
		},
		{
			number: 2,
		},
		{
			number: 3,
		},
		{
			number: 4,
		},
		{
			number: 5,
		},
		{
			number: 6,
		},
	]
	const categories = [
		{
			name: "Projeto",
		},
		{
			name: "Prática",
		},
		{
			name: "Recuperação",
		},
	]
	const teachers = [
		{
			name: "Diego Pinho",
		},
		{
			name: "Bruna Hamori",
		},
	]
	const diciplines = [
		{
			name: "HTML e CSS",
			termId: "1",
		},
		{
			name: "JavaScript",
			termId: "2",
		},
		{
			name: "React",
			termId: 3,
		},
		{
			name: "Humildade",
			termId: 4,
		},
		{
			name: "Planejamento",
			termId: 5,
		},
		{
			name: "Autoconfiança",
			termId: 6,
		},
	]
	const teachersDisciplines = [
		{
			teacherId: 1,
			diciplineId: 1,
		},
		{
			teacherId: 1,
			diciplineId: 2,
		},
		{
			teacherId: 1,
			diciplineId: 3,
		},
		{
			teacherId: 2,
			diciplineId: 4,
		},
		{
			teacherId: 2,
			diciplineId: 5,
		},
		{
			teacherId: 2,
			diciplineId: 6,
		},
	]
}

main()
	.catch(err => console.error(err))
	.finally(async () => prisma.$disconnect())
