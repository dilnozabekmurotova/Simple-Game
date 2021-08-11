window.addEventListener('DOMContentLoaded', function(){

	const choices= document.querySelectorAll('.choice'),
	  score=document.querySelector('#score'),
	  result=document.querySelector('#result'),
	  model=document.querySelector('.modal'),
	  restart=document.querySelector('#restart'),
	  scoreBoard={
	  	player:0,
	  	computer:0,
	  	draw:0
	  };

//play game
function play(event){
	restart.style.display='inline-block'
	const playerChoice=event.target.id
	const computerChoice=getComputerChoice()
	const winner= getWinner(playerChoice,computerChoice)
	showWinner(winner, computerChoice)
}

//get computer choice
function getComputerChoice(){
	const rand= Math.random()
	if( rand<0.34){
		return 'rock'
	}
	else if( rand<=0.67){
		return 'paper'
	}
	else{ return 'scissors'}
}

//get winner
function getWinner(p,c){
	if(p===c){
		return 'draw'
	} else if(p==='rock'){
		if(c==='paper'){
			return 'computer'
		} else{
			return 'player'
		}
	}else if( p === 'paper')
	{
		if(c=== 'scissors'){
			return 'computer'
		} else{
			return 'player'
		}
	}
	else if(p=== 'scissors')
	{
		if(c==='rock'){
			return 'computer'
		} else{
			return 'player'
		}	
	}
}

//show winner
function showWinner(winner, computerChoice){
	if(winner ==='player'){
		scoreBoard.player++
		result.innerHTML=`<h1 class="text-win">You win</h1>
		<i class="fas fa-hand-${computerChoice} fa-10x"></i>
		<p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
	}else if(winner==='computer'){
		scoreBoard.computer++
		result.innerHTML=`<h1 class="text-lose">You Lose</h1>
		<i class="fas fa-hand-${computerChoice} fa-10x"></i>
		<p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
	}else{
		scoreBoard.draw++
		result.innerHTML=`<h1>It's A Draw</h1> <i class="fas fa-hand-${computerChoice} fa-10x"></i>
		<p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`

	}
	score.innerHTML=`<p>Player: ${scoreBoard.player}</p> 
					 <p style="background-color: #909090;">Computer: ${scoreBoard.computer}</p>
					 <p>Draw: ${scoreBoard.draw}</p>`


	model.style.display='block'
}

//resrart game
function restartGame(){
	scoreBoard.player=0
	scoreBoard.computer=0
	scoreBoard.draw=0
	score.innerHTML=`<p>Player:${scoreBoard.player}</p> 
					 <p style="background-color: #909090;">Computer:${scoreBoard.computer}</p>
					 <p>Draw: ${scoreBoard.draw}</p>`
}

//clear model
function clearModel(event){
	if(event.target==model){
		model.style.display='none'
	}
}

//Event listener
choices.forEach(choice=>choice.addEventListener('click',play))
window.addEventListener('click', clearModel)
restart.addEventListener('click', restartGame)
})

