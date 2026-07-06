var carousels = document.querySelectorAll('.carousel, .carousel2');
        carousels.forEach((carousel) => {
            var nextBtn = carousel.querySelector('.next'),
                prevBtn = carousel.querySelector('.prev'),
                list = carousel.querySelector('.list'),
                runningTime = carousel.querySelector('.timeRunning');

             let timeRunning = 3000;
             let timeAutoNext = 7000;

            nextBtn.onclick = function() {
                showSlider('next', carousel, list, runningTime);
            };

            prevBtn.onclick = function() {
                showSlider('prev', carousel, list, runningTime);
            };

            let runNextAuto = setTimeout(() => {
                nextBtn.click();
            }, timeAutoNext);

            function resetTimeAnimation(runningTime) {
                runningTime.style.animation = 'none';
                runningTime.offsetHeight; /* trigger reflow */
                runningTime.style.animation = null;
                runningTime.style.animation = 'runningTime 7s linear 1 forwards';
            }

            function showSlider(type, carousel, list, runningTime) {
                let sliderItemsDom = list.querySelectorAll('.item');
                if (type === 'next') {
                    list.appendChild(sliderItemsDom[0]);
                    carousel.classList.add('next');
                } else {
                    list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                    carousel.classList.add('prev');
                }

                setTimeout(() => {
                    carousel.classList.remove('next');
                    carousel.classList.remove('prev');
                }, timeRunning);

                clearTimeout(runNextAuto);
                runNextAuto = setTimeout(() => {
                    nextBtn.click();
                }, timeAutoNext);

                resetTimeAnimation(runningTime);
            }

            // Start the initial animation
            resetTimeAnimation(runningTime);
        });
    

