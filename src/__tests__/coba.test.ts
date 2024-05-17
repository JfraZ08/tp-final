import { describe, expect, test } from 'vitest';
import { teamScores } from '../modules/solution';

const potiere = 1 // score potière
const paysan = 2 // score paysan 
const exempleDeck = potiere + potiere + paysan // exemple decks
// const data = [
//     [['V','V','G',], ['V','V','V','V']],[['G','G','G',], ['V','V','G','O']],
//     [['G','G','O','J'], ['G','G','O']],[['V','V','C'],['V','V','G','G']],
//     [['G','G','R'],['V','V','G','J']]
// ]

describe('scores teams', () => {
    test('equal', () => {
        expect(teamScores('data 1')).toBe(4)
    })
})

describe('the scrible card',  () => {
    test(' 1 point if his is group is impair ', () => {
        expect(teamScores('data group 3')).toBe(+1)
    })
    test('2 point if his group is pair', () => {
        expect(teamScores('data group 3')).toBe(+2)
    })
})

describe('the thief yellow card', () => {
    test('-1 on his group', () => {
        expect(teamScores('the last group')).toBe(-1)
    })
})

describe('the Chaman', () => {
    // let CardsOppositeTeam = 3
    test('if the opposing team have 3 cards', () => {
        expect(teamScores('data')).toBe(+3)
    })
    test('if the opposing team have 4 cards', () => {
        expect(teamScores('data')).toBe(+4)
    })
})

describe('the queen cards',() => {
    describe('reset to 0 the classic cards', () => {
        test('before the powers', () => {
            expect(teamScores('score team 3')).toBe(exempleDeck+3)
        })
        test('after the powers', () => {
            expect(teamScores('score team 3')).toBe(0+0+3)
        })
    })    
})
