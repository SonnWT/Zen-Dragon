var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.3 });

var reveals = document.querySelectorAll('.reveal');
reveals.forEach(function(reveal) {
    observer.observe(reveal);
});

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('actives');
        } else {
            entry.target.classList.remove('actives');
        }
    });
}, { threshold: 0.3 });

var reveals = document.querySelectorAll('.reveals');
reveals.forEach(function(reveal) {
    observer.observe(reveal);
});
