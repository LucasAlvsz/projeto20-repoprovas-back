import { faker } from "@faker-js/faker"

const newUser = () => {
	return {
		name: faker.internet.userName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	}
}

const newUserWithoutfields = () => {
	return {
		name: faker.internet.userName(),
		email: faker.internet.email(),
	}
}

const alreadyRegisteredUser = () => {
	return {
		name: faker.internet.userName(),
		email: "lucax@gmail.com",
		password: faker.internet.password(),
	}
}

const alreadyRegisteredCredentials = () => {
	return {
		email: "lucax@gmail.com",
		password: "lucax",
	}
}

const wrongPassword = () => {
	return {
		email: "lucax@gmail.com",
		password: "lucax1",
	}
}

const wrongEmail = () => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	}
}

const credentialsWhithoutField = () => {
	return {
		email: "lucax@gmail.com",
	}
}

export {
	newUser,
	newUserWithoutfields,
	alreadyRegisteredUser,
	alreadyRegisteredCredentials,
	wrongPassword,
	wrongEmail,
	credentialsWhithoutField,
}
