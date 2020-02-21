import type {
	Subscribable
} from "./subscribable"

import type {
	BooleanValue
} from "./value"

export interface ObjectProxy extends Subscribable {
	/**
	 * Returns a value object that indicates if the object being proxied
	 * exists, or if it has content.
	 */

	exists(): BooleanValue
	/**
	 * Creates a BooleanValue that determines this proxy is considered equal to
	 * another proxy. For this to be the case both proxies need to be proxying
	 * the same target object.
	 */
	createEqualsValue(other: ObjectProxy): BooleanValue
}

export interface DeleteableObject {
	deleteObject(): void
}

export interface ObjectArrayValue<ObjectType> {
	get(): ObjectType[]
	get(index: number): ObjectType
	isEmpty(): boolean
}
