export const hello = (message: string): void => {
    log(message);
};
  
function log(message: string) :void{
    document.body.innerHTML = (`${message}`);
  
    console.log(message);
}
  
export function helloWorld(){
    console.log("Hello World!");
}