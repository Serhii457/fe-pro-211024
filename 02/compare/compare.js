// 2 and '2'
// == 
console.log(`Compare result 2 and 3 ${2 == 3}`);
console.log(`Compare result 2 and 2 ${2 == 2}`);
console.log(`Compare result 2 and '2' ${2 == '2'}`);
console.log(`Compare result '2' and '3' ${'2' == '3'}`);
console.log(`Compare result true  and 1 ${true == 1}`);
console.log(`Compare result 'Tom' and 'Max' ${'Tom' == 'Max'}`);
console.log(`Compare result 'max' and 'Max' ${'max' == 'Max'}`);
console.log(`Compare result true  and 1 ${true == 1}`);
console.log(`Compare result true  and false ${true == false}`);
// ===
console.log('===');
console.log(`Compare result 2 and 3 ${2 === 3}`);
console.log(`Compare result 2 and 2 ${2 === 2}`);
console.log(`Compare result 2 and '2' ${2 === '2'}`);
console.log(`Compare result '2' and '3' ${'2' === '3'}`);
console.log(`Compare result true  and 1 ${true === 1}`);
console.log(`Compare result 'Tom' and 'Max' ${'Tom' === 'Max'}`);
console.log(`Compare result 'max' and 'Max' ${'max' === 'Max'}`);
console.log(`Compare result true  and 1 ${true === 1}`);
console.log(`Compare result true  and false ${true === false}`);
// != -> ==
console.log('!=');
console.log(`Not equal result 2 and 3 ${2 != 3}`);
console.log(`Not equal result 2 and 2 ${2 != 2}`);
console.log(`Not equal result 2 and '2' ${2 != '2'}`);
console.log(`Not equal result '2' and '3' ${'2' != '3'}`);
console.log(`Not equal result true  and 1 ${true != 1}`);
console.log(`Not equal result 'Tom' and 'Max' ${'Tom' != 'Max'}`);
console.log(`Not equal result 'max' and 'Max' ${'max' != 'Max'}`);
console.log(`Not equal result true  and 1 ${true != 1}`);
console.log(`Not equal result true  and false ${true != false}`);
console.log('!==');
console.log(`Not equal result 2 and 3 ${2 !== 3}`);
console.log(`Not equal result 2 and 2 ${2 !== 2}`);
console.log(`Not equal result 2 and '2' ${2 !== '2'}`);
console.log(`Not equal result '2' and '3' ${'2' !== '3'}`);
console.log(`Not equal result true  and 1 ${true !== 1}`);
console.log(`Not equal result 'Tom' and 'Max' ${'Tom' !== 'Max'}`);
console.log(`Not equal result 'max' and 'Max' ${'max' !== 'Max'}`);
console.log(`Not equal result true  and 1 ${true !== 1}`);
console.log(`Not equal result true  and false ${true !== false}`);
console.log('>,< >=, <=');
console.log(`2>3 ${2>3}`);
console.log(`20>3 ${20>3}`);
console.log(`2>=2 ${2>=2}`);
console.log(`2<3 ${2<3}`);
console.log(`20<3 ${20<3}`);
console.log(`2<=2 ${2<=2}`);
console.log(`2<3<4 ${2<3<4}`);
// && логічне І 
// true && false = false
// false && false = false
// false && true = false
// true && true = true
console.log(`Logic && ${2<3 && 'max' === 'max' && 4>3}`);
console.log(`Logic && ${2<3 && 'max' === 'max' && 4>30}`);
// ||  aбо Чи . Или Or 
// true || false = true
// flase || true = true
// true || true = true
// false || fasle = false
console.log(`Logic || ${2<3 || 'max' === 'max' || 4>3}`);
console.log(`Logic || ${2<3 || 'Max' === 'max' || 4>30}`);
