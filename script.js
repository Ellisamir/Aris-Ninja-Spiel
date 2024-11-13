const gameText = document.getElementById('game');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');
const option3Button = document.getElementById('option3');

let currentScene = 0;

function startGame() {
  currentScene = 0;
  showScene();
}

function showScene() {
  switch (currentScene) {
    case 0:
      gameText.innerHTML = `
        Du bist ein mutiger Ninja mit magischen Fähigkeiten. Heute ist ein besonderer Tag im Dorf der Ninjas.
        Was möchtest du tun?
      `;
      option1Button.innerText = 'Zum Trainingsplatz gehen ⚔️';
      option2Button.innerText = 'Mit Freunden spielen 🤸';
      option3Button.innerText = 'Den Wald erkunden 🌳';
      option1Button.onclick = () => {
        currentScene = 1;
        showScene();
      };
      option2Button.onclick = () => {
        currentScene = 2;
        showScene();
      };
      option3Button.onclick = () => {
        currentScene = 3;
        showScene();
      };
      break;
    case 1:
      gameText.innerHTML = `
        Auf dem Trainingsplatz triffst du Meister Kano. Er bietet dir eine neue Technik an, aber nur, wenn du ehrlich zu ihm bist.
        Wie reagierst du?
      `;
      option1Button.innerText = 'Die Wahrheit sagen 🗣️';
      option2Button.innerText = 'Etwas verschweigen 🙊';
      option3Button.innerText = 'Weglaufen 🏃';
      option1Button.onclick = () => {
        currentScene = 4;
        showScene();
      };
      option2Button.onclick = () => {
        currentScene = 5;
        showScene();
      };
      option3Button.onclick = () => {
        currentScene = 6;
        showScene();
      };
      break;
    case 2:
      gameText.innerHTML = `
        Deine Freunde möchten ein Abenteuer erleben, aber sie sind sich nicht einig, wohin sie gehen sollen.
        Was schlägst du vor?
      `;
      option1Button.innerText = 'Zum See gehen 🚣';
      option2Button.innerText = 'Gemeinsam entscheiden 🤝';
      option3Button.innerText = 'Alleine losgehen 🚶';
      option1Button.onclick = () => {
        currentScene = 7;
        showScene();
      };
      option2Button.onclick = () => {
        currentScene = 8;
        showScene();
      };
      option3Button.onclick = () => {
        currentScene = 9;
        showScene();
      };
      break;
    case 3:
      gameText.innerHTML = `
        Im Wald begegnest du einem sprechenden Tier, das Hilfe braucht.
        Was tust du?
      `;
      option1Button.innerText = 'Helfen 🦊';
      option2Button.innerText = 'Ignorieren 🙈';
      option3Button.innerText = 'Nach Hilfe rufen 📣';
      option1Button.onclick = () => {
        currentScene = 10;
        showScene();
      };
      option2Button.onclick = () => {
        currentScene = 11;
        showScene();
      };
      option3Button.onclick = () => {
        currentScene = 12;
        showScene();
      };
      break;
    // Weitere Szenen hier hinzufügen...
    case 4:
      gameText.innerHTML = `
        Meister Kano lächelt und lehrt dich die geheime Technik des Feuerschwerts! 🔥🗡️
        Du hast durch Ehrlichkeit gewonnen!
      `;
      endGame();
      break;
    case 5:
      gameText.innerHTML = `
        Meister Kano bemerkt deine Unehrlichkeit und entscheidet, dich nicht zu unterrichten.
        Vielleicht beim nächsten Mal.
      `;
      endGame();
      break;
    case 6:
      gameText.innerHTML = `
        Du rennst weg und stolperst über einen Stein. Aua!
        Nächstes Mal besser aufpassen.
      `;
      endGame();
      break;
    case 7:
      gameText.innerHTML = `
        Am See habt ihr viel Spaß und findet einen verborgenen Schatz! 💎
        Gemeinsam macht alles mehr Spaß!
      `;
      endGame();
      break;
    case 8:
      gameText.innerHTML = `
        Ihr entscheidet gemeinsam und stärkt eure Freundschaft. 🤗
        Zusammenarbeit ist wichtig!
      `;
      endGame();
      break;
    case 9:
      gameText.innerHTML = `
        Alleine fühlst du dich unsicher und gehst zurück. Beim nächsten Mal bist du lieber nicht alleine.
      `;
      endGame();
      break;
    case 10:
      gameText.innerHTML = `
        Das Tier bedankt sich und schenkt dir einen magischen Stein. 🌟
        Helfen lohnt sich immer!
      `;
      endGame();
      break;
    case 11:
      gameText.innerHTML = `
        Das Tier ist traurig und zieht davon. Eine Chance vertan.
      `;
      endGame();
      break;
    case 12:
      gameText.innerHTML = `
        Deine Freunde kommen und gemeinsam helft ihr dem Tier. Teamarbeit zahlt sich aus!
      `;
      endGame();
      break;
    default:
      gameText.innerHTML = 'Das Abenteuer ist hier zu Ende. Möchtest du noch einmal spielen?';
      endGame();
      break;
  }
}

function endGame() {
  option1Button.innerText = 'Nochmal spielen 🔄';
  option2Button.classList.add('hidden');
  option3Button.classList.add('hidden');
  option1Button.onclick = () => {
    option2Button.classList.remove('hidden');
    option3Button.classList.remove('hidden');
    startGame();
  };
}

startGame();
