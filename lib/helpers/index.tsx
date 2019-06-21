function scopeClassMaker(prefix: string) {
  return (suffix: string, ...extra: Array<string | undefined | false>) =>
    [[prefix, suffix].filter(Boolean).join('-')]
      .concat(
        extra.filter(Boolean)   // 过滤undefined和''
          .map(String)          // 将数组转换为string[]
      )
      .join(' ')
      .trim();                  // 干掉首尾两端的' '
}

/*
* [1,[2],[[3]]] => [1,2,[3]]
* */
function flatten(array: Array<any>) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    array[i] instanceof Array ?
      result.push(...array[i]) :
      result.push(array[i]);
  }
  return result;
}

/*
* [1.1, 1.2, 2.1] => { 1: [1.1, 1.2], 2: [2.1]}
* [[1, 11], [1, 111], [2, 22]] => { 1: [11, 111], 2: [22] }
* */
function groupBy(array: Array<any>, iteratee: (element: any) => string | number) {
  const hash: { [key: string]: any } = {};
  array.map(item => {
    const key = iteratee ? iteratee(item) : item, value = item instanceof Array ? item[1] : item;
    if (!!hash[key]) {
      hash[key].push(value);
    } else {
      hash[key] = [value];
    }
  });
  return hash;
}

export {scopeClassMaker, flatten, groupBy};