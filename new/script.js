const letters = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];
let currentLetter = '';   
let correctAnswers = 0;

const letterImages = {
    'أ': ['../images/أ1.png', '../images/أ2.png', '../images/أ3.png'],
        'ب': ['../images/ب1.png', '../images/ب2.png', '../images/ب3.png'],
        'ت': ['../images/ت1.png', '../images/ت2.png', '../images/ت3.png'],
        'ث': ['../images/ث1.png', '../images/ث2.png', '../images/ث3.png'],
        'ج': ['../images/ج1.png', '../images/ج2.png', '../images/ج3.png'],
        'ح': ['../images/ح1.png', '../images/ح2.png', '../images/ح3.png'],
        'خ': ['../images/خ1.png', '../images/خ2.png', '../images/خ3.png'],
        'د': ['../images/د1.png', '../images/د2.png', '../images/د3.png'],
        'ذ': ['../images/ذ1.png', '../images/ذ2.png', '../images/ذ3.png'],
        'ر': ['../images/ر1.png', '../images/ر2.png', '../images/ر3.png'],
        'ز': ['../images/ز1.png', '../images/ز2.png', '../images/ز3.png'],
        'س': ['../images/س1.png', '../images/س2.png', '../images/س3.png'],
        'ش': ['../images/ش1.png', '../images/ش2.png', '../images/ش3.png'],
        'ص': ['../images/ص1.png', '../images/ص2.png', '../images/ص3.png'],
        'ض': ['../images/ض1.png', '../images/ض2.png', '../images/ض3.png'],
        'ط': ['../images/ط1.png', '../images/ط2.png', '../images/ط3.png'],
        'ظ': ['../images/ظ1.png', '../images/ظ2.png', '../images/ظ3.png'],
        'ع': ['../images/ع1.png', '../images/ع2.png', '../images/ع3.png'],
        'غ': ['../images/غ1.png', '../images/غ2.png', '../images/غ3.png'],
        'ف': ['../images/ف1.png', '../images/ف2.png', '../images/ف3.png'],
        'ق': ['../images/ق1.png', '../images/ق2.png', '../images/ق3.png'],
        'ك': ['../images/ك1.png', '../images/ك2.png', '../images/ك3.png'],
        'ل': ['../images/ل1.png', '../images/ل2.png', '../images/ل3.png'],
        'م': ['../images/م1.png', '../images/م2.png', '../images/م3.png'],
        'ن': ['../images/ن1.png', '../images/ن2.png', '../images/ن3.png'],
        'ه': ['../images/ه1.png', '../images/ه2.png', '../images/ه3.png'],
        'و': ['../images/و1.png', '../images/و2.png', '../images/و3.png'],
        'ي': ['../images/ي1.png', '../images/ي2.png', '../images/4y.png'],
};

const letterForms = {
    'أ': ['أَ', 'أُ', 'أِ'],
    'ب': ['بَ', 'بُ', 'بِ'],
    'ت': ['تَ', 'تُ', 'تِ'],
            'ث': ['ثَ', 'ثُ', 'ثِ'],
            'ج': ['جَ', 'جُ', 'جِ'],
            'ح': ['حَ', 'حُ', 'حِ'],
            'خ': ['خَ', 'خُ', 'خِ'],
            'د': ['دَ', 'دُ', 'دِ'],
            'ذ': ['ذَ', 'ذُ', 'ذِ'],
            'ر': ['رَ', 'رُ', 'رِ'],
            'ز': ['زَ', 'زُ', 'زِ'],
            'س': ['سَ', 'سُ', 'سِ'],
            'ش': ['شَ', 'شُ', 'شِ'],
            'ص': ['صَ', 'صُ', 'صِ'],
            'ض': ['ضَ', 'ضُ', 'ضِ'],
            'ط': ['طَ', 'طُ', 'طِ'],
            'ظ': ['ظَ', 'ظُ', 'ظِ'],
            'ع': ['عَ', 'عُ', 'عِ'],
            'غ': ['غَ', 'غُ', 'غِ'],
            'ف': ['فَ', 'فُ', 'فِ'],
            'ق': ['قَ', 'قُ', 'قِ'],
            'ك': ['كَ', 'كُ', 'كِ'],
            'ل': ['لَ', 'لُ', 'لِ'],
            'م': ['مَ', 'مُ', 'مِ'],
            'ن': ['نَ', 'نُ', 'نِ'],
            'ه': ['هَ', 'هُ', 'هِ'],
            'و': ['وَ', 'وُ', 'وِ'],
            'ي': ['يَ', 'يُ', 'يِ'],

};

function startGame() {
    document.getElementById('bg-music').pause();
    showPage('letters-page');
    initLetters();
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');
}

function initLetters() {
    const container = document.getElementById('letters-container');
    letters.forEach(letter => {
        const box = document.createElement('div');
        box.className = 'letter-box';
        box.textContent = letter;
        box.onclick = () => showLetterDetails(letter);
        container.appendChild(box);
    });
}

function showLetterDetails(letter) {
    currentLetter = letter;
    document.getElementById('current-letter').textContent = `حرف ${letter}`;
    const imagesContainer = document.getElementById('letter-images');
    imagesContainer.innerHTML = '';
    
    letterImages[letter].forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.className = 'letter-image';
        imgElement.src = `images/${img}`;
        imagesContainer.appendChild(imgElement);
    });
    
    showPage('detail-page');
}

function startTest() {
    correctAnswers = 0;
    showPage('test-page');
    nextQuestion();
}

function nextQuestion() {
    if (correctAnswers >= 3) {
        showPage('letters-page');
        return;
    }

    const forms = letterForms[currentLetter];
    const correctForm = forms[correctAnswers];
    const options = [...forms].sort(() => Math.random() - 0.5);

    document.getElementById('test-image').src = `images/${letterImages[currentLetter][correctAnswers]}`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = (e) => checkAnswer(e.target, opt === correctForm);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(button, isCorrect) {
    const correctForm = letterForms[currentLetter][correctAnswers];
    const options = document.querySelectorAll('.option-btn');

    if (!isCorrect) {
        
        new Audio('../sound/error-126627.mp3').play();
        button.style.backgroundColor = '#e74c3c';
        ;
    } else {
        new Audio('../sound/true.mp3').play();
        button.style.backgroundColor = '#2ecc71'
        correctAnswers++;
        setTimeout(() => {
            if (correctAnswers < 3) {
                nextQuestion();
            } else {
                showPage('letters-page');
            }
        }, 1500);
    }
}