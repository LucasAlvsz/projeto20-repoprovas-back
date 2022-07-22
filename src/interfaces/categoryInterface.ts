import { Category } from "@prisma/client"

type CategoryData = Omit<Category, "id" | "createdAt">

export { CategoryData }
