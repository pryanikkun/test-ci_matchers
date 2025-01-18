import sortHeroes from "../sort_array.js"

const resultExpected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
]

test("check sort heroes", () => {
    const result = sortHeroes([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]);
    expect(result).toEqual(resultExpected)
})