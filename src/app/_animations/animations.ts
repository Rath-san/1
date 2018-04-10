import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
    animation,
    group
} from '@angular/animations';

export const fadeIn = animation([
    style({
        opacity: 0
    }),
    animate('300ms ease-in-out', style({
        opacity: 1
    }))
]);

export const routerAnimation = transition('*=>*', [
    query(':enter, :leave',
        style({
            position: 'absolute',
            width: '100%',
            opacity: 0
        }),
        { optional: true }
    ),
    group([  // block executes in parallel
        query(':enter', [
            style({
                transform: 'translateX(100%)',
                opacity: 0
            }),
            animate('0.5s ease-in-out',
                style({
                    transform: 'translateX(0%)',
                    opacity: 1
                }))
        ], { optional: true }),
        query(':leave', [
            style({
                transform: 'translateX(0%)',
                opacity: 1
            }),
            animate('0.5s ease-in-out',
                style({
                    transform: 'translateX(-100%)',
                    opacity: 0
                }))
        ], { optional: true })
    ])
]);

export const list = trigger('list', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        style({
            transform: 'translateX(-100%)'
        }),
        animate(1000)
    ]),
    transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' }))
    ])
]);

export const item = trigger('item', [
    state('in', style({ opacity: 1, height: '*', margin: '*' })),
    transition('void => *', [
        style({
            opacity: 0,
            height: 0,
            margin: 0
        }),
        animate('200ms ease-in-out')
    ])
]);

export const itemOut = trigger('out', [
    state('void', style({ height: 0, opacity: 0, margin: 0 })),
    transition('* => void', [
        style({ height: '*', opacity: 0, margin: '*' }),
        animate('200ms ease-in-out')
    ])
]);
