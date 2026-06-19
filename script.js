// استدعاء العناصر من الـ HTML
const startOverlay = document.getElementById('start-overlay');
const startBtn = document.getElementById('start-btn');
const welcomeAudio = document.getElementById('welcome-audio');
const rapAudio = document.getElementById('rap-audio');

const eventOne = document.getElementById('event-one');
const eventTwo = document.getElementById('event-two');

const nextEventBtn = document.getElementById('next-event-btn');
const backEventBtn = document.getElementById('back-event-btn');

// 1. بدء التجربة وتشغيل الساوند الأول (تخطي حماية المتصفح)
startBtn.addEventListener('click', () => {
    startOverlay.style.opacity = '0';
    setTimeout(() => {
        startOverlay.style.display = 'none';
        welcomeAudio.play().catch(error => console.log("الرمز الصوتي محجوب حتى الآن:", error));
    }, 500);
});

// 2. الانتقال من الحدث الأول للحدث الثاني (الراب)
nextEventBtn.addEventListener('click', () => {
    // إخفاء الحدث الأول بالتدريج
    eventOne.classList.remove('show');
    
    setTimeout(() => {
        eventOne.classList.add('hidden');
        eventTwo.classList.remove('hidden');
        
        // إظهار الحدث الثاني بالتدريج الحركي
        setTimeout(() => {
            eventTwo.classList.add('show');
        }, 50);

        // التبديل بين الأصوات
        welcomeAudio.pause();
        rapAudio.currentTime = 0; // يبدأ الساوند من الأول
        rapAudio.play().catch(e => console.log(e));
    }, 600); // متناسق مع وقت الـ CSS transition
});

// 3. الرجوع من الحدث الثاني للحدث الأول
backEventBtn.addEventListener('click', () => {
    eventTwo.classList.remove('show');
    
    setTimeout(() => {
        eventTwo.classList.add('hidden');
        eventOne.classList.remove('hidden');
        
        setTimeout(() => {
            eventOne.classList.add('show');
        }, 50);

        // التبديل بين الأصوات عودةً للأول
        rapAudio.pause();
        welcomeAudio.currentTime = 0;
        welcomeAudio.play().catch(e => console.log(e));
    }, 600);
});