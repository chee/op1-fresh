export declare class Color {
	static fromRGB(red: number, green: number, blue: number): Color
	static fromRGBA(red: number, green: number, blue: number, alpha: number):  Color
	static fromRGB255(red: number, green: number, blue: number): Color
	static fromRGBA255(red: number, green: number, blue: number, alpha: number): Color
	static fromHex(hex: string): Color
	static mix(c1: Color, c2: Color, blend: number): Color
	static nullColor(): Color
	static blackColor(): Color
	static whiteColor(): Color
	getRed(): number
	getGreen(): number
	getBlue(): number
	getAlpha(): number
	getRed255(): number
	getGreen255(): number
	getBlue255(): number
	getAlpha255(): number
}
