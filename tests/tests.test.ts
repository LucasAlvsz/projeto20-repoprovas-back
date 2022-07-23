import prisma from "@/db"
import app from "@/app"
import supertest from "supertest"
import { createNewTest } from "./factories/testsFactory"
import { getToken } from "./factories/tokenFactory"
import { alreadyRegisteredCredentials } from "./factories/userFactory"

let token: string

beforeAll(async () => (token = await getToken(alreadyRegisteredCredentials())))

describe("Create Test", () => {
	it("Create test and return test data and status code 201", async () => {
		const testData = createNewTest()
		const response = await supertest(app)
			.post("/tests/create")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(201)
		expect(response.body.name).toEqual(testData.name)
		expect(response.body.pdfUrl).toEqual(testData.pdfUrl)
	})
	it("Create test with some field missing and return status code 422", async () => {
		const testData = createNewTest()
		delete testData.name
		const response = await supertest(app)
			.post("/tests/create")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(422)
	})
	it("Create test with invalid teacher and return status code 404", async () => {
		const testData = createNewTest()
		testData.teacher = "invalid"
		const response = await supertest(app)
			.post("/tests/create")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(404)
	})
	it("Create test with invalid category and return status code 404", async () => {
		const testData = createNewTest()
		testData.category = "invalid"
		const response = await supertest(app)
			.post("/tests/create")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(404)
	})
	it("Create test with invalid discipline and return status code 404", async () => {
		const testData = createNewTest()
		testData.discipline = "invalid"
		const response = await supertest(app)
			.post("/tests/create")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(404)
	})
})

afterAll(async () => {
	await prisma.$disconnect()
})
