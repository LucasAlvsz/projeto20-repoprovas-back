import bcrypt from "bcrypt"

const encryptWithSalt = (password: string) => {
	return bcrypt.hashSync(password, 10)
}

const decryptAndcompare = (password: string, comparedPassword: string) => {
	return bcrypt.compareSync(password, comparedPassword)
}

export { encryptWithSalt, decryptAndcompare }
