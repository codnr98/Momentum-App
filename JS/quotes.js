const quotes = [
    {
        quote: "The way to get started is to quit talking and begin",
        author: "Walt Disney",
    },
    {
        quote: "I never dreamed about success, I worked for it",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to  be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the godd to go for the great",
        author: "John D.Rockefeller",
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whateer you do, you have to keep moving forward.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is alwakys to try just one more time.",
        author: "Thomas Edison",
    },
    {
        quote: "The fastet way to change yourself is to hang out with people who are already the way you want to be",
        author: "REid Hoffman",
    },
    {
        quote: "Money is like gasoline during a road trip. you do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
        author: "Tim O Reilly",
    },
    {
        quote: "Some people dream of success, while other people get up every morning and make it happen",
        author: "Wayne Huizenga",
    },
    {
        quote: "The only thing worse than starting something and falling..is not starting something",
        author: "SEth Godin",
    },
    {
        quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
        author: "Jim Rohn",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math random() * 10 을 사용하면 숫자를 랜덤으로 반환한다 옆에 * 10을 붙이면 0에서 10까지 숫자중에서 랜덤으로 반환한다.
//Math round() 괄호안의 숫자를 정수로 바꿔준다. ex) 1.4 => 1, 3.4 => 3, 3.6 => 4, 3.9 => 4 반올림
//Math ceil() 괄호안의 숫자를 정수로 바꿔준다. ex) 1.2 => 2, 5.9 => 6 올림
//Math floor() 괄호안의 숫자를 정수로 바꿔준다. ex) 1.2 => 1, 1.9 => 1 내림