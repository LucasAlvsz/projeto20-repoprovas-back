import { conflictError, notFoundError, unauthorizedError } from "@/errors"
import { LoginData, UserData } from "@/interfaces/userInterface"
import userRepository from "@/repositories/userRepository"
import { decryptAndcompare, encryptWithSalt } from "@/utils/cryptographyUtils"
import { generateToken } from "@/utils/JWTUtils"

const createUser = async (userData: UserData) => {
	const user = await userRepository.getByEmail(userData.email)
	if (user) throw conflictError("Email already registered")
	userData = { ...userData, password: encryptWithSalt(userData.password) }
	await userRepository.create(userData)
}

const login = async (loginData: LoginData) => {
	const user = await userRepository.getByEmail(loginData.email)
	if (!user) throw notFoundError("Invalid email")
	if (!decryptAndcompare(loginData.password, user.password))
		throw unauthorizedError("Invalid password")

	const { id } = user
	return { token: generateToken({ id }) }
}

export default { createUser, login }
