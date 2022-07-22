import categoryRepository from "@/repositories/categoryRepository"

const getAllNames = async () => {
	const categories = await categoryRepository.findAll()
	categories.forEach(category => {
		delete category.id
		delete category.createdAt
	})
	return categories
}

export default {
	getAllNames,
}
