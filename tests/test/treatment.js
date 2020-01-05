class CustomError extends Error {

   // Constructor using *Destructuring*
   constructor ({ message, data }) {

      // Verifing super class Error
      super (message);
      this.data = data;
   }
}

// Trying code
try {

   // Create new object
   const myError = new CustomError ({
      message: 'Custom message on custom error',
      data: {
         type: 'Server error'
      }
   });

   // Force a error -> Object *CustomError*
   throw myError;

   // If error in code
} catch (err) {
   if (err.data.type === 'Server error') {

   } else {

   }
}

// Perform even dealing
finally {
   console.log ('Keep going...');
}