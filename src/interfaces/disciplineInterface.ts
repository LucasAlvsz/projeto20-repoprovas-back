import { Discipline } from "@prisma/client"

type DiciplineData = Omit<Discipline, "id" | "createdAt">

export { DiciplineData }
