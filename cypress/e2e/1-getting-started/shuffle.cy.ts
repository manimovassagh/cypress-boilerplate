it('shuffle', () => {
    let unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, { cats: true }]

    let shuffled = unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    console.log(shuffled)

});