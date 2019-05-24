function scopeClassMaker(prefix: string) {
  return (suffix: string, extra?: string | string[]) =>
    [[prefix, suffix].filter(Boolean).join('-')]
      .concat(extra instanceof Array ? extra : [extra || ''])
      .filter(Boolean)
      .join(' ');
}

export {scopeClassMaker};