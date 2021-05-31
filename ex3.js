// the following code has errors, find them and fix them and use node to check it is working

function concatenate(first, last) {
    var full;
    full = `${first} ${last}`;
   return full;
  }
  function getName(firstName, lastName) {
    var result;
    result = concatenate(firstName, lastName);
    console.log(result);
  }
  getName("Zara", "Williams");
  