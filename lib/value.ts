import type {HardwareActionBindable} from "./hardware"

export type ObserverType = (value: any) => void
export type BooleanValueChangedCallback = (value: boolean) => void

/**
   The common interface that is shared by all value objects in the controller
   API.
*/
export interface Value {
	markInterested(): void
	addValueObserver(callback: ObserverType): void
}

export interface BooleanValue extends Value {
	addValueObserver(callback: BooleanValueChangedCallback): void
	get(): boolean
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
