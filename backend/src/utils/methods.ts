const createEdgeNGrams = (str: string) =>
  /*   if (str && str.length > 2) {
    const minGram = 2;
    const maxGram = str.length;

    return str
      .split(' ')
      .reduce((ngrams: string[], token: string) => {
        if (token.length > minGram) {
          for (let i = minGram; i <= maxGram && i <= token.length; ++i) {
            ngrams = [...ngrams, token.substring(0, i)];
          }
        } else {
          ngrams = [...ngrams, token];
        }
        return ngrams;
      }, [])
      .join(' ');
  } */

  str;
export { createEdgeNGrams };
