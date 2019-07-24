// function array_num(ary) {

//   num = ary.map(function (z) {
//     let count = 0;
//     for (let i = 0; i < z.length; i++) {
//       count += 1;
//     }
//     return count;
//   });
//   return num;
// }

function array_num(ary) {
  num = ary.map(z => { let count = z.length; return count; });
  return num;
}

let ary =
  [
    ['good', 'help', 'ignore', 'jump', 'knock'],
    ['atom', 'nice', 'so', 'any', 'raw', 'nothing', 'gone'],
    [43, 21, 25, 42, 57, 59],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'],
    ['good', 'help', 'ignore', 43, 21, 25, 'a', 'b', 'c', 'd', 'e',]
  ];

let ary_count = array_num(ary);
console.log(ary_count);