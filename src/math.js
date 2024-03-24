// 모듈시스템
// 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
// Common JS (CJS) , ES Module(ESM)

// math 모듈
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}


export default function multiply(a, b) {
    return a * b;
}

// CJS
// module.exports = {
//     // add : add,
//     // sub : sub,
//     add,
//     sub,
// }

// export { add, sub };


// 라이브러리란?
// 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것