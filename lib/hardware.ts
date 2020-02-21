export interface HardwareBindingSource {
	canBindTo(target: Object): boolean
	addBinding(target: HardwareBindable): HardwareBinding
	clearBindings(): void
	setBinding(target: HardwareBindable): HardwareBinding
}

export interface HardwareAction extends HardwareBindingSource {
	setActionMatcher(actionMatcher: HardwareActionMatcher): void
	setPressureActionMatcher(actionMatcher: AbsoluteHardwareValueMatcher): void
	isSupported(): boolean
}

export interface HardwareInputMatcher {}

export interface ContinuousHardwareValueMatcher extends HardwareInputMatcher {}

export interface HardwareActionMatcher extends ContinuousHardwareValueMatcher {}

export interface AbsoluteHardwareValueMatcher extends ContinuousHardwareValueMatcher {}

export interface HardwareBindable {}

export interface HardwareBinding {
	removeBinding(): void
}

export interface HardwareActionBinding extends HardwareBinding {}

export interface HardwareActionBindable {
	addBinding(action: HardwareAction): HardwareActionBinding
	invoke(): void
}
