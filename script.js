function preloadImage(url) {
	var img=new Image();
	img.src=url;
}

preloadImage('paper.png');
preloadImage('scissors.png');
preloadImage('rock.png');

var p1 = "";
var p2 = "";

function getResults() {
	var pos = ["rock", "paper", "scissors"];
	if (pos.includes(p1)) {
		if (pos.includes(p2)) {
			var msg = "";
			if (p2 == "rock") {
				if (p1 == "rock") {
					msg = "It's a draw!";
				} else if (p1 == "paper") {
					msg = "Player 1 wins!";
				} else if (p1 == "scissors") {
					msg = "Player 2 wins!";
				}
			} else if (p2 == "paper") {
				if (p1 == "rock") {
					msg = "Player 2 wins!";
				} else if (p1 == "paper") {
					msg = "It's a draw!";
				} else if (p1 == "scissors") {
					msg = "Player 1 wins!";
				}
			} else if (p2 == "scissors") {
				if (p1 == "rock") {
					msg = "Player 1 wins!";
				} else if (p1 == "paper") {
					msg = "Player 2 wins!";
				} else if (p1 == "scissors") {
					msg = "It's a draw!";
				}
			}
			if (msg != "") {
				var br = document.createElement('br');
				var h = document.createElement('h2');
				h.innerText = msg;
				h.style = "margin-top: 13px;";
				document.body.appendChild(br);
				document.body.appendChild(h);
				var button = document.createElement('button');
				button.style = "padding: 10px; font-size: 26px; padding-top: 5px;";
				button.innerText = "Start over!";
				document.body.appendChild(button);
				button.addEventListener("click", function() {
					start();
				});
				return;
			}
		}
	}
	alert("Something went wrong!");
	start();
}

function shoot(player, which) {
	if (player == 1) {
		p1 = which;
		document.body.innerHTML = '';
		var imgs = ["rock", "paper", "scissors"];
		var h = document.createElement('h1');
		h.innerText = "Player 2, choose your hand";
		document.body.appendChild(h);
		var buttons = {};
		for (i in imgs) {
			if (!isNaN(i)) {
				var img = imgs[i];
				var div = document.createElement('div');
				div.style = "padding: 20px; float: left;";
				var image = document.createElement('img');
				image.src = img+'.png';
				div.appendChild(image);
				var br = document.createElement('br');
				div.appendChild(br);
				buttons[i] = document.createElement('button');
				buttons[i].innerText = img;
				buttons[i].style = "font-size: 20px; padding: 6px; margin: auto;";
				div.appendChild(buttons[i]);
				document.body.appendChild(div);
				buttons[i].addEventListener("click", function() {
					shoot(2, this.innerText);
				});
			}
		}
	} else {
		p2 = which;
		document.body.innerHTML = '';
		var h = document.createElement('h1');
		h.innerText = "Rock paper scissors results:";
		document.body.appendChild(h);
		
		var div = document.createElement('div');
		div.style = "padding: 20px; float: left;";
		h = document.createElement('h3');
		h.innerText = "Player 1: " + p1;
		div.appendChild(h);
		var img = document.createElement('img');
		img.src = p1 + ".png";
		div.appendChild(img);
		document.body.appendChild(div);
		
		var height = div.clientHeight;
		
		div = document.createElement('div');
		div.style = "padding: 20px; float: left; margin: auto; height:"+height.toString()+";";
		h = document.createElement('h1');
		h.innerText = "VS";
		div.appendChild(h);
		document.body.appendChild(div);
		
		div = document.createElement('div');
		div.style = "padding: 20px; float: left;";
		h = document.createElement('h3');
		h.innerText = "Player 2: " + p2;
		div.appendChild(h);
		img = document.createElement('img');
		img.src = p2 + ".png";
		div.appendChild(img);
		document.body.appendChild(div);
		getResults();
	}
}

function start() {
	document.body.innerHTML = '';
	p1 = "";
	p2 = "";
	var imgs = ["rock", "paper", "scissors"];
	var h = document.createElement('h1');
	h.innerText = "Player 1, choose your hand";
	document.body.appendChild(h);
	var buttons = {};
	for (i in imgs) {
		if (!isNaN(i)) {
			var img = imgs[i];
			var div = document.createElement('div');
			div.style = "padding: 20px; float: left;";
			var image = document.createElement('img');
			image.src = img+'.png';
			div.appendChild(image);
			var br = document.createElement('br');
			div.appendChild(br);
			buttons[i] = document.createElement('button');
			buttons[i].innerText = img;
			buttons[i].style = "font-size: 20px; padding: 6px; margin: auto;";
			div.appendChild(buttons[i]);
			document.body.appendChild(div);
		}
	}
	for (i in buttons) {
		if (!isNaN(i)) {
			buttons[i].addEventListener("click", function() {
				shoot(1, this.innerText);
			});
		}
	}
}

start();