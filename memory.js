const cardarray = [
    {
        name : 'fries',
        img : 'fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'milkshake.png'
    },
    {
        name : 'pizza',
        img : 'pizza.png'
    },
    {
        name : 'fries',
        img : 'fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'milkshake.png'
    },
    {
        name : 'pizza',
        img : 'pizza.png'
    }
]
const h4 = document.querySelector('h4');
var w = document.querySelector('#q');
var c= 30;
w.innerText = c;

var int = setInterval(() => {
    
    w.innerText=c;
    
    if (c<=0)
    {
        w.innerText='0';
        clearInterval(int);
        h4.innerText='You Lost!';
        alert('YOU LOST');
        removeBoard();

    }
    c--;

}, 1000);

var score =0;
var cardsChosen =[];
var cardschosenid = [];
console.log(cardarray);
cardarray.sort(() => 0.5 -Math.random());
const gridDisplay = document.querySelector('.b');

function checkmatch(){
    const cards = document.querySelectorAll('.b img');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const h3 = document.querySelector('h3');
    const h4 = document.querySelector('h4');
    let a = cardschosenid[0];
    let y = cardschosenid[1];
    if (a===y)
    {
        
        alert('Dont click the same image');
        cards[cardschosenid[0]].setAttribute('src','blank.png');
    }
    else if (cardsChosen[0]===cardsChosen[1])
    {
        cards[cardschosenid[0]].setAttribute('src','white.png');
        cards[cardschosenid[1]].setAttribute('src','white.png');
        cards[cardschosenid[0]].removeEventListener('click',flipcard);
        cards[cardschosenid[1]].removeEventListener('click',flipcard);
    
        score++;
        h2.innerText=`Your score is ${score}`;
        if (score>=6)
        {
            alert('Congrats you won!');
            h3.innerText='You Won!';
            clearInterval(int);
            but.style.visibility = 'visible';
        }
        else if (score<6 && c===0)
        {
            removeBoard();
        }
        
    }
    else 
    {
        cards[cardschosenid[0]].setAttribute('src','blank.png');
        cards[cardschosenid[1]].setAttribute('src','blank.png');
        cardsChosen =[];
        cardschosenid = [];
        
   
    }
    cardsChosen = [];
    cardschosenid = [];
}
function removeBoard() {
    const inp = document.querySelectorAll('img');
    try{
        if (inp[0].src===null)
    {

    }
    else 
    {
        for (let i=0;i<12;i++)
        {
        
            inp[i].remove();
        }
    
        
    }
    }
    catch {

    }
    
    
}

function createBoard() {
    for (let i=0;i<12;i++)
    {
        const img = document.createElement('img');
        img.src='blank.png';
        img.setAttribute('data-id',i);
        img.addEventListener('click',flipcard);
        gridDisplay.append(img);
        
    }
}
createBoard();
function flipcard() {
    let q = this.getAttribute('data-id');

    this.setAttribute('src',cardarray[q].img);
    cardsChosen.push(cardarray[q].name);

    cardschosenid.push(q)
    if (cardsChosen.length ===2)
    {
        
        setTimeout(checkmatch,500);
    }
}
