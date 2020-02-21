import type {Color} from "./color"
import type { BooleanValue } from "./value"

export interface HardwareBindingSource<HardwareBindingType> {
	canBindTo(target: Object): boolean
	addBinding(target: HardwareBindable): HardwareBindingType
	clearBindings(): void
	setBinding(target: HardwareBindable): HardwareBindingType
}

export interface HardwareAction extends HardwareBindingSource<HardwareActionBinding> {
	setActionMatcher(actionMatcher: HardwareActionMatcher): void
	setPressureActionMatcher(actionMatcher: AbsoluteHardwareValueMatcher): void
	isSupported(): boolean
}

export enum RelativePosition {
	ABOVE,
	BELOW,
 	LEFT,
 	RIGHT,
 	INSIDE
}

export interface HardwareElement {
	getId(): string
	getLabel(): string
	setLabel (label: string): void
	getLabelColor(): Color
	setLabelColor (color: Color): void
	getLabelPosition(): RelativePosition
	setLabelPosition (position: RelativePosition): void
	setBounds (xInMM: number, yInMM: number, widthInMM: number, heightInMM: number): void
	getX(): number
	getY(): number
	getWidth(): number
	getHeight(): number
}

export interface HardwareControl {
	beginTouchAction(): HardwareAction
	endTouchAction(): HardwareAction
	isBeingTouched(): BooleanValue
	backgroundLight(): HardwareLight
	setBackgroundLight (HardwareLight light): void
}

export interface ContinuousHardwareControl<HardwareBindingType> extends HardwareBindingSource<HardwareBindingType>, HardwareControl {
}

export interface HardwareInputMatcher {}

export interface ContinuousHardwareValueMatcher extends HardwareInputMatcher {}

export interface HardwareActionMatcher extends ContinuousHardwareValueMatcher {}

export interface AbsoluteHardwareValueMatcher extends ContinuousHardwareValueMatcher {}

export interface HardwareBindable {}

export interface AbsoluteHardwareControl {}

export interface AbsoluteHardwareControlBinding extends HardwareBindingWithRange {}

export interface AbsoluteHardwareControlBindable extends HardwareBindable {
	addBinding(hardwareControl: AbsoluteHardwareControl): AbsoluteHardwareControlBinding
	addBindingWithRange(hardwareControl: AbsoluteHardwareControl, minNormalizedValue: number, maxNormalizedValue: number): AbsoluteHardwareControlBinding
}

export interface RelativeHardwareControlBindable extends HardwareBindable {
	addBinding(hardwareControl: RelativeHardwareControl): RelativeHardwareControlBinding
	addBindingWithSensitivity(hardwareControl: RelativeHardwareControl, minNormalizedValue: number, maxNormalizedValue: number): RelativeHardwareControlBinding
}

export interface HardwareBinding {
	removeBinding(): void
}

export interface HardwareBindingWithRange extends HardwareBinding {
	setMinNormalizedValue(min: number): void
	setMaxNormalizedValue(max: number): void
	setNormalizedRange(min: number, max: number): void
}

export interface HardwareActionBinding extends HardwareBinding {}

export interface HardwareActionBindable {
	addBinding(action: HardwareAction): HardwareActionBinding
	invoke(): void
}
