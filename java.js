var qoute = [
    {
        qoute: "“Be yourself; everyone else is already taken.”",
        Auther: "― Oscar Wilde"
    },

    {
        qoute: "“So many books, so little time.”",
        Auther: "― Frank Zappa"
    },
    {
        qoute: "“A room without books is like a body without a soul.”",
        Auther: "― Marcus Tullius Cicero"
    },
    {
        qoute: "“You only live once, but if you do it right, once is enough.”",
        Auther: "― Mae West"
    },
    {
        qoute: "“Be the change that you wish to see in the world.”",
        Auther: "― Mahatma Gandhi"
    },
    {
        qoute: "“If you tell the truth, you don't have to remember anything.”",
        Auther: "― Mark Twain"
    },
    {
        qoute: "“A friend is someone who knows all about you and still loves you.”",
        Auther: "― Elbert Hubbard"
    },
    {
        qoute: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        Auther: "― Oscar Wilde"
    },
]




function newQoute() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}