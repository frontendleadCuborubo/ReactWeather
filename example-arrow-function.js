var names = ['Andreew', 'Julie', 'Jen'];
//
// names.forEach(function(name){
//   console.log('forEact', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow', name);
// });
//
// names.forEach((name) => console.log(name));

var person = {
  name: 'Vach',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' say hi to ' + name);
    });
  }
  //  greet: function(){
  //    names.forEach(function(name){
  //      console.log(this.name + ' say hi to ' + name);
  //    }.bind(this));
  //  }
}

person.greet();
