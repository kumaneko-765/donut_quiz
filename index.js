const quiz = [
    {
        question: 'ドーナツの穴は何のため？',
        answer: [
            '材料節約',
            '持ちやすさ',
            '火の通りをよくする',
            'カロリー0の主張',
        ],
        correct: '火の通りをよくする'
    },{
        question: 'ミスタードーナツの商品でカロリーが一番低いのは？',
        answer: [
            'フレンチクルーラー',
            'エンゼルクリーム',
            'オールドファッション',
            'ハニーディップ',
        ],
        correct: 'フレンチクルーラー'
    },{
        question: 'ドーナツ発祥の国はどこ？',
        answer: [
            'フランス',
            'アフリカ',
            '日本',
            'アメリカ',
        ],
        correct: 'アメリカ'
    }

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    const buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
        window.alert('私、くまねこはドーナツ大好きです！');
        
    }

};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
const buttonLength = $button.length;
while (handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handleIndex++;
}
