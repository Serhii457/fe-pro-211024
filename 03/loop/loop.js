// console.log(1);
// console.log(2);
// console.log(3);
// console.log('...');
// console.log(30);
let couter = 1;
do{
    console.log(`Count number ${couter}`);
    couter++;//1
}while(couter<10);
let whileCounter = 0;
while (whileCounter<5) {
    console.log(`While count ${whileCounter}`);
    whileCounter++;
}
// iterator
for(let i = 20; i>10; i--){
    // if( i === 12){
    //     break;
    // }
    if(i%2 === 0){
        continue;
    }
    console.log(`For loop value ${i}`);
}