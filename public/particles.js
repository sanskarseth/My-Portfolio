var canvas = document.getElementById('canvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
console.log(canvas.width, canvas.height);

var c = canvas.getContext('2d');

var mouse = {
	x: undefined,
	y: undefined,
};

var MaxRadius = 5;
var MinRadius = 1;

var colorArray = ['#66A141', '#9DBF63', '#DEE68E', '#FFF9B5', '#DE570B'];
// var colorArray = ['lime'];

window.addEventListener('mousemove', function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

class Circle {
	constructor(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	}
	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}
	update() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		//adding animations

		if (
			mouse.x - this.x < 25 &&
			mouse.x - this.x > -25 &&
			mouse.y - this.y < 25 &&
			mouse.y - this.y > -25
		) {
			if (this.radius < MaxRadius) {
				this.radius += 0.02;
			}
		} else if (this.radius > MinRadius) {
			this.radius -= 0.02;
		}

		this.draw();
	}
}

var circleArray = [];

for (var i = 0; i < 250; i++) {
	var radius = 1;

	var x = Math.random() * (innerWidth - 2 * radius) + radius;
	var dx = Math.random() - 0.5;
	var y = Math.random() * (innerHeight - 2 * radius) + radius;
	var dy = Math.random() - 0.5;

	circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
