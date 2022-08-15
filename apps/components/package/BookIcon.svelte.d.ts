import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        name: 'frame' | 'component' | 'size' | 'canvas' | 'code' | 'chev' | 'search' | 'group' | 'warning' | 'info' | 'correct';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BookIconProps = typeof __propDef.props;
export declare type BookIconEvents = typeof __propDef.events;
export declare type BookIconSlots = typeof __propDef.slots;
export default class BookIcon extends SvelteComponentTyped<BookIconProps, BookIconEvents, BookIconSlots> {
}
export {};
