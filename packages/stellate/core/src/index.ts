export * from './Editor';
export * from './EventEmitter';
export * from './types';

export interface ExtensionConfig<Options = string> {
    name: string
    defaultOption?: Options
}