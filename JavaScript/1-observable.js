'use strict';

const { Observable } = require('rxjs');

const randomChar = () => String
  .fromCharCode(Math.floor((Math.random() * 25) + 97));

const observable = new Observable(subscriber => {
  setInterval(() => {
    const char = randomChar();
    subscriber.next(char);
  }, 200);
});

observable.subscribe(observer);

let count = 0;

function observer(char) {
  process.stdout.write(char);
  count++;
  if (count > 50) {
    process.stdout.write('\n');
    process.exit(0);
  }
}

console.dir({ observer, observable });
