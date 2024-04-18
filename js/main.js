let sounds = [];
let buttonNames = [];

async function fetchData() {
    try {
        const res = await fetch("sounds/list.txt");
        const text = await res.text();
        sounds = text.split('\n');

        const resName = await fetch("sounds/name.txt");
        const textName = await resName.text();
        buttonNames = textName.split('\n');

        const name = ['你在幹嘛', '你腦子壞掉了', '你嘴不要那麼賤', '你講那種話可以信嗎', '寒暑假交朋友一起來'];

        for (let i = 0; i < sounds.length-1; i++) {
            const audio = document.createElement('audio')
            audio.id = sounds[i];
            audio.src = `sounds/${sounds[i]}.mp3`;
            document.getElementById('audio').appendChild(audio);

            const btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = buttonNames[i];
            document.getElementById('buttons').appendChild(btn);
            btn.addEventListener('click', () => {
                document.getElementById(sounds[i]).load();
                document.getElementById(sounds[i]).play();
            })
        }
    } catch (e) {
        console.error(e);
    }
}

fetchData();
