window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Code copied from CSS Tricks, modified
if (document.body.animate) {
	document.querySelector('#button').addEventListener('click', pop);
}

function pop(e) {
	// Quick check if user clicked the button using a keyboard
	if (e.clientX === 0 && e.clientY === 0) {
		const bbox = document.querySelector('#button').getBoundingClientRect();
		const x = bbox.left + bbox.width / 2;
		const y = bbox.top + bbox.height / 2;
		for (let i = 0; i < 20; i++) {
			// We call the function createParticle 30 times
			// We pass the coordinates of the button for x & y values
			createParticle(x, y);
		}
	} else {
		for (let i = 0; i < 20; i++) {
			// We call the function createParticle 30 times
			// As we need the coordinates of the mouse, we pass them as arguments
			createParticle(e.clientX, e.clientY);
		}
	}
}

function createParticle(x, y) {
	const particle = document.createElement('particle');
	document.body.appendChild(particle);

	// Calculate a random size from 5px to 25px
	particle.style.width = '194px';
	particle.style.height = '267px';

	const images = [
		'https://c.tenor.com/wLTK-fVE75UAAAAC/tenor.gif',
		'../assets/images/chuck-schumer-cursed.png'
	];

	const randomImage = images[Math.floor(Math.random() * images.length)];
	particle.style.backgroundImage = `url(${randomImage})`;

	// Generate a random x & y destination within a distance of 1000px from the mouse
	const destinationX = x + (Math.random() - 0.5) * 2 * 1000;
	const destinationY = y + (Math.random() - 0.5) * 2 * 1000;
	// Store the animation in a variable as we will need it later
	const animation = particle.animate(
		[
			{
				// Set the origin position of the particle
				// We offset the particle with half its size to center it around the mouse
				transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
				opacity: 1,
			},
			{
				// We define the final coordinates as the second keyframe
				transform: `translate(${destinationX}px, ${destinationY}px)`,
				opacity: 0,
			},
		],
		{
			// Set a random duration from 500 to 1500ms
			duration: Math.random() * 1000 + 2000,
			easing: 'cubic-bezier(0, .25, .75, 1)',
			// Delay every particle with a random value of 750ms
			delay: Math.random() * 1500,
		}
	);

	// When the animation is complete, remove the element from the DOM
	animation.onfinish = () => {
		particle.remove();
	};
}

//dancing baby switch

let clickCount = 0;
const button = document.getElementById('button');
const img = document.getElementById('hero');

button.addEventListener('click', () => {
		clickCount++;

		if (clickCount === 1) {
			timer = setTimeout (() => {
				clickCount = 0;
			}, 15000);
		}

		if (clickCount === 10) {
			clearTimeout(timer);
			setTimeout(() => {
				img.src = '../assets/images/Dancing baby_.gif';
			}, 2500);

			setTimeout(() => {
        img.src = '../assets/images/chuck-schumer-cursed.png';
      }, 15000);
			clickCount = 0;
		}
});


