import app from "@/app"
import { LoginData } from "@/interfaces/userInterface"
import supertest from "supertest"

const getToken = async (user: LoginData) => {
	const response = await supertest(app).post("/signIn").send(user)
	return response.body.token
}

export { getToken }
