fixTheInput_F = function(){
  var theArray =  Array.from(arguments)
  var f = theArray[0]
  theArray = theArray.slice(1, theArray.length)
   return function(){
     this.theArguments = theArray
     f.apply(this, this.theArguments)
   }
}