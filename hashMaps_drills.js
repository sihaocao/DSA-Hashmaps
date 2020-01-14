const HashMap = require('./hashMaps')
const HashMapChain = require('./hashMapsChain')

function main() {
  const lor = new HashMapChain()
  lor.MAX_LOAD_RATIO = 0.5
  lor.SIZE_RATIO = 3
  console.log(lor)
  lor.set('Hobbit', 'Bilbo')
  lor.set('Hobbit', 'Frodo')
  lor.set('Wizard', 'Gandolf')
  lor.set('Human', 'Aragon')
  lor.set('Elf', 'Legolas')
  lor.set('Maiar', 'The Necromancer')
  lor.set('Maiar', 'Sauron')
  lor.set('RingBearer', 'Gollum')
  lor.set('LadyOfLight', 'Galadriel')
  lor.set('HalfElven', 'Arwen')
  lor.set('Ent', 'Treebeard')
  console.log(lor)
  console.log(lor.get('Maiar'), lor.get('Hobbit'))
  console.log(removeDuplicates('google all'))
  console.log(palindromeCheck('acecarr'))
  console.log(palindromeCheck('north'))
  console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
}

main()

function removeDuplicates(str) {
  const startArr = str.split('')
  const resultArr = []
  let current
  const hasObj = new HashMap()
  for (let i = 0; i < startArr.length; i++) {
    current = startArr[i]
    if (hasObj.get(current) === null) {
      resultArr.push(current)
      hasObj.set(current, true)
    }
  }
  return resultArr.join('')
}

function palindromeCheck(str) {
  const chars = str
    .toLowerCase()
    .replace(/[^a-z0–9]/g)
    .split('')
  const pairs = new HashMap()
  let letters = []
  let nonPairsNum = 0

  for (let i = 0; i < chars.length; i++) {
    const letter = chars[i]
    let letterValue = pairs.get(letter)
    if (letterValue !== null) {
      letterValue++
      pairs.set(letter, letterValue)
    } else {
      pairs.set(letter, 1)
      letters.push(letter)
    }
  }

  const isEven = chars.length % 2 === 0

  for (let letter of letters) {
    if (pairs.get(letter) % 2 !== 0) {
      nonPairsNum++
    }
  }

  if (!isEven && nonPairsNum === 1) {
    return true
  } else if (isEven && nonPairsNum === 0) {
    return true
  }
  return false
}

function anagram(arr) {
  const groups = new HashMap()
  let sortedStrs = str
    .split('')
    .sort()
    .join('')
  let groupValue = groups.get(sortedStr)
  if (groupValue !== null) {
    newValue = [...groupValue, str]
    groups.set(sortedStr, newValue)
  } else {
    groups.set(sortedStr, [str])
    sortedStrs.push(sorteStr)
  }

  for (let str of sortedStrs) {
    result.push(groups.get(str))
  }
  return result
}