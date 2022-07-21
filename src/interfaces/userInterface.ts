import { User } from "@prisma/client"

type UserData = Omit<User, "id" | "createdAt">

type LoginData = Omit<UserData, "name">

export { UserData, LoginData }
