// the following code has errors, find them and fix them and use node to check it is working

const morningGreetings = (name) => {
    console.log(`Good morning ${name}`); 
  }
  const eveningGreeting = function (firstName) {
    console.log(`Good evening ${firstName}`);
  }
   
  const todaysGreeting = () =>{
    morningGreetings('Lisa')
    console.log(`Thanks for all you have done during the day`);
    eveningGreeting('Lisa');
  }
   
  todaysGreeting();
   
   function myCounter(){
    let count = 0;
      return ++count;   
  }

  const noOfTimes = myCounter();
  console.log(noOfTimes); 
  