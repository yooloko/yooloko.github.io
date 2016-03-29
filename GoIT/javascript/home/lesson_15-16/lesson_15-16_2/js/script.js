function Worker() {
  this.job = 'gardener';
  this.salary = 10;
  this.work = function () {
    alert('DO IT!');
  }
}

function Student() {
  this.learnplace = 'kindergarden';
  this.scholarship = 0;
  this.soap = function () {
    alert('Soap opera has already started!');
  }
}

function Human() {
  this.firstname = 'Maria';
  this.age = 3;
  this.gender = 'female';
  this.weight = 16;
}

Human.prototype = new Worker();
var newHuman = new Human();
console.log('newHuman.job:', newHuman.job);

Human.prototype = new Student();
newHuman = new Human();
console.log('newHuman.learnplace:', newHuman.learnplace);

var Frosh = new Student();
console.log('Frosh', Frosh);
Frosh.soap();

var Junior = new Worker();
console.log('Junior', Junior);
Junior.work();