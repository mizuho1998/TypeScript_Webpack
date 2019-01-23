import {hello, helloWorld} from './sub';

const message: string = 'Hello!';

console.log("main.ts");

// sub.jsに定義されたJavaScriptを実行する。
hello(message);
helloWorld();