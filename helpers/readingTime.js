const WORD_PER_MINUTE = 200

export const readingTime = content => {
  const numOfWords = content.split(/\s/g).length
  return Math.ceil(numOfWords / WORD_PER_MINUTE)
}
