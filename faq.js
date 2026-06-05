    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
            
            const span = question.querySelector('span');
            if (span) {
                span.innerText = item.classList.contains('active') ? '-' : '>';
            }
        });
    });
