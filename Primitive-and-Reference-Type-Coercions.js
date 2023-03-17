// Number('0x77') === 0x77 //true
// Number('077') === 077 // false
// Number(' 12') //12
// isNaN(' ') //false
// 0 === +0 //true
// +0 === -0 //true
// 1 / '2' //false
// 1 / 0 //infinity
// 0 / 0 //NaN
// +true //1
// +false //0 
// +null //0
// +undefined //NaN

// console.log(+null)

// . null + undefined // NaN
// . null - undefined // NaN
// . null * undefined // NaN
// . null / undefined // NaN
// . null % undefined // NaN
// . null == undefined // true
// . null === undefined // false
// . null < undefined //  false
// . null > undefined // false
// . null <= undefined // false
// . null >= undefined // false
// . null + true // 1
// . null - true // -1
// . null * true // 0
// . null / true // 0
// . null % true // 0
// . null == true // false
// . null === true // false
// . null < true // true
// . null > true // false
// . null <= true // true
// . null >= true // false
// . null + false // 0
// . null - false // 0
// . null * false // 0
// . null / false // NaN
// . null % false // infinity ?,, NaN
// . null == false // true ?,,false
// . null === false // false
// . null < false // false
// . null > false // false
// . null <= false // true
// . null >= false // true
// . undefined + true // NaN
// . undefined + false // NaN
// . undefined + 5 // NaN
// . true + false // 1
// . true + 2 // 3
// . false + 4 // 4
// . false + NaN // NaN
// . 5 + 3 // 8
// . 5 + NaN // NaN
// . 'hello' + NaN // NaN
// . 'hello' + a + b + c + d + e + f // NaN


// function foo(arg1, arg2){
//     return arg1 = arg2
// }
// console.log(foo(null, false))

// const obj = {
//     _name: [], //[name, length] []
//     set name (name){
//         let name = ''
//         let names =[]
//         for(let i = 0; i< obj.name.length; i++){
//             let letter =obj.name[i]
//             if(letter === ' '){
//                 continue
//             }else if(letter !== ","){
//                 letter+=name
//             }
//             if(obj.name[i+1] === ","){
//                 names.push(name)
//             }
//         }
//     }
//     get name,
// }
// console.log(obj.name) // []
//     obj.name = 'Artak, Artavazd, Samvel';
//     console.log(obj.name) // [["Artak", 5], ["Artavazd",8],["samvel", 6]]
