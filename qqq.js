setTimeout(()=>{console.log('efsd'), 0})
const myPromise = Promise.resolve('resolved') 
async function myAsync()  
{   
   console.log('async started') 
const result = await myPromise   
console.log(result) 
console.log('async ended') 
} 
console.log('before async') 
myAsync() ;
console.log('after async');
