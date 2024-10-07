
let c = 0

const f = () => {
    console.log(1);
    if (c == 3) return   // base 
    c++
    f();
}

f()