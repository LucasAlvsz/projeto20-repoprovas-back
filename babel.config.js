module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
		"@babel/preset-typescript",
	],
	plugins: [
		[
			"module-resolver",
			{
				alias: {
					"@": "./src",
					"@db": "./src/db",
					"@routes": "./src/routes",
					"@middlewares": "./src/middlewares",
					"@controllers": "./src/controllers",
					"@services": "./src/services",
					"@utils": "./src/utils",
				},
			},
		],
	],
	ignore: ["**/*.spec.ts"],
}
