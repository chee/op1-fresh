// TODO uncomment when these are written
// import type {NoteLatch} from "./note-latch"
// import type {NoteExpression} from "./note-epression"
// import type {Arpeggiator} from "./arpeggiator"
// import type {SettableBooleanValue} from "./settable-boolean-value"

/**
   Instances of this interface implement note input functionality used for
   recording notes in Bitwig Studio and for playing the instruments in tracks on
   hardware keyboards. In Bitwig Studio the note inputs are shown in the input
   choosers of Bitwig Studio tracks.
*/
export interface NoteInput {
	setShouldConsumeEvents (shouldConsumeEvents: boolean): void
	setKeyTranslationTable (table: Object[]): void
	setVelocityTranslationTable (table: Object[]): void
	// assignPolyphonicAftertouchToExpression (channel: number, expression: NoteExpression, pitchRange: number): void
	setUseExpressiveMidi (useExpressiveMidi: boolean, baseChannel: number, pitchBendRange: number): void
	setUseMultidimensionalPolyphonicExpression (useMPE: boolean, baseChannel: number): void
	sendRawMidiEvent (status: number, data0: number, data1: number): void
	//noteLatch (): NoteLatch
	//arpeggiator (): Arpeggiator
	//includeInAllInputs (): SettableBooleanValue
}
