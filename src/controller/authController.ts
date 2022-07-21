import { Request, Response } from "express"

import { LoginData, UserData } from "@/interfaces/userInterface"
import authService from "@/services/authService"

const signUp = async (req: Request, res: Response) => {
	const userData: UserData = req.body
	await authService.createUser(userData)
	res.sendStatus(201)
}

const signIn = async (req: Request, res: Response) => {
	const loginData: LoginData = req.body
	const token = await authService.login(loginData)
	res.send(token)
}

export { signUp, signIn }
