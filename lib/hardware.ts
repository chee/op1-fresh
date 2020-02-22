import type {Color} from "./color"
import type {BooleanValue, SettableRangedValue} from "./value"

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

export interface HardwareOutputElement extends HardwareElement {
	/** no idea what a Runnable is */
	onUpdateHardware(sendStateRunnable: /*Runnable*/ () => void): void
}

export interface HardwareLight extends HardwareOutputElement {

}

export interface HardwareControl {
	beginTouchAction(): HardwareAction
	endTouchAction(): HardwareAction
	isBeingTouched(): BooleanValue
	backgroundLight(): HardwareLight
	setBackgroundLight (light: HardwareLight): void
}


export interface HardwareButton extends HardwareControl {
	pressedAction(): HardwareAction
	releasedAction(): HardwareAction
	isPressed(): BooleanValue
	setAftertouchControl (control: AbsoluteHardwareControl): void
	setRoundedCornerRadius (radiusInMM: number): void
}

export interface ContinuousHardwareControl<HardwareBindingType> extends HardwareBindingSource<HardwareBindingType>, HardwareControl {
	/**
	 * An optional button that can be associated with this control when this
	 * control can also act as a button (e.g by pressing down on it). */
	hardwareButton(): HardwareButton
	setHardwareButton (button: HardwareButton): void
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

export interface HardwareBindingWithSensitivity extends HardwareBinding {
	setSensitivity(sensitivity: number): void
}

export interface RelativeHardwareValueMatcher extends ContinuousHardwareValueMatcher {}

export interface RelativeHardwareControlBinding extends HardwareBindingWithSensitivity {}

export interface RelativeHardwareControlToRangedValueBinding extends RelativeHardwareControlBinding, HardwareBindingWithRange {}

export interface RelativeHardwareControl extends ContinuousHardwareControl<RelativeHardwareControlBinding> {
	setSensitivity (sensitivity: number): void
	setAdjustValueMatcher (matcher: RelativeHardwareValueMatcher): void
	addBindingWithSensitivity (target: RelativeHardwareControlBindable, sensitivity: number): RelativeHardwareControlBinding
	setBindingWithSensitivity (target: RelativeHardwareControlBindable, sensitivity: number): RelativeHardwareControlBinding
	addBindingWithRange (target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number): RelativeHardwareControlBinding
	setBindingWithRange (target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number): RelativeHardwareControlBinding
	addBindingWithRangeAndSensitivity (target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number, sensitivity: number): RelativeHardwareControlBinding
	setBindingWithRangeAndSensitivity (target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number, sensitivity: number): RelativeHardwareControlBinding
	getStepSize(): number
	setStepSize (stepSize: number): void
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
