Object.prototype.toString = function() {
  return this.name || 'empty';
};

let obj = {
  name: 'test',
  value: 123
};

let obj2 = {
  value: 123
}

alert(obj);
alert(obj2);