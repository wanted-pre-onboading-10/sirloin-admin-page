const getIdx = str => {
  const idx = str.split('/');

  if (idx.length > 2) {
    return [Number(idx[0]), Number(idx[1]), Number(idx[2])];
  }
  return [Number(idx[0]), Number(idx[1])];
};

const test = () => '';

export { getIdx, test };
