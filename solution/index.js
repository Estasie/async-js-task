// solution/index.js
module.exports = (Homework) => {
    const {add, less} = Homework;

    const reduce = async (asyncArray, fn, initialValue) => {
        async function promisify(func, ...args) {
            return new Promise(resolve => {
                func(...args, resolve)
            })
        }

        let i = 0;
        let result = initialValue ? initialValue : 0;

        const arrLength = await promisify(asyncArray.length);
        let isLess = await promisify(less, i, arrLength);

        while (isLess) {
            let curr = await promisify(asyncArray.get, i);
            i = await promisify(add, i, 1);
            isLess = await promisify(less, i, arrLength);
            result = await promisify(fn, result, curr, i, asyncArray);
        }
        return result;
    }

    return (array, fn, initialValue, cb) => {
        reduce(array, fn, initialValue, cb).then(res => cb(res));
    }

}


