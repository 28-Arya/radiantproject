
        const courseSlider = document.querySelector('.course-slider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;

        // Function to display the current course
        function showCourse(index) {
            const courseCards = courseSlider.querySelectorAll('.course-card');
            courseCards.forEach((card, i) => {
                card.style.display = i === index ? 'block' : 'none';
            });
        }

        // Event listener for previous button
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + courseSlider.children.length) % courseSlider.children.length;
            showCourse(currentIndex);
        });

        // Event listener for next button
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % courseSlider.children.length;
            showCourse(currentIndex);
        });

        // Show the initial course (index 0)
        showCourse(currentIndex);
   