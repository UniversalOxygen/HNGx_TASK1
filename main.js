const background = document.querySelector('#background');
const hoverElements = document.querySelectorAll('#hover-el');
const container = document.querySelector('#container');

gsap.to('#background', {
    y: '-50vh',
    duration: 1, // Animation duration (in seconds)
    backgroundColor: '#022842', // Intermediate color 1
    ease: 'back(2)',
    onComplete: function () {
      // Animation is complete for Intermediate color 1
      gsap.to('#background', {
        y: '50vh',
        duration: 1, // Animation duration for Intermediate color 2
        backgroundColor: '#805f06', // Intermediate color 2
        ease: 'back(2)',
        onComplete: function () {
          // Animation is complete for Intermediate color 2
          gsap.to('#background', {
            y: '0vh',
            duration: 1, // Animation duration for the final color
            backgroundColor: '#6d140a', // Final background color
            ease: 'back(2)',
            onComplete: function () {
              const tl = gsap.timeline({
                defaults: { opacity: 0, ease: 'back' },
              });
              gsap.set('#container', {
                visibility: 'visible',
                delay: '3.2',
                ease: 'back',
              });
  
              tl.from('#container', { ease: 'linear', autoAlpha: 0 })
                .from('h1', { x: 80 })
                .from('h3', { x: -80 })
                .from('a', { y: -30 })
                .from('.time', { y: 30 });
            },
          });
        },
      });
    },
  });

  hoverElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      const bgColor = getComputedStyle(element).color;
      background.style.backgroundColor = bgColor;
    });
  });