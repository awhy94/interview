// setTimeout(() => {
//   console.log(0);
// }, 0);
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
//   }, 0);
// }).then(res => {
//   console.log(res);
// });
// setTimeout(() => {
//   setTimeout(() => {
//     console.log(4);
//   })
// }, 0);

// console.log('global');

// setTimeout(function() {
//     console.log('setTimeout1');
//     new Promise(function(resolve) {
//         console.log('setTimeout1_promise');
//         resolve();
//     }).then(function() {
//         console.log('setTimeout1_promiseThen')
//     })
//     process.nextTick(function() {
//         console.log('setTimeout1_nextTick');
//     })
// },0)

// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promiseThen1')
// })

// setImmediate(function() {
//     console.log('setImmediate');
// })

// process.nextTick(function() {
//     console.log('nextTick');
// })

// new Promise(function(resolve) {
//     console.log('promise2');
//     resolve();
// }).then(function() {
//     console.log('promiseThen2')
// })

// setTimeout(function() {
//     console.log('setTimeout2');
// },0)
// global promise1 promise2 nextTick promiseThen1 promiseThen2 setImmediate setTimeout1 setTimeout1_promise setTimeout1_nextTick setTimeout1_promiseThen setTimeout2

// setTimeout(() => {
//     console.log('t1')
//     setTimeout(() => {
//         console.log('t2')
//         new Promise(resolve => {
//             console.log('p1');
//             resolve()
//         }).then(() => {
//             console.log('then1')
//         })
//     })
// })

// new Promise(resolve => {
//     console.log('p2');
//     setTimeout(() => {
//         console.log('t3')
//     })
//     resolve();
// }).then(() => {
//     console.log('then2')

//     setTimeout(() => {
//         console.log('t4')
//     })
// })
// promise


const list = [1, 2, 3];
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
}
function test() {
    list.forEach(async x => {
        const res = await square(x);
        console.log(res);
    });
}

// async function test() {
//     for(let i = 0; i < list.length; i++) {
//         const res = await square(list[i]);
//         console.log(res)
//     }
// }


test()