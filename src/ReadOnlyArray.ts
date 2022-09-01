// ?NORMAL TYPE
const numbers: number[] = [1,2,4,5,6];
numbers.push(2);


// ?WITH READONLY
const numbers2: ReadonlyArray<number> = [1,4,6,7];
// numbers2.push(2); !ERROR
numbers.map(element => element.toExponential());
