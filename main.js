const quotes = [
    {
        name: 'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },

    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly.'
    },

    {
        name: 'Abraham Lincoln',
        quote: 'I`m a success  today because I had a friend who believed in me and I didnt have the heart of letting him down.'

    },

    {
        name: 'Leonardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplshment rarely sat back and let things happened to them.'
    },

    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, be.'

    }

]

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector("#quote");

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length)
    quoteAuthor.innerHTML =quotes[number].name;
    quote.innerHTML =quotes[number].quote;

}