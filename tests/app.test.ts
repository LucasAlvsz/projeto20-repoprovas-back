import app from "../src/app"
import prisma from "../src/db"
import supertest from "supertest"
import {
	alreadyRegisteredCredentials,
	alreadyRegisteredUser,
	credentialsWhithoutField,
	newUser,
	newUserWithoutfields,
	wrongEmail,
	wrongPassword,
} from "./factories/userFactory"

describe("SignUp", () => {
	it("Create user and return status code 201", async () => {
		const response = await supertest(app).post("/signUp").send(newUser())
		expect(response.status).toEqual(201)
	})
	it("Try to create user with some field missing and return 422", async () => {
		const response = await supertest(app)
			.post("/signUp")
			.send(newUserWithoutfields())
		expect(response.status).toEqual(422)
	})
	it("Try create user with already existing email and return 409", async () => {
		const response = await supertest(app)
			.post("/signUp")
			.send(alreadyRegisteredUser())
		expect(response.status).toEqual(409)
	})
})

describe("SignIn", () => {
	it("Sign in with valid credentials and return status code 200", async () => {
		const response = await supertest(app)
			.post("/signIn")
			.send(alreadyRegisteredCredentials())
		expect(response.status).toEqual(200)
	})
	it("Sign in with wrong password and return status code 401", async () => {
		const response = await supertest(app)
			.post("/signIn")
			.send(wrongPassword())
		expect(response.status).toEqual(401)
	})
	it("Sign in with wrong email and return status code 404", async () => {
		const response = await supertest(app).post("/signIn").send(wrongEmail())
		expect(response.status).toEqual(404)
	})
	it("Sign in with credentials without fields and return status code 422", async () => {
		const response = await supertest(app)
			.post("/signIn")
			.send(credentialsWhithoutField())
		expect(response.status).toEqual(422)
	})
})
afterAll(async () => {
	await prisma.$disconnect()
})
