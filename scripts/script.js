document.querySelectorAll('.faq__question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});
