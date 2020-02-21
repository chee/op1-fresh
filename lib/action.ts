import type {
	HardwareActionBindable
} from "./hardware"

export interface ActionCategory {
	/** list all actions in this category */
	getActions(): Action[]
	getName(): string
	/** Returns a string the identifies this action category uniquely. */
	getId(): string
}

export interface Action extends HardwareActionBindable {
	/** Returns a string the identifies this action uniquely.*/
	getId(): string
	/** Returns the name of this action.*/
	getName(): string
	/** Returns the category of this action. */
	getCategory(): ActionCategory
	/** Returns the text that is displayed in menu items associated with this
	action. */
	getMenuItemText(): string
	invoke(): void
}
