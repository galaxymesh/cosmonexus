import { EventEmitter } from "./EventEmitter";
import { EditorConfig, EditorEvents } from "./types";
import { EditorState } from '@cosmonexus/codemirror/state';
import { EditorView } from '@cosmonexus/codemirror/view';

export class Editor extends EventEmitter<EditorEvents> {
    private config: EditorConfig

    public view: EditorView | null = null

    public get state(): EditorState {
        return this.view.state
    }

    construct(config: EditorConfig, options: Partial<EditorOptions> = {}) {
        super()
        this.config = config
    }

}