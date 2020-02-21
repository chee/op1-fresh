import type {HardwareActionBindable, AbsoluteHardwareControlBindable} from "./hardware"

export type BooleanValueChangedCallback = (value: boolean) => void
export type StringValueChangedCallback = (value: string) => void

/**
   The common interface that is shared by all value objects in the controller
   API.
*/
export interface Value<ObserverType> {
	markInterested(): void
	addValueObserver(callback: ObserverType): void
	/**
	 * this is actually only for Integer, but i couldn't figure out how to
	 * model that in ts
	 */
	addValueObserver(callback: ObserverType, valueWhenUnassigned: number): void
}

export interface BooleanValue extends Value<BooleanValueChangedCallback> {
	get(): boolean
}

export interface StringValue extends Value<StringValueChangedCallback> {
	get(): string
	getLimited(maxLength: number): string
}

/**
   Instances of this interface represent boolean values.
*/
export interface SettableBooleanValue extends BooleanValue, HardwareActionBindable {
	/** Sets the internal value. */
	set(value: boolean): void
	/**
	   Toggles the current state. In case the current value is false, the new
	   value will be true and the other way round.
	*/
	toggle(): void
	toggleAction(): HardwareActionBindable
	setToTrueAction(): HardwareActionBindable
	setToFalseAction(): HardwareActionBindable
}

export interface EnumValue extends Value<EnumValue> {
	get(): string
}

export interface SettableEnumValue extends EnumValue {
	/** Sets the internal value. */
	set(value: string): void
}


export type IntegerValueChangedCallback = (value: number) => void

export interface IntegerValue extends Value<IntegerValueChangedCallback> {
	get(): number
	/** ???? */
	getAsInt(): number
}

export interface SettableIntegerValue extends IntegerValue {
	/** Sets the internal value. */
	set(value: number): void
}

export interface SettableStringValue extends StringValue {
	/** Sets the internal value. */
	set(value: string): void
}

export type StringArrayValueChangedCallback = (value: string[]) => void

export interface StringArrayValue extends Value<StringArrayValueChangedCallback> {
	get(): string[]
}

export interface SettableStringArrayValue extends StringArrayValue {
	/** Sets the internal value. */
	set(value: string[]): void
}

export type RangedValueChangedCallback = (value: string[]) => void

export interface RangedValue extends Value<RangedValueChangedCallback> {
	get(): string[]
}

export interface SettableRangedValue extends RangedValue, AbsoluteHardwareControlBindable {
	/** Sets the internal value. */
	set(value: string[]): void
}
