import { EventEmitter } from 'events';

const emitter = new EventEmitter();

class Events {
  static emit = (event, ...args) => {
    emitter.emit(event, ...args);
  };
  static off = (event, cb) => {
    emitter.off(event, cb);
  };
  static on = (event, cb) => {
    emitter.on(event, cb);
  };
  static once = (event, cb) => {
    emitter.once(event, cb);
  };
  static removeAllListeners = (event, cb) => {
    emitter.removeAllListeners(event, cb);
  };
  static removeListener = (event, cb) => {
    emitter.removeListener(event, cb);
  };
}

export default Events;
