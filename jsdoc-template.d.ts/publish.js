let helper = require("jsdoc/util/templateHelper")
let template = require("jsdoc/template")


function coerce (name) {
	name = name.replace(/^Array.<(.*)>$/, "$1[]")
	name = name.replace(/^java.lang./, "")
	name = name.replace(/^(.*)\.<(.*)>$/, "$1<$2>")
	switch (name) {
		case undefined:
			return "any"
		case "long":
		case "float":
		case "double":
		case "int":
			return "number"
		case "double[]":
			"number[]"
		case "byte":
			return "string"
		case "Boolean":
			return "boolean"
		case "byte[]":
			return "string[]"
		case "java.lang.Runnable":
			// wtf is this?
			return "() => any"
		case "java.util.function.BooleanSupplier":
			return "(...args: any[]) => boolean"
		case "java.util.function.Consumer.<Color>":
			return "(color: Color) => any"
		case "java.util.function.Consumer.<java.lang.Boolean>":
			return "(bool: boolean) => any"
		case "java.util.function.Consumer.<java.lang.String>":
			return "(string: string) => any"
		case "java.util.function.Consumer.<T>":
			return "(...args: any[]) => any"
		case "java.util.function.Function.<Color, InternalHardwareLightState>":
			return "(color: Color, state: InternalHardwareLightState) => any"
		case "java.util.function.Function.<java.lang.Boolean, HardwareLightVisualState>":
			return "(bool: boolean, state: HardwareLightVisualState) => any"
		case "java.util.function.IntConsumer":
			return "(int: number) => any"
		case "java.util.function.IntSupplier":
			return "(...args: any[]) => number"
		case "java.util.function.Supplier.<Color>":
			return "(...args: any[]) => Color"
		case "java.util.function.Supplier.<java.lang.String>":
			return "(...args: any[]) => String"
		case "java.util.function.Supplier.<T>":
			return "(...args: any[]) => any"
		case "T":
			return "any"
		case "java.nio.ByteBuffer":
			return "string[]"
		case "java.util.UUID":
			return "string"
		default:
			return name
	}
}

exports.publish = (data, opts, tutorials) => {
	data = helper.prune(data)
	// data.sort("longname, version, since")
	helper.addEventListeners(data)
	let interfaces = {}
	let vars = {}
	let enums = {}
	data().each(doclet => {
		if (doclet.scope == "global") {
			// A global function is usually an interface!
			if (doclet.kind == "function") {
				let face = interfaces[doclet.name] = (interfaces[doclet.name] || {})
				face.name = doclet.name
				face.description = doclet.description
			} else if (doclet.kind == "member") {
				// a global member can be a var declaration
				if (doclet.type) {
					vars[doclet.name] = doclet.type.names[0]
				}
				// or an enum :o
				else {
					enums[doclet.name] = Object.keys(eval("(" + doclet.meta.code.value + ")"))
				}
			}
		} else if (doclet.scope == "instance") {
			let face = interfaces[doclet.memberof] = (interfaces[doclet.memberof] || {})
			face.prototype = (face.prototype || {})
			let member = {
				name: doclet.name,
				description: doclet.description
			}
			if (doclet.returns) {
				member.returns = coerce(doclet.returns[0].type.names[0])
			} else {
				member.returns = "void"
			}
			if (doclet.params) {
				let params = []
				for (let docparam of doclet.params) {
					let param = {
						name: docparam.name,
						description: docparam.description
					}
					if (docparam.type) {
						param.type = coerce(docparam.type.names[0])
					} else {
						param.type = "any"
					}
					params.push(param)
				}
				member.params = params
			}
			face.prototype[doclet.name] = member
		} else if (doclet.scope == "static") {
			// this was an enum too
			enums[doclet.memberof] = enums[doclet.memberof] || []
			let {meta: {code: {name, value}}} = doclet
			enums[doclet.memberof][value] = name
		} else {
			// ignore. it was only Package
		}
	})

	for (let name in interfaces) {
		let face = interfaces[name]
		// process.stdout.write = Function.prototype

		face.description && process.stdout.write(`/** ${face.description} */\n`)
		process.stdout.write(`declare interface ${name} {\n`)
		for (let methodName in face.prototype) {
			let method = face.prototype[methodName]
			method.description && process.stdout.write(`\n	/** ${method.description} */\n`)
			process.stdout.write(`	`)
			process.stdout.write(methodName)
			process.stdout.write(`(`)
			for (let param of (method.params || [])) {
				let prefix = ""
				if (param.description) {
					prefix = `		`
					process.stdout.write(`\n\n${prefix}/** ${param.description}*/\n`)
				}
				process.stdout.write(prefix)
				process.stdout.write(param.name)
				process.stdout.write(": ")
				process.stdout.write(param.type)
				process.stdout.write(`, `)
			}
			process.stdout.write(`)`)
			process.stdout.write(`: ${method.returns}`)
			process.stdout.write(`\n`)
		}
		process.stdout.write(`}\n\n`)
	}

	for (let name in enums) {
		let values = enums[name]
		process.stdout.write(`declare enum ${name} {\n`)
		for (let value of values) {
			process.stdout.write(`	${value},\n`)
		}
		process.stdout.write(`}\n\n`)
	}

	process.stdout.write(`declare var host: ControllerHost\n`)
	// console.log(interfaces)
	// console.table(vars)
	// console.log({enums})
}
