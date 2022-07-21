import prisma from "@/db"
import app from "@/index"
import supertest from "supertest"

beforeEach(async () => {
	await prisma.$executeRaw`DELETE FROM users WHERE email = 'lucax@gmail.com'`
})

describe("SignUp", () => {
	it("Should return status code 201", async () => {
		const login = {
			name: "lucax",
			email: "lucax@gmail.com",
			password: "lucax",
		}
		const response = await supertest(app).post("/SignUp").send(login)
		expect(response.status).toEqual(201)
	})
})

afterAll(async () => {
	await prisma.$disconnect()
})
