import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(500),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(-10px)' }),
    animate(
      '0.5s ease-in',
      keyframes([
        style({ offset: 0.2, opacity: 1, transform: 'translateX(20px)' }),
        style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' }),
      ])
    ),
  ]),
]);

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(500)]),
]);
