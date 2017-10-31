// var name = "The Window"
//
// var object = {
//   name: "my object",
//   getNameFunc: function(){
//     return function(){
//       return this.name
//     };
//   }
// };
//
// console.log(object.getNameFunc()());


var name = "The Window"

var object = {
  name: "my object",
  getNameFunc: function(){
    var that = this;
    return function(){
      return that.name
    };
  }
};

console.log(object.getNameFunc()());
