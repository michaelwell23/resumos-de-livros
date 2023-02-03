function mixin(receiver, supplier) {
  for (var property in supplier) {
    if (supplier.hasOwnProperty(property)) {
      receiver[property] = supplier[property];
    }
  }
  return receiver;
}

///=========================================

function EventTarget() {}
EventTarget.prototype = {
  constructor: EventTarget,
  addListener: function (type, listener) {
    // cria um array se ele não existir
    if (!this.hasOwnProperty('_listeners')) {
      this._listeners = [];
    }
    if (typeof this._listeners[type] == 'undefined') {
      this._listeners[type] = [];
    }
    this._listeners[type].push(listener);
  },
  fire: function (event) {
    if (!event.target) {
      event.target = this;
    }
    if (!event.type) {
      // falsy
      throw new Error("Event object missing 'type' property");
    }
    if (this._listeners && this._listeners[event.type] instanceof Array) {
      var listeners = this._listeners[event.type];
      for (var i = 0, len = listeners.length; i < len; i++) {
        listeners[i].call(this, event);
      }
    }
  },
  removeListener: function (type, listener) {
    if (this._listeners && this._listeners[type] instanceof Array) {
      var listeners = this._listeners[type];
      for (var i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        }
      }
    }
  },
};

///=================== CRIANDO NOVA INSTÂNCIA DE EventTarget ======================

var target = new EventTarget();
target.addListener('message', function (event) {
  console.log('Message is ' + event.data);
});
target.fire({
  type: 'message',
  data: 'Hello world!',
});

///================ CRIANDO INSTÂNCIAS DE EventTarget ==================

var person = new EventTarget();
person.name = 'Nicholas';
person.sayName = function () {
  console.log(this.name);
  this.fire({ type: 'namesaid', name: this.name });
};

///================ USANDO HERANÇA PSEUDOCLÁSSICA ==================
function Person(name) {
  this.name = name;
}

Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayName = function () {
  console.log(this.name);
  this.fire({ type: 'namesaid', name: this.name });
};

var person = new Person('Nicholas');

console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // true

function Person(name) {
  this.name = name;
}
mixin(Person.prototype, EventTarget.prototype);
mixin(Person.prototype, {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: this.name });
  },
});
var person = new Person('Nicholas');
console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // false
///=========================================

var person = mixin(new EventTarget(), {
  name: 'Nicholas',
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: this.name });
  },
});

///=========================================
var person = mixin(new EventTarget(), {
  get name() {
    return 'Nicholas';
  },
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: name });
  },
});
console.log(person.name); // "Nicholas"
person.name = 'Greg';
console.log(person.name); // "Greg"

///=========================================
function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(function (property) {
    var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
    Object.defineProperty(receiver, property, descriptor);
  });

  return receiver;
}
var person = mixin(new EventTarget(), {
  get name() {
    return 'Nicholas';
  },
  sayName: function () {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: name });
  },
});
console.log(person.name); // "Nicholas"
person.name = 'Greg';
console.log(person.name); // "Nicholas"

///=========================================
function mixin(receiver, supplier) {
  if (Object.getOwnPropertyDescriptor) {
    Object.keys(supplier).forEach(function (property) {
      var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
      Object.defineProperty(receiver, property, descriptor);
    });
  } else {
    for (var property in supplier) {
      if (supplier.hasOwnProperty(property)) {
        receiver[property] = supplier[property];
      }
    }
  }
  return receiver;
}

///=========================================
