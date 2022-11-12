function a(){
    var b =10;
    function c(){
      return b;
    }
    return c
  }
  var get_funct  = a()
  
  console.log(get_funct())
