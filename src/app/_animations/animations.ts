import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';

export const list = trigger('list', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
    ]),
    transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
    ])
]);

export const item = trigger('item', [
    state('in', style({ transform: 'translateX(0)', height: '*' })),
    transition('void => *', [
        style({ transform: 'translateX(-300%)', height: 0 }),
        animate('200ms ease-in-out')
    ])
]);

export const itemOut = trigger('out', [
    state('void', style({ height: 0, opacity: 0 })),
    transition('* => void', [
        style({ height: '*', opacity: 0 }),
        animate('200ms ease-in-out')
    ])
]);
