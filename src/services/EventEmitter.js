class EventEmitter {
  events = {};

  emit = (eventName, ...args) => {
    const events = this.isExists(eventName) ? this.getEvent(eventName) : [];

    events.forEach(event => event(...args));

    return this;
  };

  on = (eventName, callback) => {
    if (!this.isExists(eventName)) {
      this.setEvent(eventName);
    }

    this.addEvent(eventName, callback);

    return this;
  };

  getEvent = name => this.events[name];

  setEvent = name => {
    this.events[name] = [];
  };

  addEvent = (name, callback) => this.events[name].push(callback);

  isExists = eventName => Array.isArray(this.events[eventName]);
}

export default EventEmitter;
