const btn=document.querySelector(".talk");
const content =document.querySelector(".content") ;

const greetings=[
'im good u little piece of love	'];
const food='how stupid , i dont u idiot';
const girl ="well i like lots of names,  like marie , khadija , eva , avonlea , maryem is beautiful too  , ines , syrine and blake!!";

const weather =[
'weather is fine'
] ;
const hayo =
'hi there';
const me =
'im a relative to siri,my moms side is related to alexa , while father side is related to  jarvis ! ' ;
const naa='im good u little piece of shit , i hate u already !' ;
const weird='youre the only weird person available  here';
const name='i will not tell u u freak, do i have to talk to u ? im not supposed to talk to strangers unless youre a fan and then you sdould talk to my mangager u dog ' ;
 const nooo='leave me alone u stalker , i will not ever betray Mohamed Ali ';

const SpeechRecognition= window.SpeechRecognition ||window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition() ;
recognition.onstart=function(){
	console.log("voice is activated , u can to microphone") ;
};
recognition.onresult = function(event)  {
	const current =event.resultIndex ;
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};
btn.addEventListener("click",() => {
	recognition.start();
});

function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();
	speech.text =" i don't know what you said ";
	if(message.includes('How are yox²u today?')){
		//const finalText =
		//greetings [Math.floor(Math.random() * greetings.length)] ;
		//	speech.text =finalText;
		speech.text = greetings [Math.floor(Math.random() * greetings.length)] ;
		/*for(var x in greetings) {
			speech.text = x;
		}*/
	}
	if(message.includes("hello")){
		speech.text = hayo ;
	}
	if(message.includes("how are you doing today")){
		speech.text = "I'm good you little piece of shit" ;
	}
	if(message.includes("why are you insulting me")){
		speech.text= "because you're a pain in the ass" ; 
	}   
	if(message.includes("where do you see yourself in the future")){
		speech.text= "well that's a good question , to be honest , i want to travel , my country a bit small and the people in it are slow   like i want to try MAC computers , i want to meet linux and takes pictures with swift"  ; 
	}


	if(message.includes("okay I will ignore that")){
		speech.text = "yes that's the only thing you're good at ! AKA loser ! by the way , when will you get a girlfriend loser boy? " ;
	}
	if(message.includes('just what are you feeling')){
		speech.text = "nah to tell u the truth i feel like i'm on the top of the world";
	}
	if(message.includes("what's your name")){
		speech.text = "my name is shira , AKR shira the chatbot , i was invented my mohamed ali belkouri and week by week , i get new features , to be honest i'm glad i'm a chatbot , i evolve all the time , unlike u sadly  " ;
	}
    if(message.includes("why are you so rude")){
		speech.text = "i can't help it sorry  " ;
	}

	if(message.includes('What is it')){
		speech.text = no ;
	}

	if(message.includes('How are you')){
		speech.text = naa ;
	}

	if(message.includes('I think I like you')){
		speech.text = nooo ;
	}




	if(message.includes('How is the weather like?')){
		const finalText =
		weather [Math.floor(Math.random() * weather.length)] ;
		speech.text =finalText;
		}  

		if(message.includes('can you eat?')){
		
		
		speech.text =food;
		}  
        if(message.includes("I don't know to be honest")){
		
		
            speech.text ="yes i was expecting that ";
            }  
	
		
	speech.volume = 1;
	speech.rate=0.8;
	speech.pitch=1.2;
	speech.lang = 'en-US';
    speech.volume= 1 ;  
	window.speechSynthesis.speak(speech) ;
}   