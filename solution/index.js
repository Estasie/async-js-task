// solution/index.js
module.exports = (Homework) => {
    const {add, less} = Homework;

    const reduce = async (asyncArray, fn, initialValue) => {
        async function promisify(func, ...args) {
            return new Promise(resolve => {
                func(...args, resolve)
            })
        }

        let result = initialValue ? initialValue : 0;

        const arrLength = await promisify(asyncArray.length);


        for (let i = 0; await promisify(less, i, arrLength); i = await promisify(add,i,1)){
            let curr = await promisify(asyncArray.get, i);
            result = await promisify(fn, result, curr, i, asyncArray);
        }

        return result;
    }

    return (array, fn, initialValue, cb) => {
        reduce(array, fn, initialValue, cb).then(res => cb(res));
    }

}


