const quotes = [
  {
    text:'I will protect those who cannot protect themselves.',
    author:'The Second Ideal of the Windrunners'
  },
  {
    text:'I will protect those that I hate... even if the one I hate is myself.',
    author:'The Third Ideal of the Windrunners'
  },
  {
    text:"Honor is dead. But I'll see what I can do.",
    author:'Kaladin Stormblessed'
  },
  {
    text:'Hello. Would you like to destroy some evil today?',
    author:'Nightblood'
  },
  {
    text:'Ten spears go to battle, and nine shatter. Did that war forge the one that remained? No, Amaram. All the war did was identify the spear that would not break.',
    author:'Kaladin Stormblessed'
  },
  {
    text:'Honor is not dead so long as he lives in the hearts of men!',
    author:'Captain Notum'
  },
  {
    text:'Power is an illusin of perception.',
    author:'Jasnah Kholin'
  },
  {
    text:'Words are where most change begins.',
    author:'Shallan Davar'
  },
  {
    text:'I am a stick',
    author:'Stick'
  },
  {
    text:'All stories have been told before. We tell them to ourselves, as did all men who ever were. And all men who ever will be. The onli things new are the names',
    author:'Wit'
  },
  {
    text:'WE CHOSE',
    author:'Maya'
  },
  {
    text:'Accept the pain, but do not accept that you deserved it. ',
    author:'Wit'
  },
  {
    text:'Does one deserve to have evil done to her by consequence of putting herself where evil can reach her?',
    author:'Jasnah Kholin'
  },
  {
    text:'A man’s emotions are what define him, control is the hallmark of true strength. To lack feeling is to be dead, but to act on every feeling is to be a child.',
    author:'Dalinar Kholin'
  },
  {
    text:'No complaining today. You do this thing too much. Do not make me kick you. I do not like kicking. It hurts my toes.',
    author:'Rock'
  },
  {
    text:'Expectations were like fine pottery. The harder you held them, the more likely they were to crack.',
    author:'Shallan Davar'
  },
  {
    text:'The most important word a man can say are, "I will do better."',
    author:'Dalinar Kholin'
  },
  {
    text:'Sometimes a hypocrite is nothing more than a man in the process of changing.',
    author:'Dalinar Kholin'
  },
  {
    text:'Tight-butt',
    author:'Lyft'
  },
  {
    text:'One can believe in a story without believing it happened.',
    author:''
  },
  {
    text:"Yes, yes.  Aim for the sun.  That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don't know.",
    author:'Wit'
  }

]
const text = document.querySelector('.text')
const author = document.querySelector('.author')
const button = document.querySelector('button')

button.addEventListener('click', randomQuote)
function randomQuote(){
  const index = Math.floor(Math.random()*quotes.length)
  text.innerHTML = quotes[index].text 
  author.innerHTML = quotes[index].author
}
window.addEventListener('load', randomQuote)


console.log(quotes[0].text);