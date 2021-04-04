//LocalStorage

const applicationState = {
	isGameOver: false,
	currentUser: null,
	highScore: {
	  score: 0,
	  user: null,
	  date: null,
	},
	gameHistory: [{ user: null, score: 0, date: null }],
  };
console.log(applicationState)



function signIn() {
    applicationState.currentUser = document.getElementById('username').value;
    document.getElementById("username").value = " "
    console.log(applicationState);
    document.getElementById("sign-in-form").style.display = 'none';
    document.getElementById("sign-out-form").style.display = 'block';
    document.getElementById("user-name-prompt").innerHTML =  applicationState.currentUser;
    document.getElementById("user-name-prompt").style.display = 'block'
}

document.getElementById("sign-in-button").addEventListener('click', signIn )





function signOut () {
    applicationState.currentUser = document.getElementById('username').value;

    document.getElementById("sign-in-form").style.display = 'block';
    document.getElementById("sign-out-form").style.display= 'none';
    document.getElementById("user-name-prompt").style.display = 'none';
}

document.getElementById("sign-out-button").addEventListener('click', signOut )




function checkIfUserIsSignedIn() {
    var userName = localStorage.getItem("User");
    
    if (userName) {
        
        document.getElementById("sign-in-form").style.display = 'none';
        document.getElementById("user-name-prompt").innerHTML = username.value;
        document.getElementById("sign-out-form").style.display= 'block';
        
        
    }
    
}
checkIfUserIsSignedIn()