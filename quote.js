// Collection Of Quote
const quotes = [{
    quote: `If you’re gonna dream, be foolish. If you don’t get hurt, then it’s not real.`,
    author: `Keyakizaka46 - Garasu wo Ware`
}, {
    quote: `If they said they like me, I won't deny it. If they said they hate me, I don't mind it. If someone got offended, well, it can't be helped.`,
    author: `Keyakizaka46  - Ambivalent`
}, {
    quote: `Now's the time to write, a suicide note for the future. After all, you never know when a person will die.`,
    author: `Keyakizaka46 - AM1:27`
}, {
    quote: `Hard work betrays none, but dreams betray many.`,
    author: `Hikigaya Hachiman`
}, {
    quote: `Fake people have an image to maintain, real people just don't care.`,
    author: `Hikigaya Hachiman`
}, {
    quote: `I find it’s actually easier to be misunderstood. People’s stares stop bothering you, you’re severed from love. Turns out you find freedom when you stick out`,
    author: `Keyakizaka46  - Eccentric`
}, {
    quote: `A joke only lasts for a moment. If it leaves a misunderstanding, it becomes a lie.`,
    author: `Fukube Satoshi`
}, {
    quote: `I won't ever be the best at anything. Or rather, you might say that I've stopped trying to be.`,
    author: `Fukube Satoshi`
}, {
    quote: `I'm not against socializing, so long as it's not tiring.`,
    author: `Houtarou Oreki`
}, {
    quote: `The more inexperienced you are, the more you want to show off.`,
    author: `Houtarou Oreki`
},{
    quote: `If you can never get angry at anything, that probably means you have nothing that you like, either.`,
    author: `Chitanda Eru`
},{
    quote: `Everyone lies, everyone hides things. Nobody makes it through this life being completely honest.`,
    author: `Orihara Izaya`
},{
    quote: `You’re happy enough, so don’t take away the happiness of others. You should share it.`,
    author: `Simon Brezhnev`  
},{
    quote: `If you don't like where you're at now, complain to your past self about it.`,
    author: `Orihara Izaya`  
},{
    quote: `I often wonder about that. Do our tears do any good for the dead?`,
    author: `Kunikida Doppo`  
},{
    quote: `There are those who actually think that powers can be a tool to seduce women.`,
    author: `Sakaguchi Ango`  
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})

