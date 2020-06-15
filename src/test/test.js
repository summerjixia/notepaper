//1.new promise(fn)构造函数
//2.创建值、状态，成功状态数组、失败状态数组
//3.执行fn(resolve,reject)
//4.resolve(arg)改变状态，若arg为普通值，value=值，遍历成功状态数组。若为promise，需等待该promise执行完毕，遍历
//5.resolve(arg)改变状态，若arg为普通值，value=值，遍历成功状态数组。若为promise，需等待该promise执行完毕，遍历
//6.then(callback)执行回调函数
//7.状态改变执行callback。callback作为下一个的值，若callback返回普通值，放入下一个resolve返回。
//8.若callback返回promise，等待该promise执行完毕
//8.状态未改变加入成功数组，失败数组

class MyPromise {
    constructor(fn) {
        if (typeof fn !== "function") {
            throw new Error("参数为函数")
        }
        this._status = "pending";
        this._value;
        this._fulfilledList = [];
        this._rejectedList = [];
        this.i = Math.random();

        try {
            fn(this._resolve.bind(this), this._rejectd.bind(this))
        } catch (e) {
            this._rejectd(e)
        }

    }

    _resolve(arg) {
        let onfulfilled = (val) => {
            let cb;
            while (cb = this._fulfilledList.shift()) {
                cb(val);
            }
        }
        this._status = "fulfilled";
        if (arg instanceof MyPromise) {

        } else {
            this._value = arg;
            onfulfilled(arg);
        }
    }

    _rejectd(arg) {
        let onrejected = (val) => {
            let cb;
            while (cb = this._rejectedList.shift()) {
                cb(val);
            }
        }
        this._status = "rejected";
        if (arg instanceof MyPromise) {

        } else {
            this._value = arg;
            onrejected(arg);
        }
    }

    then(fulfillFn, rejectFn) {
        return new MyPromise((resolve, reject) => {
            let fulfilled = (val) => {
                if (typeof fulfillFn !== "function") {
                    resolve(val);
                } else {
                    let res = fulfillFn(val);
                    setImmediate(() => {
                        if (res instanceof MyPromise) {
                            res.then(resolve, reject)
                        } else {
                            resolve(res);
                        }

                    }, 0);
                }

            }

            let rejected = (val) => {
                if (typeof rejectFn !== "function") {
                    reject(val);
                } else {
                    let res = rejectFn(val);
                    if (res instanceof MyPromise) {

                    } else {
                        reject(res);
                    }
                }
            }
            console.log(this)
            switch (this._status) {
                case "pending":
                    this._fulfilledList.push(fulfilled);
                    this._rejectedList.push(rejected);
                    break;
                case "fulfilled":
                    fulfilled(this._value)
                    break;
                case "rejected":
                    rejected(this._value);
            }
        })



    }

    catch(onrejected) {
        this.then(null, onrejected)
    }

    static resolve(val) {
        return val instanceof MyPromise || (val && typeof value.then === "function") ? val :
            new MyPromise((resolve, reject) => { resolve(val) })
    }

    static reject(val) {
        return new Promise((resolve, reject) => { reject(val) })
    }

    static all(list) {
        return new MyPromise((resolve, reject) => {
            let values = [], count = list.length;
            for (let i in list) {
                this.resolve(list[i]).then(arg => {
                    values.push(arg)
                    --count < 1 && resolve(values);
                }, reject)
            }
        })
    }

    static reace(list) {
        return new MyPromise((resolve, reject) => {
            for (let i of list) {
                this.resolve(i).then(arg => {
                    resolve(arg)
                }, reject)
            }
        })
    }

}



new MyPromise(resolve => {
    console.log(1);
    resolve(3);
    MyPromise.resolve().then(() => console.log(4)).then(() => console.log(5))
}).then(num => { console.log(num) }).then(() => { console.log(6) });
console.log(2)
