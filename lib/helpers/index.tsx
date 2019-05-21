function scopeClassMaker(prefix: string) {
  return (name?: string) => [prefix, name].filter(Boolean).join('-');
}

export {scopeClassMaker};