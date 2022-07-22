import { Teacher } from "@prisma/client"

type TeacherData = Omit<Teacher, "id" | "createdAt">

export { TeacherData }
