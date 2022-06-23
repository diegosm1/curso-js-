

const promDolphins = (97 + 112 + 101) / 3;

const promKoalas = (109 + 95 + 106) / 3;

console.log(promDolphins, promKoalas);


// if (promDolphins >= 100 && promKoalas >= 100) {
//     if (promDolphins > promKoalas) {
//         console.log('the winner is Dolphins');
//     } else if (promKoalas > promDolphins) {
//         console.log('the winner is Koalas')
//     }else {
//         console.log('There is a draw')
//     }
    
// }

if (promDolphins >= 100 && promKoalas >= 100 && promDolphins === promKoalas ) {

    console.log('draw');
    
}else {
    console.log('nobody win')
}