import { EditorViewConfig } from '@cosmonexus/codemirror/view';
import { EditorStateConfig } from '@cosmonexus/codemirror/state';

export type CommonEditorProps = {
    // state: EditorState
    // view: EditorView
}

export type EditorEvents = {}

export type EditorConfig = {
    stateConfig?: EditorStateConfig
    viewConfig?: EditorViewConfig
}

export type ParentElement = HTMLElement | Document

export type EditorOptions = {
    parent?: ParentElement
}