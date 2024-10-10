function loadScript(src, callback) {
   let script = document.createElement('script');
   script.src = src;

   script.onload = () => callback();
   script.onerror = () => callback(new Error('error while loading script'));

   document.head.append(script);
}


let promise = new Promise(function(resolve, reject) {
    setTimeout(resolve('promise got resolve'), 3000);
})
