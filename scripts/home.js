document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('resume');
    const text = el.textContent;
    el.textContent = ''; 

    let index = 0;

    function type() {
        if (index < text.length) {
            el.textContent += text[index];
            index++;
            setTimeout(type, 30);  
        }
    }

   
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            type();
            observer.disconnect();
        }
    });

    observer.observe(el);
});