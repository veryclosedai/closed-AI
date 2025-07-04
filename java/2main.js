document.addEventListener('DOMContentLoaded', () => {
    // Auto-resize textarea as user types
    const textarea = document.querySelector('textarea');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    // Handle submit button click
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', () => {
        if (textarea.value.trim()) {
            // Handle message submission here
            console.log('Submitted:', textarea.value);
            textarea.value = '';
            textarea.style.height = 'auto';
        }
    });

    // Handle enter key press
    textarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitBtn.click();
        }
    });
});