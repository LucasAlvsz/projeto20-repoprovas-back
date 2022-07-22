import { Term } from "@prisma/client"

type TermData = Omit<Term, "id" | "createdAt">
