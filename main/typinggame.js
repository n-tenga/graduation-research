// ゲームに使用することわざのリスト
const word_id =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
const input_shortwords = ["いちねんのけいはがんたんにあり", "じんじをつくしててんめいをまつ", "じじつはしょうせつよりもきなり", "やまたかきがゆえにとうとからず", "むりがとおればどうりがひっこむ", "きのうはひとのみきょうはわがみ", "おんなさんにんよればかしましい", "うしにひかれてぜんこうじまいり", "かわいさあまってにくさがひゃくばい", "あおはあいよりいでてあいよりあおし", "ひとのうわさもしちじゅうごにち", "はじめあるものはかならずおわりあり", "きよみずのぶたいからとびおりる", "あたるもはっけあたらぬもはっけ", "ひのないところにけむりはたたぬ", "くちもはっちょうてもはっちょう", "かふくはあざなえるなわのごとし", "かにはこうらににせてあなをほる", "へたなてっぽうもかずうちゃあたる", "のどもとすぎればあつさをわすれる", "さんじゅうろっけいにげるにしかず", "くんしゅさんもんにはいるをゆるさず", "おんなかしこうてうしうりそこなう", "おにもじゅうはちばんちゃもでばな", "いのなかのかわずたいかいをしらず", "いっすんのむしにもごぶのたましい", "いっしょうこうなりてばんこつかる", "いちようおちててんかのあきをしる", "ろーまはいちにちにしてならず", "みをすててこそうかぶせもあれ", "ほねおりぞんのくたびれもうけ", "ひとのふりみてわがふりなおせ", "ごうにいってはごうにしたがえ", "さんにんよればもんじゅのちえ", "うそつきはどろぼうのはじまり", "すぎたるはおよばざるがごとし", "らくはくのたね、くはらくのたね", "ももくりさんねんかきはちねん", "ほとけつくってたましいいれず", "へたのかんがえやすむににたり", "にとをおうものはいっとをもえず", "つるはせんねんかめはまんねん", "おびにみじかしたすきにながし", "いちなんさってまたいちなん", "かぎゅうかくじょうのあらそい"];
const display_shortwords = ["一年の計は元旦にあり", "人事を尽くして天命を待つ", "事実は小説よりも奇なり", "山高きが故に貴からず", "無理が通れば道理がひっこむ", "昨日は人の身今日は我が身", "女三人寄れば姦しい", "牛にひかれて善光寺参り", "可愛さ余って憎さが百倍", "青は藍より出でて藍より青し",/*10*/ "人のうわさも七十五日", "始め有るものは必ず終わり有り", "清水の舞台から飛び降りる", "当たるも八卦当たらぬも八卦", "火のないところに煙は立たぬ", "口も八丁手も八丁", "禍福は糾える縄の如し", "蟹は甲羅に似せて穴を掘る", "下手な鉄砲も数撃ちゃ当たる", "喉元過ぎれば熱さを忘れる"/*20*/, "三十六計逃げるに如かず", "葷酒山門に入るを許さず", "女賢しうて牛売り損なう", "鬼も十八番茶も出花", "井の中の蛙大海を知らず", "一寸の虫にも五分の魂", "一将功成りて万骨枯る", "一葉落ちて天下の秋を知る", "ローマは一日にしてならず", "身を捨ててこそ浮かぶ瀬もあれ",/*30*/ "骨折り損のくたびれもうけ", "人のふり見てわがふり直せ", "郷に入っては郷に従え", "三人寄れば文殊の知恵", "嘘つきは泥棒のはじまり", "過ぎたるは及ばざるが如し", "楽は苦の種、苦は楽の種", "桃栗三年柿八年", "仏作って魂入れず", "下手の考え休むに似たり",/*40*/ "二兎を追う者は一兎をも得ず", "鶴は千年亀は万年", "帯に短し襷に長し", "一難去ってまた一難", "蝸牛角上の争い"];
const delaytime =[0, 0, 0, 0, 0, 0, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000

]

// 初期化
let score = 0;
let time = 0;  // timeの初期値は0
let backspaceCount = 0;
let keystrokeCount = 0;  // キーストロークのカウント用変数を追加
let isPlaying = false;
let timerInterval;
let usedIndices = [];
let countdownTimer;
//let lateModeDelay = 1000; // Late Gameモードの遅延時間（ミリ秒）
let delayTime = 0;
var currentScore = 0;
var currentTime = 0;
var currentBackspaceCount = 0;
var currentKeystrokeCount = 0;

// ワードごとの入力時間を保存する配列
let wordTimes = [];  // ワードごとの入力時間を保存


//デバッグ用です
const delayTimeDisplay = document.getElementById("delayTimeDisplay");
// HTML要素への参照を取得
const wordDisplay = document.getElementById("word");
const rubyDisplay = document.createElement("div");
rubyDisplay.className = "ruby";
wordDisplay.parentNode.insertBefore(rubyDisplay, wordDisplay);
const customInput = document.getElementById("customInput");
const inputDisplay = document.getElementById("inputDisplay");
const lateInputDisplay = document.getElementById("lateInputDisplay");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const backspaceDisplay = document.getElementById("backspaceCount");
const keystrokeDisplay = document.getElementById("keystrokeCount"); // キーストロークの表示要素
const startButton = document.getElementById("startButton");
//const lateStartButton = document.getElementById("lateStartButton");
//const restartButton = document.getElementById("restartButton");
const resultDisplay = document.getElementById("result");

// イベントリスナーを追加
startButton.addEventListener("click", () => startGame());
//lateStartButton.addEventListener("click", () => startLateGame());
//lateStartButton.addEventListener("click", () => delayTime = lateModeDelay);
//restartButton.addEventListener("click", () => restartGame());
customInput.addEventListener("input", handleInput);
customInput.addEventListener("keydown", handleKeyDown);

// 初期化時に入力ボックスを非表示にする
customInput.style.display = "none";

// ゲーム開始時の処理
/*
function startGame(delay = 0) {
    if (!isPlaying) {
        delayTime = delay;
        isPlaying = true;
        score = 0;
        time = 0;
        backspaceCount = 0;
        keystrokeCount = 0; // キーストロークのカウントをリセット
        usedIndices = [];
        scoreDisplay.textContent = score;
        timeDisplay.textContent = time;
        backspaceDisplay.textContent = backspaceCount;
        keystrokeDisplay.textContent = keystrokeCount; // キーストロークの表示をリセット
        customInput.value = "";
        customInput.style.display = "none"; // 入力ボックスを非表示
        inputDisplay.textContent = ""; // 入力表示エリアを初期化
        startButton.style.display = "none";
        lateStartButton.style.display = "none";
        restartButton.style.display = "none";
        resultDisplay.style.display = "none";
        setTimeout(() => {
            startCountdown(delayTime);
        }, delay);
    }
}
*/

function startGame(delay = 0) {
    if (!isPlaying) {
        delayTime = delay;
        isPlaying = true;
        score = 0;
        time = 0;
        backspaceCount = 0;
        keystrokeCount = 0; // キーストロークのカウントをリセット
        currentIndex = 0;  // インデックスをリセットして順番通りに表示開始
        usedIndices = [];
        scoreDisplay.textContent = score;
        timeDisplay.textContent = time;
        backspaceDisplay.textContent = backspaceCount;
        keystrokeDisplay.textContent = keystrokeCount; // キーストロークの表示をリセット
        customInput.value = "";
        customInput.style.display = "none"; // 入力ボックスを非表示
        inputDisplay.textContent = ""; // 入力表示エリアを初期化
        startButton.style.display = "none";
        //lateStartButton.style.display = "none";
        //restartButton.style.display = "none";
        resultDisplay.style.display = "none";
        setTimeout(() => {
            startCountdown(delayTime);
        }, delay);
    }
}


// カウントダウンの処理
function startCountdown() {
    let countdown = 3;
    wordDisplay.style.display = "block";
    rubyDisplay.style.display = "block";
    wordDisplay.textContent = `ゲーム開始まで: ${countdown}秒`;
    rubyDisplay.textContent = "";
    countdownTimer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(countdownTimer);
            customInput.style.display = "block";  // 入力ボックスを表示
            customInput.focus();  // カスタム入力ボックスにフォーカスを設定
            timerInterval = setInterval(updateTime, 10);  // 10msごとに時間を更新
            showWord();
        } else {
            wordDisplay.textContent = `ゲーム開始まで: ${countdown}秒`;
            rubyDisplay.textContent = "";
        }
    }, 1000);
}

// 現在表示することわざのインデックスを追跡する変数
let currentIndex = 0;

// ランダムなことわざを表示する
/*
function showWord() {
    inputDisplay.textContent = "";  // 入力された内容を削除

    if (usedIndices.length === input_shortwords.length) {
        usedIndices = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * input_shortwords.length);
    } while (usedIndices.includes(randomIndex));

    usedIndices.push(randomIndex);
    wordDisplay.textContent = display_shortwords[randomIndex];
    rubyDisplay.textContent = input_shortwords[randomIndex];

    // ワードが表示されたタイミングでスタートタイムを記録
    wordTimes.push({
        word: rubyDisplay.textContent,
        startTime: Date.now() ,
        backspaceCount: 0,
        keystrokeCount: 0});
    }
*/
//修正前
/*
function showWord() {
    inputDisplay.textContent = ""; // 入力内容をクリア

    // 全てのことわざを使用済みの場合、ゲームを終了
    if (usedIndices.length === input_shortwords.length) {
        endGame();
        return;
    }

    // ランダムなインデックスを取得し、使用済みでないものを選択
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * input_shortwords.length);
    } while (usedIndices.includes(randomIndex));

    usedIndices.push(randomIndex); // 使用済みとして登録

    // 選択されたことわざを表示
    wordDisplay.textContent = display_shortwords[randomIndex];
    rubyDisplay.textContent = input_shortwords[randomIndex];

    // 単語が表示された時点で時間とカウントをリセット・記録
    wordTimes.push({
        word: input_shortwords[randomIndex],
        startTime: Date.now(),
        backspaceCount: 0,
        keystrokeCount: 0
    });

    console.log(`Selected word: ${display_shortwords[randomIndex]} (index: ${randomIndex})`); // デバッグメッセージ
}*/

// シャッフル関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// シャッフルされたインデックスと遅延時間を管理する配列
let shuffledIndices = [];
let shuffledDelays = [];
/*
function showWord() {
    inputDisplay.textContent = ""; // 入力内容をクリア

    // 全てのことわざを使用済みの場合、ゲームを終了
    if (usedIndices.length >= input_shortwords.length) {
        endGame();
        return;
    }

    // 初回のみインデックスと遅延時間をシャッフル
    if (shuffledIndices.length === 0) {
        shuffledIndices = shuffle([...Array(input_shortwords.length).keys()]); // 0からn-1までの配列をシャッフル
    }
    if (shuffledDelays.length === 0) {
        if (delaytime.length < input_shortwords.length) {
            console.error("Error: delaytime array is shorter than input_shortwords.");
            return;
        }
        shuffledDelays = shuffle([...delaytime]); // 遅延時間をシャッフル
    }

    // シャッフルされたインデックスと遅延時間を順に取得
    const randomIndex = shuffledIndices.pop();
    const randomDelay = shuffledDelays.pop();

    usedIndices.push(randomIndex);

    const currentWord = display_shortwords[randomIndex];
    const currentRuby = input_shortwords[randomIndex];

    wordDisplay.textContent = currentWord;
    rubyDisplay.textContent = currentRuby;

    // 表示順に記録する
    wordTimes.push({
        word_id: randomIndex + 1, // Word_ID
        word: currentRuby,
        startTime: Date.now(),
        backspaceCount: 0,
        keystrokeCount: 0,
        delay: randomDelay || 0 // ランダムに選んだディレイタイムを記録
    });

    console.log(`Selected word: ${currentWord} (index: ${randomIndex}), Delay: ${randomDelay}ms`);
}
*/
function showWord() {
    inputDisplay.textContent = ""; // 入力内容をクリア

    // 全てのことわざを使用済みの場合、ゲームを終了
    if (usedIndices.length >= input_shortwords.length) {
        endGame();
        return;
    }

    // 初回のみインデックスと遅延時間をシャッフル
    if (shuffledIndices.length === 0) {
        shuffledIndices = shuffle([...Array(input_shortwords.length).keys()]); // 0からn-1までの配列をシャッフル
    }
    if (shuffledDelays.length === 0) {
        shuffledDelays = shuffle([...delaytime]); // 遅延時間をシャッフル
    }

    // シャッフルされたインデックスと遅延時間を順に取得
    const randomIndex = shuffledIndices.pop();
    const randomDelay = shuffledDelays.pop();

    usedIndices.push(randomIndex);

    const currentWord = display_shortwords[randomIndex];
    const currentRuby = input_shortwords[randomIndex];

    wordDisplay.textContent = currentWord;
    rubyDisplay.textContent = currentRuby;

    // 表示順に記録する（ランダムインデックスで保存）
    const wordId = randomIndex + 1; // Word_IDの計算
    wordTimes.push({
        word_id: wordId, // Word_IDを記録
        word: currentRuby,
        startTime: Date.now(),
        backspaceCount: 0,
        keystrokeCount: 0,
        delay: randomDelay || 0
    });

    console.log(`Selected word: ${currentWord} (Word_ID: ${wordId}), Delay: ${randomDelay}ms`);
}








// ランダムではなく順番通りにことわざを表示する
/*
function showWord() {
    // 次に表示するインデックスのことわざを取得
    if (currentIndex >= input_shortwords.length) {
        endGame();  // すべてのことわざが表示されたらゲーム終了
        return;
    }

    inputDisplay.textContent = "";  // 入力された内容を削除

    // 現在のことわざのインデックスを使って表示
    const currentWord = display_shortwords[currentIndex];
    const currentRuby = input_shortwords[currentIndex];

    wordDisplay.textContent = currentWord;
    rubyDisplay.textContent = currentRuby;

    // ワードが表示されたタイミングでスタートタイムを記録
    wordTimes.push({ word: currentRuby, startTime: Date.now() });

    // インデックスを進める
    currentIndex++;
}
*/

/*
function showWord() {
    if (currentIndex >= input_shortwords.length) {
        endGame();
        return;
    }

    inputDisplay.textContent = "";

    const currentWord = display_shortwords[currentIndex];
    const currentRuby = input_shortwords[currentIndex];

    wordDisplay.textContent = currentWord;
    rubyDisplay.textContent = currentRuby;

    // ワードが表示されたタイミングでスタートタイムとカウントを記録
    wordTimes.push({
        word: currentRuby,
        startTime: Date.now(),
        backspaceCount: 0,
        keystrokeCount: 0
    });

    currentIndex++;
}
*/



// 時間を更新する
function updateTime() {
    if (isPlaying) {
        time += 10;  // 10msごとに加算

        // 秒単位にフォーマット（小数点以下2桁）
        let displayTime = (time / 1000).toFixed(2);

        timeDisplay.textContent = displayTime;  // 時間を秒単位で表示
    }
}

// 入力の処理
/*function handleInput() {
    const currentWordIndex = display_shortwords.indexOf(wordDisplay.textContent);
    const userInput = customInput.value.trim();
    
    if (userInput === input_shortwords[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = score;
        customInput.value = "";
        inputDisplay.textContent = "";  // 入力された内容を削除

        // 入力完了時間を計測して保存
        const wordStartTime = wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).startTime;
        const inputTime = (Date.now() - wordStartTime) / 1000;  // 入力時間（秒）
        wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).inputTime = inputTime;

        // 次のことわざを表示
        if (score >= 2) {
            endGame();
        } 

        if(inputDisplay.textContent === ""){
            setTimeout(showWord(), delay);  // 次のことわざを表示
            }
        }
        // 入力表示エリアに入力内容を反映
        function inputWordDisplay(){
            inputDisplay.textContent = userInput
        }
        setTimeout(inputWordDisplay, delayTime);

}*/


/*function handleInput() {
    const currentWordIndex = display_shortwords.indexOf(wordDisplay.textContent);
    const userInput = customInput.value.trim();

    // ユーザーの入力が正しい場合
    if (userInput === input_shortwords[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = score;
        customInput.value = "";  // 入力ボックスの内容を削除
        inputDisplay.textContent = "";  // 入力表示エリアを削除

        // 入力完了時間を計測して保存
        const wordStartTime = wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).startTime;
        const inputTime = (Date.now() - wordStartTime) / 1000;  // 入力時間（秒）
        wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).inputTime = inputTime;

        // 次のことわざを表示（遅延を入れて表示）
        if (score >= 6) {
            setTimeout(endGame, delayTime);
        } else {
            // 入力が完了したら一定の遅延後に次のことわざを表示
            setTimeout(showWord, delayTime);  // 次のことわざを表示
        }
    }

    // 入力表示エリアに入力内容を反映
    inputDisplay.textContent = userInput;
}*/


/*function handleInput() {
    const currentWordIndex = display_shortwords.indexOf(wordDisplay.textContent);
    const userInput = customInput.value.trim();

    // 遅延時間を取得
    const delay = delaytime[currentWordIndex];

    // ユーザーの入力が正しい場合
    if (userInput === input_shortwords[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = score;
        customInput.value = "";  // 入力ボックスの内容を削除

        // 入力表示エリアを削除
        inputDisplay.textContent = "";  

        // 入力完了時間を計測して保存
        const wordStartTime = wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).startTime;
        const inputTime = (Date.now() - wordStartTime) / 1000;  // 入力時間（秒）
        wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).inputTime = inputTime;

        // 次のことわざを表示（遅延を入れて表示）
        if (score >= 6) {
            setTimeout(endGame, delay);  // ゲーム終了を遅延
        } else {
            // 入力が完了したら遅延後に次のことわざを表示
            setTimeout(showWord, delay);  
        }
    }

    // ユーザーの入力を遅延して表示
    delayedInputDisplay(userInput, delay);
}*/


/*function handleInput() {
    const currentWordIndex = display_shortwords.indexOf(wordDisplay.textContent);
    const userInput = customInput.value.trim();

    // 遅延時間を取得
    const delay = delaytime[currentWordIndex];

    // 現在の遅延時間を画面に表示
    delayTimeDisplay.textContent = `現在のディレイタイム: ${delay}ms`;

    // ユーザーの入力が正しい場合
    if (userInput === input_shortwords[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = score;
        customInput.value = "";  // 入力ボックスの内容を削除

        // 入力表示エリアを削除
        inputDisplay.textContent = "";  

        // 入力完了時間を計測して保存
        const wordStartTime = wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).startTime;
        const inputTime = (Date.now() - wordStartTime) / 1000;  // 入力時間（秒）
        wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).inputTime = inputTime;

        // 次のことわざを表示（遅延を入れて表示）
        if (score >= 6) {
            setTimeout(endGame, delay);  // ゲーム終了を遅延
        } else {
            // 入力が完了したら遅延後に次のことわざを表示
            setTimeout(showWord, delay);  
        }
    }

    // ユーザーの入力を遅延して表示
    delayedInputDisplay(userInput, delay);
}
*/

// 入力の処理
/*
function handleInput() {
    const currentWordIndex = display_shortwords.indexOf(wordDisplay.textContent);
    const userInput = customInput.value.trim();

    // 遅延時間を取得
    const delay = delaytime[currentWordIndex];

    // 現在の遅延時間を画面に表示
    //delayTimeDisplay.textContent = `現在のディレイタイム: ${delay}ms`;


    // ユーザーの入力が正しい場合
    if (userInput === input_shortwords[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = score;
        customInput.value = "";  // 入力ボックスの内容を削除

        // 入力表示エリアを削除
        inputDisplay.textContent = "";  

        // 入力完了時間を計測して保存
        const wordStartTime = wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).startTime;
        const inputTime = (Date.now() - wordStartTime) / 1000;  // 入力時間（秒）
        wordTimes.find(wt => wt.word === input_shortwords[currentWordIndex]).inputTime = inputTime;

        // 次のことわざを表示（遅延無しで表示）
        if (score >= 2) {
            setTimeout(endGame, 0);  // ゲーム終了を即時に実行
        } else {
            // 入力が正しく完了した場合、遅延無しで次のことわざを表示
            setTimeout(() => {
                showWord();  // 次のことわざを表示
            }, 0);  // 遅延を0に設定して即座に表示
        }
    }

    // ユーザーの入力を遅延して表示
    delayedInputDisplay(userInput, delay);
}
*/
//修正前
/*
function handleInput() {
    const currentWordIndex = display_shortwords.indexOf(wordDisplay.textContent);
    const userInput = customInput.value.trim();

    // 遅延時間を取得
    const delay = delaytime[currentWordIndex];

    // 現在の遅延時間を画面に表示
    delayTimeDisplay.textContent = `現在のディレイタイム: ${delay}ms`;

    if (userInput === input_shortwords[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = score;
        customInput.value = "";
        //customInput.blur();  // 一旦フォーカスを外す
        //setTimeout(() => customInput.focus(), 10);  // 少し遅れてフォーカスを戻す
        inputDisplay.textContent = "";

        const wordStartTime = wordTimes[currentWordIndex].startTime;
        const inputTime = (Date.now() - wordStartTime) / 1000;

        // 入力完了時のデータを保存
        wordTimes[currentWordIndex].delay = delay;
        wordTimes[currentWordIndex].inputTime = inputTime;
        wordTimes[currentWordIndex].backspaceCount = backspaceCount;
        wordTimes[currentWordIndex].keystrokeCount = keystrokeCount;

        backspaceCount = 0;
        keystrokeCount = 0;

        if (score >= 2) {
            setTimeout(endGame, 0);  // ゲーム終了を即時に実行
        } else {
            // 入力が正しく完了した場合、遅延無しで次のことわざを表示
            setTimeout(() => {
                showWord();  // 次のことわざを表示
            }, 10);  // 遅延を0に設定して即座に表示
        }
    }

    //inputDisplay.textContent = userInput;
    // ユーザーの入力を遅延して表示
    delayedInputDisplay(userInput, delay);
}*/
function handleInput() {
    const userInput = customInput.value.trim();
    const currentWordEntry = wordTimes[wordTimes.length - 1]; // 直近の単語データを取得

    // デバッグ: 現在の単語エントリを確認
    console.log(`Current word entry:`, currentWordEntry);

    // `currentWordEntry`が存在しない場合はエラー
    if (!currentWordEntry) {
        console.error("No current word entry in wordTimes!");
        return;
    }

    // ユーザーの入力が正しい場合
    if (userInput === currentWordEntry.word) {
        score++;
        scoreDisplay.textContent = score;
        customInput.value = ""; // 入力ボックスをクリア
        inputDisplay.textContent = ""; // 表示エリアをクリア

        // 入力完了時間を計算して保存
        const inputTime = (Date.now() - currentWordEntry.startTime) / 1000; // 秒単位
        currentWordEntry.inputTime = inputTime;

        // バックスペースとキーストロークのカウントを保存しリセット
        currentWordEntry.backspaceCount = backspaceCount;
        currentWordEntry.keystrokeCount = keystrokeCount;
        backspaceCount = 0;
        keystrokeCount = 0;

        if (score >= 45) {
            setTimeout(endGame, 0);  // ゲーム終了を即時に実行
        } else {
            // 入力が正しく完了した場合、遅延無しで次のことわざを表示
            setTimeout(() => {
                showWord();  // 次のことわざを表示
            }, 0);  // 遅延を0に設定して即座に表示
        }
    }

    // ユーザーの入力を遅延して表示
    delayedInputDisplay(userInput, currentWordEntry.delay || 0);

    // デバッグ用
    console.log(`User input: "${userInput}", Expected: "${currentWordEntry.word}"`);
}









// ユーザーの入力を遅延して表示する関数
function delayedInputDisplay(userInput, delay) {
    setTimeout(() => {
        inputDisplay.textContent = userInput;  // 遅延後に入力を表示
    }, delay);
}



// バックスペースキーの処理とキーストロークのカウント
/*
function handleKeyDown(event) {
    if (isPlaying) {  // ゲーム中のみカウントする
       
        keystrokeCount++;
        keystrokeDisplay.textContent = keystrokeCount; // キーストロークの表示を更新

        if (event.key === "Backspace") {
            backspaceCount++;
            backspaceDisplay.textContent = backspaceCount;
        }
    }
}
*/
function handleKeyDown(event) {
    if (isPlaying) {
        keystrokeCount++;
        keystrokeDisplay.textContent = keystrokeCount;

        if (event.key === "Backspace") {
            backspaceCount++;
            backspaceDisplay.textContent = backspaceCount;
        }
    }
}


// ゲーム終了時の処理
/*function endGame() {
    currentScore = score;
    currentTime = time;
    currentBackspaceCount = backspaceCount;
    currentKeystrokeCount = keystrokeCount;

    clearInterval(timerInterval);  // タイマーを停止
    isPlaying = false;

    wordDisplay.style.display = "none"; // ゲーム終了時にことわざを非表示
    rubyDisplay.style.display = "none"; // ゲーム終了時に読み仮名を非表示
    resultDisplay.textContent = "終了！ご協力ありがとうございます！お疲れ様でした！";
    resultDisplay.style.display = "block";

    customInput.style.left = "-9999px"; // ゲーム終了時に入力ボックスを画面外に移動
    startButton.style.display = "none";  // ゲーム終了時にスタートボタンを非表示
    customInput.style.display = "none"; // ゲーム終了時に入力ボックスを無効化
    inputDisplay.textContent = ""; // 入力表示エリアを初期化
    //lateStartButton.style.display = "none"; //遅延モードの開始ボタン非表示

    // CSVをダウンロード
    downloadCSV(currentScore, currentTime, currentBackspaceCount, currentKeystrokeCount, wordTimes);
}*/
function endGame() {
    currentScore = score;
    currentTime = time;
    currentBackspaceCount = backspaceCount;
    currentKeystrokeCount = keystrokeCount;

    clearInterval(timerInterval); // タイマーを停止
    isPlaying = false;

    wordDisplay.style.display = "none"; // ゲーム終了時にことわざを非表示
    rubyDisplay.style.display = "none"; // ゲーム終了時に読み仮名を非表示
    resultDisplay.textContent = "終了！ご協力ありがとうございます！お疲れ様でした！";
    resultDisplay.style.display = "block";

    customInput.style.left = "-9999px"; // ゲーム終了時に入力ボックスを画面外に移動
    startButton.style.display = "none";  // ゲーム終了時にスタートボタンを非表示
    customInput.style.display = "none"; // ゲーム終了時に入力ボックスを無効化
    inputDisplay.textContent = ""; // 入力表示エリアを初期化

    // CSVをダウンロード
    downloadCSV(wordTimes);
}


// CSVダウンロード用の関数
/*
function downloadCSV(score, time, backspaceCount, keystrokeCount, wordTimes) {
    const headers = ["Score", "Time(s)", "Backspace Count", "Keystroke Count", "Word", "Input Time(s)", "Delay Time(ms)"];
    let rows = [[score, (time / 1000).toFixed(2), backspaceCount, keystrokeCount]];  // ゲーム全体の結果
    wordTimes.forEach(wt => {
        rows.push([score, (time / 1000).toFixed(2), backspaceCount, keystrokeCount, wt.word, wt.inputTime ? wt.inputTime.toFixed(2) : '']);
    });

    let csvContent = headers.join(",") + "\n";
    rows.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "game_results.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
    */
   //修正前
   /*
function downloadCSV(score, time, backspaceCount, keystrokeCount, wordTimes) {
    const headers = ["Word", "Input Time(s)", "Backspace Count", "Keystroke Count","Delay Time(ms)"];
    let rows = wordTimes.map(wt => [
        wt.word,
        wt.inputTime ? wt.inputTime.toFixed(2) : '',
        wt.backspaceCount,
        wt.keystrokeCount,
        wt.delay
    ]);

    // バックスペース数とキーストローク数の合計を計算
    const totalBackspaceCount = wordTimes.reduce((sum, wt) => sum + wt.backspaceCount, 0);
    const totalKeystrokeCount = wordTimes.reduce((sum, wt) => sum + wt.keystrokeCount, 0);
    const totalInputTime = wordTimes.reduce((sum, wt) => sum + wt.inputTime, 0);

    // 合計をCSVの末尾に追加
    rows.push(["TOTAL", totalInputTime, totalBackspaceCount, totalKeystrokeCount]);

    let csvContent = headers.join(",") + "\n";
    rows.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "game_results.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}*/
function downloadCSV(wordTimes) {
    // `Input Time(s)`の合計を計算
    const totalInputTime = wordTimes.reduce((sum, wt) => sum + (wt.inputTime || 0), 0).toFixed(2);

    // CSVヘッダーを修正
    const headers = ["Word_ID", "Personal_ID", "Input Time(s)", "TotalTime(s)", "Backspace Count", "Keystroke Count", "Delay Time(ms)"];

    // 各行を作成
    let rows = wordTimes.map(wt => [
        wt.word_id, // Word_ID
        "", // Personal_IDは空欄
        wt.inputTime ? wt.inputTime.toFixed(2) : '', // Input Time(s)
        totalInputTime, // TotalTime(s)（全行共通）
        wt.backspaceCount || 0, // バックスペースカウント
        wt.keystrokeCount || 0, // キーストロークカウント
        wt.delay || 0 // ディレイタイム
    ]);

    // CSV内容を生成
    let csvContent = headers.join(",") + "\n";
    rows.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    // CSVファイルとしてダウンロード
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "game_results.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
