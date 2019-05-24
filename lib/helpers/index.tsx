function scopeClassMaker(prefix: string) {
  return (suffix: string, ...extra: Array<string | undefined>) =>
    [[prefix, suffix].filter(Boolean).join('-')]
      .concat(
        extra.filter(Boolean)   // 过滤undefined和''
          .map(String)          // 将数组转换为string[]
      )
      .join(' ')
      .trim();                  // 干掉首尾两端的' '
}

export {scopeClassMaker};