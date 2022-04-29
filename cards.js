// let card_api = "http://deckofcardsapi.com/api/deck"
// let container = $(".card-container")

// async function cards() {
//     let response = await axios.get("http://numbersapi.com/12")
//     console.log(response.data)
// }

// cards()

// async function cardsMultiple() {
//     let responseMultiple = await Promise.all([
//         axios.get("http://numbersapi.com/0"),
//         axios.get("http://numbersapi.com/1"),
//         axios.get("http://numbersapi.com/2")

//     ])


//     console.log(` ${responseMultiple[0].data}`);
//     console.log(` ${responseMultiple[1].data}`);
//     console.log(` ${responseMultiple[2].data}`);
// }

// cardsMultiple();

// let card_api = "http://deckofcardsapi.com/api/deck"
// let deck_id = 'hku2mji7dpo8'
// let container = $(".card-container")

let container = $(".card-container")


$("#draw-button").on("click", async function (evt) {
    try {
        response = await axios.get("http://deckofcardsapi.com/api/deck/hku2mji7dpo8/draw/?count=1")

        let cardimage = response.data.cards[0].image
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;

        container.append(
            $("<img>", {
                id: 'cardz',
                src: cardimage,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,

                }

            })

        )
        console.log(`${response.data.remaining} cards left`)
    } catch {
        axios.get("http://deckofcardsapi.com/api/deck/hku2mji7dpo8/return")
        window.location.reload()
    }
});

// axios.get("http://deckofcardsapi.com/api/deck/hku2mji7dpo8/return")
//     .then(data => console.log(data.data.remaining))



// async function newDeck() {
//     response = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     console.log(response.data)
// }

// newDeck()