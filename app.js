const shapes = [
  { word: "rectangle", ru: "прямоугольник", image: "rectangle.webp", sides: "4 sides", clueRu: "4 стороны", sentence: "The red ___ is long." },
  { word: "triangle", ru: "треугольник", image: "triangle.webp", sides: "3 sides", clueRu: "3 стороны", sentence: "The blue ___ has three sides." },
  { word: "square", ru: "квадрат", image: "square.webp", sides: "4 equal sides", clueRu: "4 равные стороны", sentence: "The green ___ is happy." },
  { word: "circle", ru: "круг", image: "circle.webp", sides: "0 sides", clueRu: "нет углов", sentence: "The pink ___ is round." },
  { word: "oval", ru: "овал", image: "oval.webp", sides: "round and long", clueRu: "круглый и вытянутый", sentence: "The green ___ looks like an egg." },
  { word: "star", ru: "звезда", image: "star.webp", sides: "5 points", clueRu: "5 лучиков", sentence: "The yellow ___ shines." },
  { word: "dot", ru: "точка", image: "dot.webp", sides: "tiny circle", clueRu: "маленький круг", sentence: "The little ___ is small." },
  { word: "cross", ru: "крестик", image: "cross.webp", sides: "plus shape", clueRu: "похожа на плюс", sentence: "The red ___ smiles." },
  { word: "heart", ru: "сердце", image: "heart.webp", sides: "love shape", clueRu: "форма любви", sentence: "The red ___ says love." },
  { word: "hexagon", ru: "шестиугольник", image: "hexagon.webp", sides: "6 sides", clueRu: "6 сторон", sentence: "The yellow ___ has six sides." },
  { word: "octagon", ru: "восьмиугольник", image: "octagon.webp", sides: "8 sides", clueRu: "8 сторон", sentence: "The purple ___ has eight sides." },
  { word: "rhombus", ru: "ромб", image: "rhombus.webp", sides: "diamond shape", clueRu: "похож на алмаз", sentence: "The blue ___ is like a kite." }
];

const antonymPairs = [
  {
    id: "big-small",
    title: "big / small",
    ru: "большой / маленький",
    image: "big-small.webp",
    imageWords: "big-small-words.webp",
    alt: "Большое красное яблоко и маленькое зелёное яблоко",
    words: [
      { word: "big", ru: "большой", opposite: "small" },
      { word: "small", ru: "маленький", opposite: "big" }
    ]
  },
  {
    id: "long-short",
    title: "long / short",
    ru: "длинный / короткий",
    image: "long-short.webp",
    imageWords: "long-short-words.webp",
    alt: "Длинный красный карандаш и короткий зелёный карандаш",
    words: [
      { word: "long", ru: "длинный", opposite: "short" },
      { word: "short", ru: "короткий", opposite: "long" }
    ]
  },
  {
    id: "tall-low",
    title: "tall / low",
    ru: "высокий / низкий",
    image: "tall-low.webp",
    imageWords: "tall-low-words.webp",
    alt: "Высокое дерево и низкое дерево",
    words: [
      { word: "tall", ru: "высокий", opposite: "low" },
      { word: "low", ru: "низкий", opposite: "tall" }
    ]
  },
  {
    id: "soft-hard",
    title: "soft / hard",
    ru: "мягкий / твёрдый",
    image: "soft-hard.webp",
    imageWords: "soft-hard-words.webp",
    alt: "Мягкий розовый стульчик и твёрдый деревянный стул",
    words: [
      { word: "soft", ru: "мягкий", opposite: "hard" },
      { word: "hard", ru: "твёрдый", opposite: "soft" }
    ]
  },
  {
    id: "open-closed",
    title: "open / closed",
    ru: "открытый / закрытый",
    image: "open-closed.webp",
    imageWords: "open-closed-words.webp",
    alt: "Открытый сундук и закрытый сундук",
    words: [
      { word: "open", ru: "открытый", opposite: "closed" },
      { word: "closed", ru: "закрытый", opposite: "open" }
    ]
  },
  {
    id: "light-dark",
    title: "light / dark",
    ru: "светлый / тёмный",
    image: "light-dark.webp",
    imageWords: "light-dark-words.webp",
    alt: "Светлая лампочка и тёмная лампочка",
    words: [
      { word: "light", ru: "светлый", opposite: "dark" },
      { word: "dark", ru: "тёмный", opposite: "light" }
    ]
  }
];

const antonymWords = antonymPairs.flatMap((pair) => pair.words.map((word) => ({
  ...word,
  pairId: pair.id,
  pairTitle: pair.title,
  pairRu: pair.ru,
  image: pair.image,
  imageWords: pair.imageWords,
  alt: pair.alt
})));

const livingRoomItems = [
  { word: "sofa", ru: "диван", image: "living-room/sofa.webp", imageWords: "living-room/sofa-words.webp", clueRu: "мягкое место для всей семьи", sentence: "The pink ___ is near the window." },
  { word: "vase", ru: "ваза", image: "living-room/vase.webp", imageWords: "living-room/vase-words.webp", clueRu: "в ней стоят цветы", sentence: "The blue ___ is on the little table." },
  { word: "wall", ru: "стена", image: "living-room/wall.webp", imageWords: "living-room/wall-words.webp", clueRu: "на ней висят часы и картина", sentence: "The striped ___ is behind the sofa." },
  { word: "plant", ru: "растение", image: "living-room/plant.webp", imageWords: "living-room/plant-words.webp", clueRu: "зелёное и растёт в горшке", sentence: "The green ___ is in the corner." },
  { word: "door", ru: "дверь", image: "living-room/door.webp", imageWords: "living-room/door-words.webp", clueRu: "через неё входят в комнату", sentence: "The brown ___ is closed." },
  { word: "clock", ru: "часы", image: "living-room/clock.webp", imageWords: "living-room/clock-words.webp", clueRu: "показывают время", sentence: "The round ___ is on the wall." },
  { word: "picture", ru: "картина", image: "living-room/picture.webp", imageWords: "living-room/picture-words.webp", clueRu: "висит в рамке", sentence: "The bright ___ is above the door." },
  { word: "floor", ru: "пол", image: "living-room/floor.webp", imageWords: "living-room/floor-words.webp", clueRu: "по нему мы ходим", sentence: "The wooden ___ is under the chair." },
  { word: "curtain", ru: "штора", image: "living-room/curtain.webp", imageWords: "living-room/curtain-words.webp", clueRu: "висит рядом с окном", sentence: "The blue ___ is by the window." },
  { word: "window", ru: "окно", image: "living-room/window.webp", imageWords: "living-room/window-words.webp", clueRu: "через него видно улицу", sentence: "The white ___ lets in light." },
  { word: "chandelier", ru: "люстра", image: "living-room/chandelier.webp", imageWords: "living-room/chandelier-words.webp", clueRu: "лампа висит на потолке", sentence: "The yellow ___ is above the room." },
  { word: "armchair", ru: "кресло", image: "living-room/armchair.webp", imageWords: "living-room/armchair-words.webp", clueRu: "мягкое место для одного человека", sentence: "The pink ___ is next to the sofa." }
];

const parkItems = [
  { word: "children", ru: "дети", image: "park/children.webp", imageWords: "park/children-words.webp", clueRu: "играют вместе в парке", sentence: "The happy ___ are playing in the park." },
  { word: "boy", ru: "мальчик", image: "park/boy.webp", imageWords: "park/boy-words.webp", clueRu: "мальчик в красной футболке", sentence: "The smiling ___ is near the flowers." },
  { word: "skateboard", ru: "скейтборд", image: "park/skateboard.webp", imageWords: "park/skateboard-words.webp", clueRu: "доска на колёсиках", sentence: "The black ___ is on the path." },
  { word: "scooter", ru: "самокат", image: "park/scooter.webp", imageWords: "park/scooter-words.webp", clueRu: "на нём катаются стоя", sentence: "The blue ___ is near the slide." },
  { word: "roller blades", ru: "ролики", image: "park/roller-blades.webp", imageWords: "park/roller-blades-words.webp", clueRu: "ботинки с колёсиками", sentence: "The pink ___ are on the path." },
  { word: "girl", ru: "девочка", image: "park/girl.webp", imageWords: "park/girl-words.webp", clueRu: "девочка машет рукой", sentence: "The cheerful ___ says hello." },
  { word: "kite", ru: "воздушный змей", image: "park/kite.webp", imageWords: "park/kite-words.webp", clueRu: "летит высоко в небе", sentence: "The bright ___ flies in the sky." },
  { word: "tree", ru: "дерево", image: "park/tree.webp", imageWords: "park/tree-words.webp", clueRu: "высокое и зелёное", sentence: "The big ___ gives shade." },
  { word: "ice cream", ru: "мороженое", image: "park/ice-cream.webp", imageWords: "park/ice-cream-words.webp", clueRu: "сладкое и холодное", sentence: "The sweet ___ is very cold." },
  { word: "pony", ru: "пони", image: "park/pony.webp", imageWords: "park/pony-words.webp", clueRu: "маленькая лошадка", sentence: "The brown ___ walks in the park." },
  { word: "balloon", ru: "шарик", image: "park/balloon.webp", imageWords: "park/balloon-words.webp", clueRu: "красный и летит вверх", sentence: "The red ___ floats in the air." },
  { word: "pigeon", ru: "голубь", image: "park/pigeon.webp", imageWords: "park/pigeon-words.webp", clueRu: "птица на дорожке", sentence: "The grey ___ walks on the path." }
];

const bedroomItems = [
  { word: "bed", ru: "кровать", image: "bedroom/bed.webp", imageWords: "bedroom/bed-words.webp", clueRu: "на ней спят", sentence: "The soft ___ is in the bedroom." },
  { word: "desk", ru: "письменный стол", image: "bedroom/desk.webp", imageWords: "bedroom/desk-words.webp", clueRu: "за ним пишут и рисуют", sentence: "The brown ___ is near the chair." },
  { word: "chair", ru: "стул", image: "bedroom/chair.webp", imageWords: "bedroom/chair-words.webp", clueRu: "на нём сидят", sentence: "The wooden ___ is by the desk." },
  { word: "lamp", ru: "лампа", image: "bedroom/lamp.webp", imageWords: "bedroom/lamp-words.webp", clueRu: "даёт свет", sentence: "The green ___ is on the desk." },
  { word: "map", ru: "карта", image: "bedroom/map.webp", imageWords: "bedroom/map-words.webp", clueRu: "показывает страны и моря", sentence: "The bright ___ is on the wall." },
  { word: "carpet", ru: "ковёр", image: "bedroom/carpet.webp", imageWords: "bedroom/carpet-words.webp", clueRu: "лежит на полу", sentence: "The blue ___ is under the bed." },
  { word: "duvet", ru: "одеяло", image: "bedroom/duvet.webp", imageWords: "bedroom/duvet-words.webp", clueRu: "тёплое и мягкое", sentence: "The white ___ is on the bed." },
  { word: "slippers", ru: "тапочки", image: "bedroom/slippers.webp", imageWords: "bedroom/slippers-words.webp", clueRu: "обувь для дома", sentence: "The red ___ are near the bed." },
  { word: "bookcase", ru: "книжный шкаф", image: "bedroom/bookcase.webp", imageWords: "bedroom/bookcase-words.webp", clueRu: "там стоят книги", sentence: "The tall ___ is full of books." },
  { word: "pillow", ru: "подушка", image: "bedroom/pillow.webp", imageWords: "bedroom/pillow-words.webp", clueRu: "лежит под головой", sentence: "The blue ___ is on the bed." },
  { word: "drawer", ru: "ящик", image: "bedroom/drawer.webp", imageWords: "bedroom/drawer-words.webp", clueRu: "выдвижной ящик", sentence: "The brown ___ is next to the wardrobe." },
  { word: "wardrobe", ru: "шкаф", image: "bedroom/wardrobe.webp", imageWords: "bedroom/wardrobe-words.webp", clueRu: "в нём хранится одежда", sentence: "The tall ___ keeps clothes." }
];

const townItems = [
  { word: "school", ru: "школа", image: "town/school.webp", imageWords: "town/school-words.webp", clueRu: "там учатся дети", sentence: "The blue ___ has a clock." },
  { word: "shop", ru: "магазин", image: "town/shop.webp", imageWords: "town/shop-words.webp", clueRu: "там покупают вещи", sentence: "The pink ___ is open today." },
  { word: "road", ru: "дорога", image: "town/road.webp", imageWords: "town/road-words.webp", clueRu: "по ней едут машины", sentence: "The long ___ goes through town." },
  { word: "hospital", ru: "больница", image: "town/hospital.webp", imageWords: "town/hospital-words.webp", clueRu: "там помогают больным", sentence: "The white ___ has a red cross." },
  { word: "bus stop", ru: "автобусная остановка", image: "town/bus-stop.webp", imageWords: "town/bus-stop-words.webp", clueRu: "там ждут автобус", sentence: "The blue ___ is by the road." },
  { word: "monument", ru: "памятник", image: "town/monument.webp", imageWords: "town/monument-words.webp", clueRu: "статуя на площади", sentence: "The tall ___ is in the square." },
  { word: "cinema", ru: "кинотеатр", image: "town/cinema.webp", imageWords: "town/cinema-words.webp", clueRu: "там смотрят фильмы", sentence: "The ___ shows a new movie." },
  { word: "traffic light", ru: "светофор", image: "town/traffic-light.webp", imageWords: "town/traffic-light-words.webp", clueRu: "красный, жёлтый и зелёный", sentence: "The ___ is near the crosswalk." },
  { word: "house", ru: "дом", image: "town/house.webp", imageWords: "town/house-words.webp", clueRu: "там живёт семья", sentence: "The yellow ___ has a red roof." },
  { word: "garage", ru: "гараж", image: "town/garage.webp", imageWords: "town/garage-words.webp", clueRu: "там стоит машина", sentence: "The ___ is next to the house." },
  { word: "flowerbed", ru: "клумба", image: "town/flowerbed.webp", imageWords: "town/flowerbed-words.webp", clueRu: "там растут цветы", sentence: "The bright ___ is full of flowers." },
  { word: "crosswalk", ru: "пешеходный переход", image: "town/crosswalk.webp", imageWords: "town/crosswalk-words.webp", clueRu: "по нему переходят дорогу", sentence: "The white ___ crosses the road." }
];

const materialsItems = [
  { word: "gold", ru: "золото", image: "materials/gold.webp", imageWords: "materials/gold-words.webp", clueRu: "жёлтый блестящий металл", sentence: "The ring is made of ___." },
  { word: "wood", ru: "дерево", image: "materials/wood.webp", imageWords: "materials/wood-words.webp", clueRu: "материал из дерева", sentence: "The board is made of ___." },
  { word: "plastic", ru: "пластик", image: "materials/plastic.webp", imageWords: "materials/plastic-words.webp", clueRu: "лёгкий искусственный материал", sentence: "The bucket is made of ___." },
  { word: "paper", ru: "бумага", image: "materials/paper.webp", imageWords: "materials/paper-words.webp", clueRu: "из неё делают листы и самолётики", sentence: "The plane is made of ___." },
  { word: "glass", ru: "стекло", image: "materials/glass.webp", imageWords: "materials/glass-words.webp", clueRu: "прозрачный хрупкий материал", sentence: "The cup is made of ___." },
  { word: "wool", ru: "шерсть", image: "materials/wool.webp", imageWords: "materials/wool-words.webp", clueRu: "мягкая и тёплая нить", sentence: "The mittens are made of ___." },
  { word: "stone", ru: "камень", image: "materials/stone.webp", imageWords: "materials/stone-words.webp", clueRu: "твёрдый природный материал", sentence: "The blue rock is ___." },
  { word: "steel", ru: "сталь", image: "materials/steel.webp", imageWords: "materials/steel-words.webp", clueRu: "очень крепкий металл", sentence: "The knife is made of ___." },
  { word: "ceramic", ru: "керамика", image: "materials/ceramic.webp", imageWords: "materials/ceramic-words.webp", clueRu: "из неё делают посуду и вазы", sentence: "The vase is made of ___." },
  { word: "rubber", ru: "резина", image: "materials/rubber.webp", imageWords: "materials/rubber-words.webp", clueRu: "гибкий материал для шин", sentence: "The tire is made of ___." },
  { word: "cotton", ru: "хлопок", image: "materials/cotton.webp", imageWords: "materials/cotton-words.webp", clueRu: "мягкая ткань для футболки", sentence: "The shirt is made of ___." },
  { word: "leather", ru: "кожа", image: "materials/leather.webp", imageWords: "materials/leather-words.webp", clueRu: "из неё делают ботинки", sentence: "The boots are made of ___." }
];

const wordTranslations = new Map([
  ...shapes.map((shape) => [shape.word, shape.ru]),
  ...antonymWords.map((item) => [item.word, item.ru]),
  ...livingRoomItems.map((item) => [item.word, item.ru]),
  ...parkItems.map((item) => [item.word, item.ru]),
  ...bedroomItems.map((item) => [item.word, item.ru]),
  ...townItems.map((item) => [item.word, item.ru]),
  ...materialsItems.map((item) => [item.word, item.ru])
]);

const audioCache = new Map();
let currentAudio;
let englishVoices = [];
const preferredVoiceName = "Google UK English Female";
const autoAdvanceDelay = 520;
const roundAnnouncementDelay = 180;
const gameHoverQuietAfterPrompt = 1200;
const exerciseHeartGoal = 5;

function readSetting(key, fallback = "") {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeSetting(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Local files can run in stricter browser modes; the lesson still works without saved settings.
  }
}

function readBooleanSetting(key, fallback) {
  const saved = readSetting(key, "");
  if (saved === "true") return true;
  if (saved === "false") return false;
  return fallback;
}

let soundEnabled = readBooleanSetting("shapeLessonSoundEnabled", true);
let translationEnabled = readBooleanSetting("shapeLessonTranslationEnabled", true);
let lessonMode = readSetting("shapeLessonMode", "shapes");
let heartCount = 0;
const gameResetHandlers = [];

function refreshVoices() {
  if (!("speechSynthesis" in window)) return [];
  englishVoices = window.speechSynthesis.getVoices();
  return englishVoices;
}

function getPreferredVoice() {
  const voices = refreshVoices();
  return voices.find((voice) => voice.name === preferredVoiceName)
    || voices.find((voice) => voice.name.toLowerCase().includes("google uk english female"))
    || voices.find((voice) => voice.lang === "en-GB" && voice.name.toLowerCase().includes("google"))
    || voices.find((voice) => voice.lang === "en-GB")
    || voices.find((voice) => voice.lang.startsWith("en"));
}

if ("speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
  refreshVoices();
  window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getAudio(text) {
  const key = slug(text);
  if (!audioCache.has(key)) {
    const audio = new Audio(`assets/audio/${key}.wav`);
    audio.preload = "auto";
    audioCache.set(key, audio);
  }
  return audioCache.get(key);
}

function speak(text) {
  if (!text || !soundEnabled) return;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if ("speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getPreferredVoice();
    utterance.lang = voice?.lang || "en-GB";
    utterance.rate = 0.82;
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
    return;
  }

  const audio = getAudio(text);
  currentAudio = audio;
  audio.currentTime = 0;
  const playback = audio.play();
  if (playback) {
    playback.catch(() => {});
  }
}

function speakOnHover(text) {
  speak(text);
}

function speakAntonymPairOnHover(pair) {
  speakAntonymPair(pair);
}

function muteGameHover(state, duration = gameHoverQuietAfterPrompt) {
  if (!state) return;
  state.hoverMutedUntil = Math.max(state.hoverMutedUntil || 0, Date.now() + duration);
}

function speakGameHover(state, speakAction) {
  if (state && Date.now() < (state.hoverMutedUntil || 0)) return;
  if (typeof speakAction === "function") {
    speakAction();
    return;
  }
  speakOnHover(speakAction);
}

function scheduleGamePromptSpeech(state, text) {
  if (!state) return;
  clearTimeout(state.speechTimer);
  muteGameHover(state, roundAnnouncementDelay + gameHoverQuietAfterPrompt);
  state.speechTimer = setTimeout(() => {
    speak(text);
    muteGameHover(state);
  }, roundAnnouncementDelay);
}

function updateProgressDisplay() {
  const current = document.querySelector("[data-progress-current]");
  if (!current) return;

  current.textContent = heartCount;
}

function awardProgress() {
  heartCount += 1;
  updateProgressDisplay();
}

function resetRoundMistakes(state) {
  if (state) state.mistakes = 0;
}

function markWrongAttempt(state) {
  if (state) state.mistakes = (state.mistakes || 0) + 1;
}

function shouldAwardGlobalHeart(state) {
  return !state || (state.mistakes || 0) === 0;
}

function scoreRuleNote(awardGlobal) {
  return awardGlobal ? "" : " В общий зачёт — только с первой попытки.";
}

function isElementVisible(element) {
  return Boolean(element && !element.hidden && element.offsetParent !== null);
}

let activeSpeakerHint = null;

function resetTargetHistory(state) {
  if (state) state.usedTargets = [];
}

function pickUnusedTarget(state, items, getKey = (item) => item.word) {
  if (!state.usedTargets) state.usedTargets = [];
  const usedTargets = new Set(state.usedTargets);
  let pool = items.filter((item) => !usedTargets.has(getKey(item)));

  if (!pool.length) {
    state.usedTargets = [];
    pool = items;
  }

  const target = shuffle(pool)[0];
  state.usedTargets.push(getKey(target));
  return target;
}

function taskHeartProgressMarkup() {
  return `
        <div class="task-heart-progress" aria-label="Сердечки в задании">
          <span class="task-heart-counter"><span aria-hidden="true">♥</span><strong><b data-task-hearts>0</b>/<b data-task-goal>${exerciseHeartGoal}</b></strong></span>
          <small>Осталось: <b data-task-left>${exerciseHeartGoal}</b></small>
        </div>`;
}

function updateTaskHeartProgress(root, count) {
  const hearts = root.querySelector("[data-task-hearts]");
  const left = root.querySelector("[data-task-left]");
  const goal = root.querySelector("[data-task-goal]");
  if (!hearts || !left) return;

  const nextCount = Math.min(Math.max(0, count), exerciseHeartGoal);
  const remaining = Math.max(exerciseHeartGoal - nextCount, 0);
  hearts.textContent = nextCount;
  if (goal) goal.textContent = exerciseHeartGoal;
  left.textContent = remaining;
}

function flyHeart(root) {
  const heart = document.createElement("span");
  heart.className = "flying-heart";
  heart.textContent = "♥";
  heart.style.setProperty("--heart-drift", `${Math.round(Math.random() * 44 - 22)}px`);
  root.append(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

function getLessonExercises(root) {
  const panel = root.closest("[data-lesson-panel]");
  if (!panel) return [];
  return [...panel.querySelectorAll(".mini-find-game, .shape-write-card, .antonym-write-card, .living-write-card, .park-write-card, .bedroom-write-card, .town-write-card, .materials-write-card")];
}

function getNextExercise(root) {
  const exercises = getLessonExercises(root);
  const currentIndex = exercises.indexOf(root);
  return currentIndex >= 0 ? exercises[currentIndex + 1] : null;
}

function goToExercise(exercise) {
  if (!exercise) return;
  const targetTop = exercise.getBoundingClientRect().top + window.scrollY - 120;
  const nextTop = Math.max(targetTop, 0);
  exercise.classList.add("is-next-exercise");
  window.scrollTo({ top: nextTop, behavior: "smooth" });
  const focusTarget = exercise.querySelector("button, input");
  if (focusTarget) {
    setTimeout(() => {
      if (Math.abs(window.scrollY - nextTop) > 30) {
        window.scrollTo(0, nextTop);
      }
      focusTarget.focus();
    }, 520);
  }
  setTimeout(() => showSpeakerHint(exercise), 720);
  setTimeout(() => exercise.classList.remove("is-next-exercise"), 2200);
}

function getExerciseSpeaker(exercise) {
  if (!exercise) return null;
  return [...exercise.querySelectorAll(".speaker-button")].find(isElementVisible);
}

function hideSpeakerHint() {
  if (!activeSpeakerHint) return;
  const hint = activeSpeakerHint.element;
  const speaker = activeSpeakerHint.speaker;
  clearTimeout(activeSpeakerHint.timer);
  hint.classList.add("is-hiding");
  speaker?.classList.remove("is-hinting");
  setTimeout(() => hint.remove(), 240);
  activeSpeakerHint = null;
}

function positionSpeakerHint(hint, speaker) {
  const rect = speaker.getBoundingClientRect();
  const hintRect = hint.getBoundingClientRect();
  const gap = 16;
  const preferredTop = rect.top - hintRect.height - gap;
  const top = Math.max(12, preferredTop);
  const left = Math.min(
    Math.max(12, rect.left + rect.width / 2 - hintRect.width / 2),
    window.innerWidth - hintRect.width - 12
  );
  hint.style.left = `${left}px`;
  hint.style.top = `${top}px`;
  hint.style.setProperty("--hint-tail-left", `${rect.left + rect.width / 2 - left}px`);
}

function showSpeakerHint(exercise, options = {}) {
  const { force = true } = options;
  if (!force && exercise.dataset.speakerHintSeen === "true") return;
  const speaker = getExerciseSpeaker(exercise);
  if (!speaker) return;

  hideSpeakerHint();
  exercise.dataset.speakerHintSeen = "true";

  const hint = document.createElement("span");
  hint.className = "speaker-hint-bubble";
  hint.setAttribute("aria-hidden", "true");
  hint.textContent = "Нажми меня";
  document.body.append(hint);
  positionSpeakerHint(hint, speaker);
  speaker.classList.add("is-hinting");

  activeSpeakerHint = {
    element: hint,
    speaker,
    timer: setTimeout(hideSpeakerHint, 3000)
  };

  speaker.addEventListener("click", hideSpeakerHint, { once: true });
}

function setupSpeakerHintObserver() {
  if (!("IntersectionObserver" in window)) return;
  const exercises = document.querySelectorAll(".mini-find-game, .shape-write-card, .antonym-write-card, .living-write-card, .park-write-card, .bedroom-write-card, .town-write-card, .materials-write-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.58) return;
      const exercise = entry.target;
      const panel = exercise.closest("[data-lesson-panel]");
      if (panel && panel.dataset.lessonPanel !== lessonMode) return;
      if (!getExerciseSpeaker(exercise)) return;
      showSpeakerHint(exercise, { force: false });
    });
  }, {
    threshold: [0.58, 0.75]
  });

  exercises.forEach((exercise) => observer.observe(exercise));
}

function showTaskCompletion(root) {
  if (root.dataset.taskCompleteShown === "true") return;
  root.dataset.taskCompleteShown = "true";

  const exercises = getLessonExercises(root);
  const nextExercise = getNextExercise(root);
  const isLessonComplete = !nextExercise;
  const targetExercise = nextExercise || exercises[0];
  const possibleHearts = exercises.length * exerciseHeartGoal;
  if (targetExercise && !targetExercise.id) {
    targetExercise.id = `exercise-${Date.now()}`;
  }
  const completion = document.createElement("div");
  completion.className = "task-complete-pop";
  completion.setAttribute("role", "status");
  completion.innerHTML = `
    <div class="task-complete-card">
      <span class="task-complete-hearts" aria-hidden="true">♥♥♥</span>
      <strong>${isLessonComplete ? "Lesson complete!" : "Well done!"}</strong>
      <p>${isLessonComplete ? `Общий зачёт: ${heartCount} из ${possibleHearts} сердечек.` : "Все сердечки собраны."}</p>
      ${isLessonComplete ? '<p class="task-complete-note">В общий зачёт попадают только ответы с первой попытки.</p>' : ""}
      <a class="button button-dark" href="#${targetExercise?.id || "games"}">${nextExercise ? "Следующая игра" : "Начать заново"}</a>
    </div>
  `;

  completion.querySelector("a").addEventListener("click", () => {
    completion.remove();
    if (isLessonComplete) {
      resetAllHearts({ restartGames: true });
    }
    if (targetExercise) {
      setTimeout(() => goToExercise(targetExercise), 80);
    }
  });

  root.append(completion);
}

function awardTaskHeart(root, options = {}) {
  const { awardGlobal = true } = options;
  const current = Number(root.querySelector("[data-task-hearts]")?.textContent || 0);
  if (current >= exerciseHeartGoal) {
    showTaskCompletion(root);
    return current;
  }

  const nextCount = Math.min(current + 1, exerciseHeartGoal);
  updateTaskHeartProgress(root, nextCount);
  if (awardGlobal) awardProgress();
  flyHeart(root);
  if (nextCount >= exerciseHeartGoal) showTaskCompletion(root);
  return nextCount;
}

function registerGameReset(handler) {
  gameResetHandlers.push(handler);
}

function resetAllHearts(options = {}) {
  const { restartGames = false } = options;
  heartCount = 0;
  updateProgressDisplay();

  document.querySelectorAll(".mini-find-game, .shape-write-card, .antonym-write-card, .living-write-card, .park-write-card, .bedroom-write-card, .town-write-card, .materials-write-card").forEach((exercise) => {
    updateTaskHeartProgress(exercise, 0);
    delete exercise.dataset.taskCompleteShown;
    exercise.classList.remove("is-next-exercise");
    exercise.querySelectorAll(".task-complete-pop, .flying-heart").forEach((element) => element.remove());
  });

  if (restartGames) {
    gameResetHandlers.forEach((handler) => handler());
  }
}

function applyLessonMode(mode, options = {}) {
  const nextMode = ["shapes", "antonyms", "living-room", "park", "bedroom", "town", "materials"].includes(mode) ? mode : "shapes";
  const modeChanged = lessonMode !== nextMode;
  lessonMode = nextMode;
  document.body.dataset.lessonMode = nextMode;
  writeSetting("shapeLessonMode", nextMode);

  const lessonSelect = document.querySelector("[data-lesson-select]");
  if (lessonSelect) lessonSelect.value = nextMode;

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    const skipTargets = {
      shapes: "#games",
      antonyms: "#antonym-games-title",
      "living-room": "#living-games-title",
      park: "#park-games-title",
      bedroom: "#bedroom-games-title",
      town: "#town-games-title",
      materials: "#materials-games-title"
    };
    skipLink.setAttribute("href", skipTargets[nextMode] || "#games");
  }

  if (options.resetHearts || modeChanged) {
    resetAllHearts({ restartGames: true });
  }
}

function setControlButtonText(button, text) {
  const label = button.querySelector("[data-control-label]");
  if (label) {
    label.textContent = text;
  } else {
    button.textContent = text;
  }
  button.setAttribute("aria-label", text);
}

function updateSoundControl() {
  document.body.dataset.sound = soundEnabled ? "on" : "off";
  const button = document.querySelector("[data-sound-toggle]");
  if (!button) return;
  setControlButtonText(button, soundEnabled ? "Озвучка включена" : "Включить озвучку");
  button.setAttribute("aria-pressed", String(soundEnabled));
}

function updateTranslationControl() {
  document.body.dataset.translation = translationEnabled ? "on" : "off";
  const button = document.querySelector("[data-translation-toggle]");
  if (!button) return;
  setControlButtonText(button, translationEnabled ? "Перевод включён" : "Включить перевод");
  button.setAttribute("aria-pressed", String(translationEnabled));
}

function setupLessonControls() {
  const lessonSelect = document.querySelector("[data-lesson-select]");
  if (lessonSelect) {
    lessonSelect.addEventListener("change", () => applyLessonMode(lessonSelect.value, { resetHearts: true }));
  }

  const soundToggle = document.querySelector("[data-sound-toggle]");
  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      writeSetting("shapeLessonSoundEnabled", String(soundEnabled));
      if (!soundEnabled) {
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      }
      updateSoundControl();
    });
  }

  const translationToggle = document.querySelector("[data-translation-toggle]");
  if (translationToggle) {
    translationToggle.addEventListener("click", () => {
      translationEnabled = !translationEnabled;
      writeSetting("shapeLessonTranslationEnabled", String(translationEnabled));
      updateTranslationControl();
    });
  }

  applyLessonMode(lessonMode);
  updateSoundControl();
  updateTranslationControl();
  updateProgressDisplay();
}

function setupSpeakButtons(root = document) {
  root.querySelectorAll("[data-speak]").forEach((button) => {
    if (button.dataset.speakReady === "true") return;
    button.dataset.speakReady = "true";
    const translation = wordTranslations.get(button.dataset.speak);
    if (translation) {
      button.dataset.translation = translation;
      button.setAttribute("aria-label", `${button.dataset.speak}, ${translation}. Прослушать слово`);
    }
    button.addEventListener("click", () => speak(button.dataset.speak));
    if (button.classList.contains("word-sound")) {
      const showWordHint = () => {
        button.classList.add("is-word-active");
        speakOnHover(button.dataset.speak);
      };
      const hideWordHint = () => button.classList.remove("is-word-active");
      button.addEventListener("mouseenter", showWordHint);
      button.addEventListener("focus", showWordHint);
      button.addEventListener("mouseleave", hideWordHint);
      button.addEventListener("blur", hideWordHint);
    }
  });
}

setupSpeakButtons();

const visibleCardsGrid = document.querySelector("#visible-shape-cards");

function getShapeByWord(word) {
  return shapes.find((shape) => shape.word === word);
}

function setupVisibleCards() {
  if (!visibleCardsGrid) return;

  visibleCardsGrid.querySelectorAll(".simple-shape-card").forEach((card) => {
    if (card.dataset.ready === "true") return;
    const word = card.dataset.simpleShape;
    const shape = getShapeByWord(word);
    if (!shape) return;

    card.dataset.ready = "true";
    card.setAttribute("aria-pressed", String(card.classList.contains("is-flipped")));
    card.addEventListener("mouseenter", () => speakOnHover(shape.word));
    card.addEventListener("focus", () => speakOnHover(shape.word));
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(card.classList.contains("is-flipped")));
      speak(shape.word);
    });
  });
}

const findGamesRoot = document.querySelector("#find-games");
const findGameStates = new Map();

const findGames = [
  {
    id: "english-word",
    badge: "Игра 01",
    title: "Find the shape",
    ru: "Найди форму по английскому слову.",
    prompt: (shape) => `Найди: ${shape.word}`,
    promptClass: "prompt-word",
    speakOnNewRound: true
  },
  {
    id: "listen-word",
    badge: "Игра 02",
    title: "Listen and choose",
    ru: "Послушай слово и выбери правильную картинку.",
    prompt: () => "Послушай и выбери",
    promptClass: "prompt-audio",
    speakOnNewRound: true,
    hasSpeaker: true
  },
  {
    id: "russian-word",
    badge: "Игра 03",
    title: "Russian clue",
    ru: "Найди форму по русскому переводу.",
    prompt: (shape) => `Найди: ${shape.ru}`,
    promptClass: "prompt-ru"
  },
  {
    id: "shape-clue",
    badge: "Игра 04",
    title: "Shape clue",
    ru: "Найди фигуру по короткой подсказке.",
    prompt: (shape) => `Подсказка: ${shape.clueRu}`,
    promptClass: "prompt-clue"
  },
  {
    id: "picture-match",
    badge: "Игра 05",
    title: "Match the picture",
    ru: "Посмотри на образец и найди такую же форму.",
    prompt: () => "Найди такую же форму",
    promptClass: "prompt-picture",
    showTargetImage: true,
    speakOnNewRound: true
  },
  {
    id: "first-letter",
    badge: "Игра 06",
    title: "First letter",
    ru: "Найди форму по первой букве английского слова.",
    prompt: (shape) => `Первая буква: ${shape.word[0].toUpperCase()}`,
    promptClass: "prompt-letter",
    uniqueFirstLetter: true
  },
  {
    id: "sentence-hunt",
    badge: "Игра 07",
    title: "Sentence hunt",
    ru: "Найди картинку по короткому английскому предложению.",
    prompt: (shape) => `Предложение: ${shape.sentence.replace("___", "shape")}`,
    promptClass: "prompt-sentence"
  }
];

function renderFindGames() {
  if (!findGamesRoot) return;
  findGamesRoot.innerHTML = "";

  findGames.forEach((game, index) => {
    const card = document.createElement("article");
    card.className = `mini-find-game mini-find-game-${index + 1}`;
    card.dataset.game = game.id;
    card.id = `shape-game-${game.id}`;
    card.innerHTML = `
      <div class="mini-game-intro">
        <span>${game.badge}</span>
        <h3>${game.title}</h3>
        <p>${game.ru}</p>
        ${taskHeartProgressMarkup()}
      </div>
      <div class="mini-game-body">
        <div class="hunt-prompt">
          <div class="target-picture" data-target-picture hidden></div>
          <button class="speaker-button" type="button" data-speaker hidden aria-label="Прослушать слово">♪</button>
          <p data-prompt>Найди форму</p>
        </div>
        <div class="picture-options" data-options></div>
        <p class="feedback" data-feedback aria-live="polite">Выбери картинку.</p>
        <button class="button button-dark" type="button" data-next>Новая форма</button>
      </div>
    `;

    findGamesRoot.append(card);
    findGameStates.set(game.id, {
      answer: null,
      answered: false,
      mistakes: 0,
      usedTargets: [],
      score: 0,
      timer: null,
      speechTimer: null,
      hoverMutedUntil: 0,
      root: card
    });
  });
}

function getGameParts(game) {
  const state = findGameStates.get(game.id);
  return {
    state,
    prompt: state.root.querySelector("[data-prompt]"),
    options: state.root.querySelector("[data-options]"),
    feedback: state.root.querySelector("[data-feedback]"),
    next: state.root.querySelector("[data-next]"),
    speaker: state.root.querySelector("[data-speaker]"),
    targetPicture: state.root.querySelector("[data-target-picture]")
  };
}

function makeChoices(answer, game) {
  const firstLetter = answer.word[0];
  const pool = game.uniqueFirstLetter
    ? shapes.filter((shape) => shape.word !== answer.word && shape.word[0] !== firstLetter)
    : shapes.filter((shape) => shape.word !== answer.word);
  const distractors = shuffle(pool).slice(0, 3);
  return shuffle([answer, ...distractors]);
}

function newFindGameRound(game, announce = true) {
  const parts = getGameParts(game);
  const answer = pickUnusedTarget(parts.state, shapes);
  const choices = makeChoices(answer, game);

  clearTimeout(parts.state.timer);
  clearTimeout(parts.state.speechTimer);
  parts.state.answer = answer;
  parts.state.answered = false;
  resetRoundMistakes(parts.state);
  parts.prompt.textContent = game.prompt(answer);
  parts.prompt.className = game.promptClass;
  parts.options.innerHTML = "";
  parts.feedback.textContent = "Выбери картинку.";

  if (parts.speaker) {
    parts.speaker.hidden = !game.hasSpeaker;
    parts.speaker.onclick = () => speak(answer.word);
  }

  if (parts.targetPicture) {
    parts.targetPicture.hidden = !game.showTargetImage;
    parts.targetPicture.innerHTML = game.showTargetImage
      ? `<img loading="lazy" decoding="async" src="assets/images/${answer.image}" alt="${answer.ru}">`
      : "";
  }

  choices.forEach((shape) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "picture-option";
    option.setAttribute("aria-label", `${shape.word}, ${shape.ru}`);
    option.innerHTML = `<img loading="lazy" decoding="async" src="assets/images/${shape.image}" alt="${shape.ru}">`;
    option.addEventListener("mouseenter", () => speakGameHover(parts.state, shape.word));
    option.addEventListener("focus", () => speakGameHover(parts.state, shape.word));
    option.addEventListener("click", () => checkFindGameAnswer(game, option, shape));
    parts.options.append(option);
  });

  if (announce && game.speakOnNewRound) {
    scheduleGamePromptSpeech(parts.state, answer.word);
  }
}

function checkFindGameAnswer(game, option, chosen) {
  const parts = getGameParts(game);
  if (parts.state.answered) return;
  const answer = parts.state.answer;

  if (chosen.word === answer.word) {
    parts.state.answered = true;
    option.classList.add("is-right");
    parts.state.score += 1;
    muteGameHover(parts.state, autoAdvanceDelay + roundAnnouncementDelay + gameHoverQuietAfterPrompt);
    const awardGlobal = shouldAwardGlobalHeart(parts.state);
    const taskHearts = awardTaskHeart(parts.state.root, { awardGlobal });
    parts.feedback.textContent = `Верно! ${answer.word} — ${answer.ru}.${scoreRuleNote(awardGlobal)}`;
    speak(answer.word);
    if (taskHearts < exerciseHeartGoal) {
      parts.state.timer = setTimeout(() => newFindGameRound(game, true), autoAdvanceDelay);
    }
    return;
  }

  markWrongAttempt(parts.state);
  option.classList.add("is-wrong");
  parts.feedback.textContent = "Попробуй ещё раз.";
  setTimeout(() => option.classList.remove("is-wrong"), 420);
}

function startFindGames() {
  if (!findGamesRoot) return;
  renderFindGames();
  findGames.forEach((game) => {
    const parts = getGameParts(game);
    parts.next.addEventListener("click", () => newFindGameRound(game, true));
    newFindGameRound(game, false);
    registerGameReset(() => {
      resetTargetHistory(parts.state);
      newFindGameRound(game, false);
    });
  });
}

const antonymCardsRoot = document.querySelector("#antonym-cards");
const antonymGamesRoot = document.querySelector("#antonym-games");
const antonymGameStates = new Map();
const livingRoomCardsRoot = document.querySelector("#living-cards");
const livingRoomGamesRoot = document.querySelector("#living-games");
const livingRoomGameStates = new Map();
const parkCardsRoot = document.querySelector("#park-cards");
const parkGamesRoot = document.querySelector("#park-games");
const parkGameStates = new Map();
const bedroomCardsRoot = document.querySelector("#bedroom-cards");
const bedroomGamesRoot = document.querySelector("#bedroom-games");
const bedroomGameStates = new Map();
const townCardsRoot = document.querySelector("#town-cards");
const townGamesRoot = document.querySelector("#town-games");
const townGameStates = new Map();
const materialsCardsRoot = document.querySelector("#materials-cards");
const materialsGamesRoot = document.querySelector("#materials-games");
const materialsGameStates = new Map();
const shapeBuildRoot = document.querySelector("#shape-build-game");
const shapeTypeRoot = document.querySelector("#shape-type-game");
const antonymBuildRoot = document.querySelector("#antonym-build-game");
const antonymTypeRoot = document.querySelector("#antonym-type-game");
const livingBuildRoot = document.querySelector("#living-build-game");
const livingTypeRoot = document.querySelector("#living-type-game");
const parkBuildRoot = document.querySelector("#park-build-game");
const parkTypeRoot = document.querySelector("#park-type-game");
const bedroomBuildRoot = document.querySelector("#bedroom-build-game");
const bedroomTypeRoot = document.querySelector("#bedroom-type-game");
const townBuildRoot = document.querySelector("#town-build-game");
const townTypeRoot = document.querySelector("#town-type-game");
const materialsBuildRoot = document.querySelector("#materials-build-game");
const materialsTypeRoot = document.querySelector("#materials-type-game");

const antonymGames = [
  {
    id: "find-pair",
    badge: "Антоним 01",
    title: "Find the pair",
    ru: "Выбери картинку, где живёт это слово.",
    prompt: (target) => `Найди: ${target.word}`,
    promptClass: "prompt-word",
    choiceType: "pair-image",
    speakOnNewRound: true
  },
  {
    id: "listen-word",
    badge: "Антоним 02",
    title: "Listen and tap",
    ru: "Послушай слово и выбери его написание.",
    prompt: () => "Послушай и нажми слово",
    promptClass: "prompt-audio",
    choiceType: "word-button",
    hasSpeaker: true,
    answerWord: (target) => target.word,
    speakOnNewRound: true
  },
  {
    id: "russian-clue",
    badge: "Антоним 03",
    title: "Russian clue",
    ru: "Найди английское слово по русской подсказке.",
    prompt: (target) => `Найди: ${target.ru}`,
    promptClass: "prompt-ru",
    choiceType: "word-button",
    answerWord: (target) => target.word
  },
  {
    id: "opposite-word",
    badge: "Антоним 04",
    title: "Opposite word",
    ru: "Выбери слово-противоположность.",
    prompt: (target) => `Противоположность к слову: ${target.word}`,
    promptClass: "prompt-clue",
    choiceType: "word-button",
    answerWord: (target) => target.opposite
  },
  {
    id: "picture-word",
    badge: "Антоним 05",
    title: "Picture clue",
    ru: "Посмотри на картинку и выбери нужное слово.",
    prompt: (target) => `Какое слово значит: ${target.ru}?`,
    promptClass: "prompt-sentence",
    choiceType: "word-button",
    showTargetImage: true,
    answerWord: (target) => target.word
  }
];

function getAntonymPair(id) {
  return antonymPairs.find((pair) => pair.id === id);
}

function getAntonymWord(word) {
  return antonymWords.find((item) => item.word === word);
}

function getAntonymImage(fileName) {
  return `assets/images/antonyms/${fileName}`;
}

function speakAntonymPair(pair) {
  speak(pair.words.map((item) => item.word).join(". "));
}

function setupAntonymCards() {
  if (!antonymCardsRoot) return;
  antonymCardsRoot.innerHTML = "";

  antonymPairs.forEach((pair, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `antonym-card${index === 0 ? " is-flipped" : ""}`;
    card.setAttribute("aria-label", `${pair.title}, ${pair.ru}. Перевернуть и прослушать`);
    card.innerHTML = `
        <span class="antonym-card-inner">
          <span class="antonym-card-face antonym-card-front">
          <img loading="lazy" decoding="async" src="${getAntonymImage(pair.image)}" alt="${pair.alt}">
        </span>
        <span class="antonym-card-face antonym-card-back">
          <img loading="lazy" decoding="async" src="${getAntonymImage(pair.imageWords)}" alt="${pair.title}">
        </span>
      </span>
    `;

    card.addEventListener("mouseenter", () => speakAntonymPairOnHover(pair));
    card.addEventListener("focus", () => speakAntonymPairOnHover(pair));
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      speakAntonymPair(pair);
    });

    antonymCardsRoot.append(card);
  });
}

function renderAntonymGames() {
  if (!antonymGamesRoot) return;
  antonymGamesRoot.innerHTML = "";

  antonymGames.forEach((game, index) => {
    const card = document.createElement("article");
    card.className = `mini-find-game antonym-mini-game antonym-mini-game-${index + 1}`;
    card.dataset.game = game.id;
    card.id = `antonym-game-${game.id}`;
    card.innerHTML = `
      <div class="mini-game-intro">
        <span>${game.badge}</span>
        <h3>${game.title}</h3>
        <p>${game.ru}</p>
        ${taskHeartProgressMarkup()}
      </div>
      <div class="mini-game-body">
        <div class="hunt-prompt">
          <div class="target-picture" data-target-picture hidden></div>
          <button class="speaker-button" type="button" data-speaker hidden aria-label="Прослушать слово">♪</button>
          <p data-prompt>Найди противоположность</p>
        </div>
        <div class="antonym-options" data-options></div>
        <p class="feedback" data-feedback aria-live="polite">Выбери ответ.</p>
        <button class="button button-dark" type="button" data-next>Новое слово</button>
      </div>
    `;

    antonymGamesRoot.append(card);
    antonymGameStates.set(game.id, {
      answer: null,
      answered: false,
      mistakes: 0,
      usedTargets: [],
      score: 0,
      timer: null,
      speechTimer: null,
      hoverMutedUntil: 0,
      root: card
    });
  });
}

function getAntonymGameParts(game) {
  const state = antonymGameStates.get(game.id);
  return {
    state,
    prompt: state.root.querySelector("[data-prompt]"),
    options: state.root.querySelector("[data-options]"),
    feedback: state.root.querySelector("[data-feedback]"),
    next: state.root.querySelector("[data-next]"),
    speaker: state.root.querySelector("[data-speaker]"),
    targetPicture: state.root.querySelector("[data-target-picture]")
  };
}

function makeAntonymWordChoices(answerWord) {
  const answer = getAntonymWord(answerWord);
  const distractors = shuffle(antonymWords.filter((item) => item.word !== answer.word)).slice(0, 3);
  return shuffle([answer, ...distractors]);
}

function makeAntonymPairChoices(pairId) {
  const answer = getAntonymPair(pairId);
  const distractors = shuffle(antonymPairs.filter((pair) => pair.id !== answer.id)).slice(0, 3);
  return shuffle([answer, ...distractors]);
}

function newAntonymGameRound(game, announce = true) {
  const parts = getAntonymGameParts(game);
  const target = pickUnusedTarget(parts.state, antonymWords);
  const choices = game.choiceType === "pair-image"
    ? makeAntonymPairChoices(target.pairId)
    : makeAntonymWordChoices(game.answerWord(target));

  clearTimeout(parts.state.timer);
  clearTimeout(parts.state.speechTimer);
  parts.state.answer = target;
  parts.state.answered = false;
  resetRoundMistakes(parts.state);
  parts.prompt.textContent = game.prompt(target);
  parts.prompt.className = game.promptClass;
  parts.options.innerHTML = "";
  parts.options.className = `antonym-options ${game.choiceType === "pair-image" ? "antonym-picture-options" : "antonym-word-options"}`;
  parts.feedback.textContent = "Выбери ответ.";

  if (parts.speaker) {
    parts.speaker.hidden = !game.hasSpeaker;
    parts.speaker.onclick = () => speak(target.word);
  }

  if (parts.targetPicture) {
      const pair = getAntonymPair(target.pairId);
      parts.targetPicture.hidden = !game.showTargetImage;
      parts.targetPicture.innerHTML = game.showTargetImage
      ? `<img loading="lazy" decoding="async" src="${getAntonymImage(pair.image)}" alt="${pair.alt}">`
      : "";
  }

  choices.forEach((choice) => {
    const option = document.createElement("button");
    option.type = "button";

    if (game.choiceType === "pair-image") {
      option.className = "picture-option antonym-picture-option";
      option.setAttribute("aria-label", `${choice.title}, ${choice.ru}`);
      option.innerHTML = `<img loading="lazy" decoding="async" src="${getAntonymImage(choice.image)}" alt="${choice.alt}">`;
      option.addEventListener("mouseenter", () => speakGameHover(parts.state, () => speakAntonymPairOnHover(choice)));
      option.addEventListener("focus", () => speakGameHover(parts.state, () => speakAntonymPairOnHover(choice)));
    } else {
      option.className = "antonym-word-option";
      option.textContent = choice.word;
      option.setAttribute("aria-label", `${choice.word}, ${choice.ru}`);
      option.addEventListener("mouseenter", () => speakGameHover(parts.state, choice.word));
      option.addEventListener("focus", () => speakGameHover(parts.state, choice.word));
    }

    option.addEventListener("click", () => checkAntonymGameAnswer(game, option, choice));
    parts.options.append(option);
  });

  if (announce && game.speakOnNewRound) {
    scheduleGamePromptSpeech(parts.state, target.word);
  }
}

function checkAntonymGameAnswer(game, option, chosen) {
  const parts = getAntonymGameParts(game);
  if (parts.state.answered) return;
  const target = parts.state.answer;
  const correct = game.choiceType === "pair-image"
    ? chosen.id === target.pairId
    : chosen.word === game.answerWord(target);

  if (correct) {
    parts.state.answered = true;
    option.classList.add("is-right");
    parts.state.score += 1;
    muteGameHover(parts.state, autoAdvanceDelay + roundAnnouncementDelay + gameHoverQuietAfterPrompt);
    const awardGlobal = shouldAwardGlobalHeart(parts.state);
    const taskHearts = awardTaskHeart(parts.state.root, { awardGlobal });

    if (game.choiceType === "pair-image") {
      const pair = getAntonymPair(target.pairId);
      parts.feedback.textContent = `Верно! ${pair.title} — ${pair.ru}.${scoreRuleNote(awardGlobal)}`;
      speak(target.word);
    } else {
      parts.feedback.textContent = `Верно! ${chosen.word} — ${chosen.ru}.${scoreRuleNote(awardGlobal)}`;
      speak(chosen.word);
    }

    if (taskHearts < exerciseHeartGoal) {
      parts.state.timer = setTimeout(() => newAntonymGameRound(game, true), autoAdvanceDelay);
    }
    return;
  }

  markWrongAttempt(parts.state);
  option.classList.add("is-wrong");
  parts.feedback.textContent = "Почти. Попробуй ещё раз.";
  setTimeout(() => option.classList.remove("is-wrong"), 420);
}

function startAntonymGames() {
  if (!antonymGamesRoot) return;
  renderAntonymGames();
  antonymGames.forEach((game) => {
    const parts = getAntonymGameParts(game);
    parts.next.addEventListener("click", () => newAntonymGameRound(game, true));
    newAntonymGameRound(game, false);
    registerGameReset(() => {
      resetTargetHistory(parts.state);
      newAntonymGameRound(game, false);
    });
  });
}

const livingRoomGames = [
  {
    id: "find-object",
    badge: "Комната 01",
    title: "Find the object",
    ru: "Найди предмет по английскому слову.",
    prompt: (item) => `Найди: ${item.word}`,
    promptClass: "prompt-word",
    choiceType: "picture",
    speakOnNewRound: true
  },
  {
    id: "listen-object",
    badge: "Комната 02",
    title: "Listen and choose",
    ru: "Послушай слово и выбери правильную картинку.",
    prompt: () => "Послушай и выбери",
    promptClass: "prompt-audio",
    choiceType: "picture",
    hasSpeaker: true,
    speakOnNewRound: true
  },
  {
    id: "russian-clue",
    badge: "Комната 03",
    title: "Russian clue",
    ru: "Выбери английское слово по русскому переводу.",
    prompt: (item) => `Найди: ${item.ru}`,
    promptClass: "prompt-ru",
    choiceType: "word-button"
  },
  {
    id: "room-clue",
    badge: "Комната 04",
    title: "Room clue",
    ru: "Найди предмет по короткому описанию.",
    prompt: (item) => `Подсказка: ${item.clueRu}`,
    promptClass: "prompt-clue",
    choiceType: "picture"
  },
  {
    id: "picture-word",
    badge: "Комната 05",
    title: "Picture word",
    ru: "Посмотри на картинку и выбери английское слово.",
    prompt: () => "Какое это слово?",
    promptClass: "prompt-sentence",
    choiceType: "word-button",
    showTargetImage: true,
    speakOnNewRound: true
  }
];

function getLivingRoomImage(fileName) {
  return `assets/images/${fileName}`;
}

function setupLivingRoomCards() {
  if (!livingRoomCardsRoot) return;
  livingRoomCardsRoot.innerHTML = "";

  livingRoomItems.forEach((item, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `antonym-card living-room-card${index === 0 ? " is-flipped" : ""}`;
    card.setAttribute("aria-label", `${item.word}, ${item.ru}. Перевернуть и прослушать`);
    card.innerHTML = `
      <span class="antonym-card-inner">
        <span class="antonym-card-face antonym-card-front">
          <img loading="lazy" decoding="async" src="${getLivingRoomImage(item.image)}" alt="${item.ru}">
        </span>
        <span class="antonym-card-face antonym-card-back">
          <img loading="lazy" decoding="async" src="${getLivingRoomImage(item.imageWords)}" alt="${item.word}">
        </span>
      </span>
    `;

    card.addEventListener("mouseenter", () => speakOnHover(item.word));
    card.addEventListener("focus", () => speakOnHover(item.word));
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      speak(item.word);
    });

    livingRoomCardsRoot.append(card);
  });
}

function renderLivingRoomGames() {
  if (!livingRoomGamesRoot) return;
  livingRoomGamesRoot.innerHTML = "";

  livingRoomGames.forEach((game, index) => {
    const card = document.createElement("article");
    card.className = `mini-find-game antonym-mini-game living-mini-game living-mini-game-${index + 1}`;
    card.dataset.game = game.id;
    card.id = `living-game-${game.id}`;
    card.innerHTML = `
      <div class="mini-game-intro">
        <span>${game.badge}</span>
        <h3>${game.title}</h3>
        <p>${game.ru}</p>
        ${taskHeartProgressMarkup()}
      </div>
      <div class="mini-game-body">
        <div class="hunt-prompt">
          <div class="target-picture" data-target-picture hidden></div>
          <button class="speaker-button" type="button" data-speaker hidden aria-label="Прослушать слово">♪</button>
          <p data-prompt>Найди предмет</p>
        </div>
        <div class="antonym-options" data-options></div>
        <p class="feedback" data-feedback aria-live="polite">Выбери ответ.</p>
        <button class="button button-dark" type="button" data-next>Новое слово</button>
      </div>
    `;

    livingRoomGamesRoot.append(card);
    livingRoomGameStates.set(game.id, {
      answer: null,
      answered: false,
      mistakes: 0,
      usedTargets: [],
      score: 0,
      timer: null,
      speechTimer: null,
      hoverMutedUntil: 0,
      root: card
    });
  });
}

function getLivingRoomGameParts(game) {
  const state = livingRoomGameStates.get(game.id);
  return {
    state,
    prompt: state.root.querySelector("[data-prompt]"),
    options: state.root.querySelector("[data-options]"),
    feedback: state.root.querySelector("[data-feedback]"),
    next: state.root.querySelector("[data-next]"),
    speaker: state.root.querySelector("[data-speaker]"),
    targetPicture: state.root.querySelector("[data-target-picture]")
  };
}

function makeLivingRoomChoices(answer) {
  const distractors = shuffle(livingRoomItems.filter((item) => item.word !== answer.word)).slice(0, 3);
  return shuffle([answer, ...distractors]);
}

function newLivingRoomGameRound(game, announce = true) {
  const parts = getLivingRoomGameParts(game);
  const target = pickUnusedTarget(parts.state, livingRoomItems);
  const choices = makeLivingRoomChoices(target);

  clearTimeout(parts.state.timer);
  clearTimeout(parts.state.speechTimer);
  parts.state.answer = target;
  parts.state.answered = false;
  resetRoundMistakes(parts.state);
  parts.prompt.textContent = game.prompt(target);
  parts.prompt.className = game.promptClass;
  parts.options.innerHTML = "";
  parts.options.className = `antonym-options living-room-options ${game.choiceType === "picture" ? "antonym-picture-options" : "antonym-word-options"}`;
  parts.feedback.textContent = "Выбери ответ.";

  if (parts.speaker) {
    parts.speaker.hidden = !game.hasSpeaker;
    parts.speaker.onclick = () => speak(target.word);
  }

  if (parts.targetPicture) {
    parts.targetPicture.hidden = !game.showTargetImage;
    parts.targetPicture.innerHTML = game.showTargetImage
      ? `<img loading="lazy" decoding="async" src="${getLivingRoomImage(target.image)}" alt="${target.ru}">`
      : "";
  }

  choices.forEach((choice) => {
    const option = document.createElement("button");
    option.type = "button";

    if (game.choiceType === "picture") {
      option.className = "picture-option antonym-picture-option living-picture-option";
      option.innerHTML = `<img loading="lazy" decoding="async" src="${getLivingRoomImage(choice.image)}" alt="${choice.ru}">`;
    } else {
      option.className = "antonym-word-option living-word-option";
      option.textContent = choice.word;
    }

    option.setAttribute("aria-label", `${choice.word}, ${choice.ru}`);
    option.addEventListener("mouseenter", () => speakGameHover(parts.state, choice.word));
    option.addEventListener("focus", () => speakGameHover(parts.state, choice.word));
    option.addEventListener("click", () => checkLivingRoomGameAnswer(game, option, choice));
    parts.options.append(option);
  });

  if (announce && game.speakOnNewRound) {
    scheduleGamePromptSpeech(parts.state, target.word);
  }
}

function checkLivingRoomGameAnswer(game, option, chosen) {
  const parts = getLivingRoomGameParts(game);
  if (parts.state.answered) return;
  const target = parts.state.answer;

  if (chosen.word === target.word) {
    parts.state.answered = true;
    option.classList.add("is-right");
    parts.state.score += 1;
    muteGameHover(parts.state, autoAdvanceDelay + roundAnnouncementDelay + gameHoverQuietAfterPrompt);
    const awardGlobal = shouldAwardGlobalHeart(parts.state);
    const taskHearts = awardTaskHeart(parts.state.root, { awardGlobal });
    parts.feedback.textContent = `Верно! ${target.word} — ${target.ru}.${scoreRuleNote(awardGlobal)}`;
    speak(target.word);
    if (taskHearts < exerciseHeartGoal) {
      parts.state.timer = setTimeout(() => newLivingRoomGameRound(game, true), autoAdvanceDelay);
    }
    return;
  }

  markWrongAttempt(parts.state);
  option.classList.add("is-wrong");
  parts.feedback.textContent = "Почти. Попробуй ещё раз.";
  setTimeout(() => option.classList.remove("is-wrong"), 420);
}

function startLivingRoomGames() {
  if (!livingRoomGamesRoot) return;
  renderLivingRoomGames();
  livingRoomGames.forEach((game) => {
    const parts = getLivingRoomGameParts(game);
    parts.next.addEventListener("click", () => newLivingRoomGameRound(game, true));
    newLivingRoomGameRound(game, false);
    registerGameReset(() => {
      resetTargetHistory(parts.state);
      newLivingRoomGameRound(game, false);
    });
  });
}

const parkGames = [
  {
    id: "find-park-word",
    badge: "Парк 01",
    title: "Find the park word",
    ru: "Найди картинку по английскому слову.",
    prompt: (item) => `Найди: ${item.word}`,
    promptClass: "prompt-word",
    choiceType: "picture",
    speakOnNewRound: true
  },
  {
    id: "listen-park-word",
    badge: "Парк 02",
    title: "Listen and choose",
    ru: "Послушай слово и выбери правильную картинку.",
    prompt: () => "Послушай и выбери",
    promptClass: "prompt-audio",
    choiceType: "picture",
    hasSpeaker: true,
    speakOnNewRound: true
  },
  {
    id: "russian-clue",
    badge: "Парк 03",
    title: "Russian clue",
    ru: "Выбери английское слово по русскому переводу.",
    prompt: (item) => `Найди: ${item.ru}`,
    promptClass: "prompt-ru",
    choiceType: "word-button"
  },
  {
    id: "park-clue",
    badge: "Парк 04",
    title: "Park clue",
    ru: "Найди слово по короткой подсказке.",
    prompt: (item) => `Подсказка: ${item.clueRu}`,
    promptClass: "prompt-clue",
    choiceType: "picture"
  },
  {
    id: "picture-word",
    badge: "Парк 05",
    title: "Picture word",
    ru: "Посмотри на картинку и выбери английское слово.",
    prompt: () => "Какое это слово?",
    promptClass: "prompt-sentence",
    choiceType: "word-button",
    showTargetImage: true,
    speakOnNewRound: true
  }
];

function getParkImage(fileName) {
  return `assets/images/${fileName}`;
}

function setupParkCards() {
  if (!parkCardsRoot) return;
  parkCardsRoot.innerHTML = "";

  parkItems.forEach((item, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `antonym-card park-card${index === 0 ? " is-flipped" : ""}`;
    card.setAttribute("aria-label", `${item.word}, ${item.ru}. Перевернуть и прослушать`);
    card.innerHTML = `
      <span class="antonym-card-inner">
        <span class="antonym-card-face antonym-card-front">
          <img loading="lazy" decoding="async" src="${getParkImage(item.image)}" alt="${item.ru}">
        </span>
        <span class="antonym-card-face antonym-card-back">
          <img loading="lazy" decoding="async" src="${getParkImage(item.imageWords)}" alt="${item.word}">
        </span>
      </span>
    `;

    card.addEventListener("mouseenter", () => speakOnHover(item.word));
    card.addEventListener("focus", () => speakOnHover(item.word));
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      speak(item.word);
    });

    parkCardsRoot.append(card);
  });
}

function renderParkGames() {
  if (!parkGamesRoot) return;
  parkGamesRoot.innerHTML = "";

  parkGames.forEach((game, index) => {
    const card = document.createElement("article");
    card.className = `mini-find-game antonym-mini-game park-mini-game park-mini-game-${index + 1}`;
    card.dataset.game = game.id;
    card.id = `park-game-${game.id}`;
    card.innerHTML = `
      <div class="mini-game-intro">
        <span>${game.badge}</span>
        <h3>${game.title}</h3>
        <p>${game.ru}</p>
        ${taskHeartProgressMarkup()}
      </div>
      <div class="mini-game-body">
        <div class="hunt-prompt">
          <div class="target-picture" data-target-picture hidden></div>
          <button class="speaker-button" type="button" data-speaker hidden aria-label="Прослушать слово">♪</button>
          <p data-prompt>Найди слово</p>
        </div>
        <div class="antonym-options" data-options></div>
        <p class="feedback" data-feedback aria-live="polite">Выбери ответ.</p>
        <button class="button button-dark" type="button" data-next>Новое слово</button>
      </div>
    `;

    parkGamesRoot.append(card);
    parkGameStates.set(game.id, {
      answer: null,
      answered: false,
      mistakes: 0,
      usedTargets: [],
      score: 0,
      timer: null,
      speechTimer: null,
      hoverMutedUntil: 0,
      root: card
    });
  });
}

function getParkGameParts(game) {
  const state = parkGameStates.get(game.id);
  return {
    state,
    prompt: state.root.querySelector("[data-prompt]"),
    options: state.root.querySelector("[data-options]"),
    feedback: state.root.querySelector("[data-feedback]"),
    next: state.root.querySelector("[data-next]"),
    speaker: state.root.querySelector("[data-speaker]"),
    targetPicture: state.root.querySelector("[data-target-picture]")
  };
}

function makeParkChoices(answer) {
  const distractors = shuffle(parkItems.filter((item) => item.word !== answer.word)).slice(0, 3);
  return shuffle([answer, ...distractors]);
}

function newParkGameRound(game, announce = true) {
  const parts = getParkGameParts(game);
  const target = pickUnusedTarget(parts.state, parkItems);
  const choices = makeParkChoices(target);

  clearTimeout(parts.state.timer);
  clearTimeout(parts.state.speechTimer);
  parts.state.answer = target;
  parts.state.answered = false;
  resetRoundMistakes(parts.state);
  parts.prompt.textContent = game.prompt(target);
  parts.prompt.className = game.promptClass;
  parts.options.innerHTML = "";
  parts.options.className = `antonym-options park-options ${game.choiceType === "picture" ? "antonym-picture-options" : "antonym-word-options"}`;
  parts.feedback.textContent = "Выбери ответ.";

  if (parts.speaker) {
    parts.speaker.hidden = !game.hasSpeaker;
    parts.speaker.onclick = () => speak(target.word);
  }

  if (parts.targetPicture) {
    parts.targetPicture.hidden = !game.showTargetImage;
    parts.targetPicture.innerHTML = game.showTargetImage
      ? `<img loading="lazy" decoding="async" src="${getParkImage(target.image)}" alt="${target.ru}">`
      : "";
  }

  choices.forEach((choice) => {
    const option = document.createElement("button");
    option.type = "button";

    if (game.choiceType === "picture") {
      option.className = "picture-option antonym-picture-option park-picture-option";
      option.innerHTML = `<img loading="lazy" decoding="async" src="${getParkImage(choice.image)}" alt="${choice.ru}">`;
    } else {
      option.className = "antonym-word-option park-word-option";
      option.textContent = choice.word;
    }

    option.setAttribute("aria-label", `${choice.word}, ${choice.ru}`);
    option.addEventListener("mouseenter", () => speakGameHover(parts.state, choice.word));
    option.addEventListener("focus", () => speakGameHover(parts.state, choice.word));
    option.addEventListener("click", () => checkParkGameAnswer(game, option, choice));
    parts.options.append(option);
  });

  if (announce && game.speakOnNewRound) {
    scheduleGamePromptSpeech(parts.state, target.word);
  }
}

function checkParkGameAnswer(game, option, chosen) {
  const parts = getParkGameParts(game);
  if (parts.state.answered) return;
  const target = parts.state.answer;

  if (chosen.word === target.word) {
    parts.state.answered = true;
    option.classList.add("is-right");
    parts.state.score += 1;
    muteGameHover(parts.state, autoAdvanceDelay + roundAnnouncementDelay + gameHoverQuietAfterPrompt);
    const awardGlobal = shouldAwardGlobalHeart(parts.state);
    const taskHearts = awardTaskHeart(parts.state.root, { awardGlobal });
    parts.feedback.textContent = `Верно! ${target.word} — ${target.ru}.${scoreRuleNote(awardGlobal)}`;
    speak(target.word);
    if (taskHearts < exerciseHeartGoal) {
      parts.state.timer = setTimeout(() => newParkGameRound(game, true), autoAdvanceDelay);
    }
    return;
  }

  markWrongAttempt(parts.state);
  option.classList.add("is-wrong");
  parts.feedback.textContent = "Почти. Попробуй ещё раз.";
  setTimeout(() => option.classList.remove("is-wrong"), 420);
}

function startParkGames() {
  if (!parkGamesRoot) return;
  renderParkGames();
  parkGames.forEach((game) => {
    const parts = getParkGameParts(game);
    parts.next.addEventListener("click", () => newParkGameRound(game, true));
    newParkGameRound(game, false);
    registerGameReset(() => {
      resetTargetHistory(parts.state);
      newParkGameRound(game, false);
    });
  });
}

const bedroomGames = [
  {
    id: "find-bedroom-word",
    badge: "Спальня 01",
    title: "Find the bedroom word",
    ru: "Найди картинку по английскому слову.",
    prompt: (item) => `Найди: ${item.word}`,
    promptClass: "prompt-word",
    choiceType: "picture",
    speakOnNewRound: true
  },
  {
    id: "listen-bedroom-word",
    badge: "Спальня 02",
    title: "Listen and choose",
    ru: "Послушай слово и выбери правильную картинку.",
    prompt: () => "Послушай и выбери",
    promptClass: "prompt-audio",
    choiceType: "picture",
    hasSpeaker: true,
    speakOnNewRound: true
  },
  {
    id: "russian-clue",
    badge: "Спальня 03",
    title: "Russian clue",
    ru: "Выбери английское слово по русскому переводу.",
    prompt: (item) => `Найди: ${item.ru}`,
    promptClass: "prompt-ru",
    choiceType: "word-button"
  },
  {
    id: "bedroom-clue",
    badge: "Спальня 04",
    title: "Bedroom clue",
    ru: "Найди предмет по короткой подсказке.",
    prompt: (item) => `Подсказка: ${item.clueRu}`,
    promptClass: "prompt-clue",
    choiceType: "picture"
  },
  {
    id: "picture-word",
    badge: "Спальня 05",
    title: "Picture word",
    ru: "Посмотри на картинку и выбери английское слово.",
    prompt: () => "Какое это слово?",
    promptClass: "prompt-sentence",
    choiceType: "word-button",
    showTargetImage: true,
    speakOnNewRound: true
  }
];

function getBedroomImage(fileName) {
  return `assets/images/${fileName}`;
}

function setupObjectLessonCards(root, items, cardClass, getImage) {
  if (!root) return;
  root.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `antonym-card ${cardClass}${index === 0 ? " is-flipped" : ""}`;
    card.setAttribute("aria-label", `${item.word}, ${item.ru}. Перевернуть и прослушать`);
    card.innerHTML = `
      <span class="antonym-card-inner">
        <span class="antonym-card-face antonym-card-front">
          <img loading="lazy" decoding="async" src="${getImage(item.image)}" alt="${item.ru}">
        </span>
        <span class="antonym-card-face antonym-card-back">
          <img loading="lazy" decoding="async" src="${getImage(item.imageWords)}" alt="${item.word}">
        </span>
      </span>
    `;

    card.addEventListener("mouseenter", () => speakOnHover(item.word));
    card.addEventListener("focus", () => speakOnHover(item.word));
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      speak(item.word);
    });

    root.append(card);
  });
}

function setupBedroomCards() {
  setupObjectLessonCards(bedroomCardsRoot, bedroomItems, "bedroom-card", getBedroomImage);
}

function getObjectLessonConfig() {
  return {
    items: bedroomItems,
    games: bedroomGames,
    gamesRoot: bedroomGamesRoot,
    gameStates: bedroomGameStates,
    lessonClass: "bedroom",
    gameIdPrefix: "bedroom-game",
    imageGetter: getBedroomImage,
    initialPrompt: "Найди предмет"
  };
}

function renderObjectLessonGames(config) {
  if (!config.gamesRoot) return;
  config.gamesRoot.innerHTML = "";
  config.gameStates.clear();

  config.games.forEach((game, index) => {
    const card = document.createElement("article");
    card.className = `mini-find-game antonym-mini-game ${config.lessonClass}-mini-game ${config.lessonClass}-mini-game-${index + 1}`;
    card.dataset.game = game.id;
    card.id = `${config.gameIdPrefix}-${game.id}`;
    card.innerHTML = `
      <div class="mini-game-intro">
        <span>${game.badge}</span>
        <h3>${game.title}</h3>
        <p>${game.ru}</p>
        ${taskHeartProgressMarkup()}
      </div>
      <div class="mini-game-body">
        <div class="hunt-prompt">
          <div class="target-picture" data-target-picture hidden></div>
          <button class="speaker-button" type="button" data-speaker hidden aria-label="Прослушать слово">♪</button>
          <p data-prompt>${config.initialPrompt}</p>
        </div>
        <div class="antonym-options" data-options></div>
        <p class="feedback" data-feedback aria-live="polite">Выбери ответ.</p>
        <button class="button button-dark" type="button" data-next>Новое слово</button>
      </div>
    `;

    config.gamesRoot.append(card);
    config.gameStates.set(game.id, {
      answer: null,
      answered: false,
      mistakes: 0,
      usedTargets: [],
      score: 0,
      timer: null,
      speechTimer: null,
      hoverMutedUntil: 0,
      root: card
    });
  });
}

function getObjectLessonGameParts(config, game) {
  const state = config.gameStates.get(game.id);
  return {
    state,
    prompt: state.root.querySelector("[data-prompt]"),
    options: state.root.querySelector("[data-options]"),
    feedback: state.root.querySelector("[data-feedback]"),
    next: state.root.querySelector("[data-next]"),
    speaker: state.root.querySelector("[data-speaker]"),
    targetPicture: state.root.querySelector("[data-target-picture]")
  };
}

function makeObjectLessonChoices(items, answer) {
  const distractors = shuffle(items.filter((item) => item.word !== answer.word)).slice(0, 3);
  return shuffle([answer, ...distractors]);
}

function newObjectLessonGameRound(config, game, announce = true) {
  const parts = getObjectLessonGameParts(config, game);
  const target = pickUnusedTarget(parts.state, config.items);
  const choices = makeObjectLessonChoices(config.items, target);

  clearTimeout(parts.state.timer);
  clearTimeout(parts.state.speechTimer);
  parts.state.answer = target;
  parts.state.answered = false;
  resetRoundMistakes(parts.state);
  parts.prompt.textContent = game.prompt(target);
  parts.prompt.className = game.promptClass;
  parts.options.innerHTML = "";
  parts.options.className = `antonym-options ${config.lessonClass}-options ${game.choiceType === "picture" ? "antonym-picture-options" : "antonym-word-options"}`;
  parts.feedback.textContent = "Выбери ответ.";

  if (parts.speaker) {
    parts.speaker.hidden = !game.hasSpeaker;
    parts.speaker.onclick = () => speak(target.word);
  }

  if (parts.targetPicture) {
    parts.targetPicture.hidden = !game.showTargetImage;
    parts.targetPicture.innerHTML = game.showTargetImage
      ? `<img loading="lazy" decoding="async" src="${config.imageGetter(target.image)}" alt="${target.ru}">`
      : "";
  }

  choices.forEach((choice) => {
    const option = document.createElement("button");
    option.type = "button";

    if (game.choiceType === "picture") {
      option.className = `picture-option antonym-picture-option ${config.lessonClass}-picture-option`;
      option.innerHTML = `<img loading="lazy" decoding="async" src="${config.imageGetter(choice.image)}" alt="${choice.ru}">`;
    } else {
      option.className = `antonym-word-option ${config.lessonClass}-word-option`;
      option.textContent = choice.word;
    }

    option.setAttribute("aria-label", `${choice.word}, ${choice.ru}`);
    option.addEventListener("mouseenter", () => speakGameHover(parts.state, choice.word));
    option.addEventListener("focus", () => speakGameHover(parts.state, choice.word));
    option.addEventListener("click", () => checkObjectLessonGameAnswer(config, game, option, choice));
    parts.options.append(option);
  });

  if (announce && game.speakOnNewRound) {
    scheduleGamePromptSpeech(parts.state, target.word);
  }
}

function checkObjectLessonGameAnswer(config, game, option, chosen) {
  const parts = getObjectLessonGameParts(config, game);
  if (parts.state.answered) return;
  const target = parts.state.answer;

  if (chosen.word === target.word) {
    parts.state.answered = true;
    option.classList.add("is-right");
    parts.state.score += 1;
    muteGameHover(parts.state, autoAdvanceDelay + roundAnnouncementDelay + gameHoverQuietAfterPrompt);
    const awardGlobal = shouldAwardGlobalHeart(parts.state);
    const taskHearts = awardTaskHeart(parts.state.root, { awardGlobal });
    parts.feedback.textContent = `Верно! ${target.word} — ${target.ru}.${scoreRuleNote(awardGlobal)}`;
    speak(target.word);
    if (taskHearts < exerciseHeartGoal) {
      parts.state.timer = setTimeout(() => newObjectLessonGameRound(config, game, true), autoAdvanceDelay);
    }
    return;
  }

  markWrongAttempt(parts.state);
  option.classList.add("is-wrong");
  parts.feedback.textContent = "Почти. Попробуй ещё раз.";
  setTimeout(() => option.classList.remove("is-wrong"), 420);
}

function startObjectLessonGames(config) {
  if (!config.gamesRoot) return;
  renderObjectLessonGames(config);
  config.games.forEach((game) => {
    const parts = getObjectLessonGameParts(config, game);
    parts.next.addEventListener("click", () => newObjectLessonGameRound(config, game, true));
    newObjectLessonGameRound(config, game, false);
    registerGameReset(() => {
      resetTargetHistory(parts.state);
      newObjectLessonGameRound(config, game, false);
    });
  });
}

function startBedroomGames() {
  startObjectLessonGames(getObjectLessonConfig());
}

const townGames = [
  {
    id: "find-town-word",
    badge: "Город 01",
    title: "Find the town word",
    ru: "Найди картинку по английскому слову.",
    prompt: (item) => `Найди: ${item.word}`,
    promptClass: "prompt-word",
    choiceType: "picture",
    speakOnNewRound: true
  },
  {
    id: "listen-town-word",
    badge: "Город 02",
    title: "Listen and choose",
    ru: "Послушай слово и выбери правильную картинку.",
    prompt: () => "Послушай и выбери",
    promptClass: "prompt-audio",
    choiceType: "picture",
    hasSpeaker: true,
    speakOnNewRound: true
  },
  {
    id: "russian-clue",
    badge: "Город 03",
    title: "Russian clue",
    ru: "Выбери английское слово по русскому переводу.",
    prompt: (item) => `Найди: ${item.ru}`,
    promptClass: "prompt-ru",
    choiceType: "word-button"
  },
  {
    id: "town-clue",
    badge: "Город 04",
    title: "Town clue",
    ru: "Найди место или предмет по короткой подсказке.",
    prompt: (item) => `Подсказка: ${item.clueRu}`,
    promptClass: "prompt-clue",
    choiceType: "picture"
  },
  {
    id: "picture-word",
    badge: "Город 05",
    title: "Picture word",
    ru: "Посмотри на картинку и выбери английское слово.",
    prompt: () => "Какое это слово?",
    promptClass: "prompt-sentence",
    choiceType: "word-button",
    showTargetImage: true,
    speakOnNewRound: true
  }
];

function getTownImage(fileName) {
  return `assets/images/${fileName}`;
}

function setupTownCards() {
  setupObjectLessonCards(townCardsRoot, townItems, "town-card", getTownImage);
}

function getTownObjectLessonConfig() {
  return {
    items: townItems,
    games: townGames,
    gamesRoot: townGamesRoot,
    gameStates: townGameStates,
    lessonClass: "town",
    gameIdPrefix: "town-game",
    imageGetter: getTownImage,
    initialPrompt: "Найди место"
  };
}

function startTownGames() {
  startObjectLessonGames(getTownObjectLessonConfig());
}

const materialsGames = [
  {
    id: "find-material-word",
    badge: "Материалы 01",
    title: "Find the material",
    ru: "Найди картинку по английскому слову.",
    prompt: (item) => `Найди: ${item.word}`,
    promptClass: "prompt-word",
    choiceType: "picture",
    speakOnNewRound: true
  },
  {
    id: "listen-material-word",
    badge: "Материалы 02",
    title: "Listen and choose",
    ru: "Послушай слово и выбери правильную картинку.",
    prompt: () => "Послушай и выбери",
    promptClass: "prompt-audio",
    choiceType: "picture",
    hasSpeaker: true,
    speakOnNewRound: true
  },
  {
    id: "russian-clue",
    badge: "Материалы 03",
    title: "Russian clue",
    ru: "Выбери английское слово по русскому переводу.",
    prompt: (item) => `Найди: ${item.ru}`,
    promptClass: "prompt-ru",
    choiceType: "word-button"
  },
  {
    id: "material-clue",
    badge: "Материалы 04",
    title: "Material clue",
    ru: "Найди материал по короткой подсказке.",
    prompt: (item) => `Подсказка: ${item.clueRu}`,
    promptClass: "prompt-clue",
    choiceType: "picture"
  },
  {
    id: "picture-word",
    badge: "Материалы 05",
    title: "Picture word",
    ru: "Посмотри на картинку и выбери английское слово.",
    prompt: () => "Какой это материал?",
    promptClass: "prompt-sentence",
    choiceType: "word-button",
    showTargetImage: true,
    speakOnNewRound: true
  }
];

function getMaterialsImage(fileName) {
  return `assets/images/${fileName}`;
}

function setupMaterialsCards() {
  setupObjectLessonCards(materialsCardsRoot, materialsItems, "materials-card", getMaterialsImage);
}

function getMaterialsObjectLessonConfig() {
  return {
    items: materialsItems,
    games: materialsGames,
    gamesRoot: materialsGamesRoot,
    gameStates: materialsGameStates,
    lessonClass: "materials",
    gameIdPrefix: "materials-game",
    imageGetter: getMaterialsImage,
    initialPrompt: "Найди материал"
  };
}

function startMaterialsGames() {
  startObjectLessonGames(getMaterialsObjectLessonConfig());
}

function compactWord(word) {
  return word.replace(/\s+/g, "");
}

function renderWriteTarget(root, target) {
  const pair = target.pairId ? getAntonymPair(target.pairId) : null;
  const targetBox = root.querySelector("[data-target]");
  const imageSrc = pair ? getAntonymImage(pair.image) : `assets/images/${target.image}`;
  const imageAlt = pair ? pair.alt : target.ru;
  const meta = pair ? pair.title : target.clueRu;
  targetBox.innerHTML = `
    <img loading="lazy" decoding="async" src="${imageSrc}" alt="${imageAlt}">
    <div>
      <span>Пиши</span>
      <strong>${target.ru}</strong>
      <small>${meta}</small>
    </div>
    <button class="speaker-button write-speaker" type="button" aria-label="Прослушать слово">♪</button>
  `;
  targetBox.querySelector(".write-speaker").addEventListener("click", () => speak(target.word));
}

function startShapeBuildGame() {
  if (!shapeBuildRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    letters: [],
    picks: [],
    timer: null
  };
  const slots = shapeBuildRoot.querySelector("[data-slots]");
  const bank = shapeBuildRoot.querySelector("[data-bank]");
  const feedback = shapeBuildRoot.querySelector("[data-feedback]");
  const clear = shapeBuildRoot.querySelector("[data-clear]");
  const undo = shapeBuildRoot.querySelector("[data-undo]");
  const hint = shapeBuildRoot.querySelector("[data-hint]");
  const next = shapeBuildRoot.querySelector("[data-next]");

  const updateSlots = () => {
    slots.innerHTML = state.answer.word
      .split("")
      .map((letter, index) => `<span aria-label="letter ${index + 1}">${state.letters[index] || ""}</span>`)
      .join("");
  };

  const resetCurrentAnswer = () => {
    if (state.answered) return;
    state.letters = [];
    state.picks = [];
    bank.querySelectorAll("button").forEach((button) => {
      button.disabled = false;
    });
    feedback.textContent = "Выбери буквы по порядку.";
    updateSlots();
  };

  const checkBuiltWord = () => {
    if (state.answered) return;
    const built = state.letters.join("");
    if (built === state.answer.word) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(shapeBuildRoot, { awardGlobal });
      speak(state.answer.word);
      bank.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(renderBuildRound, autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Буквы чуть перепутались. Давай ещё раз.";
    setTimeout(resetCurrentAnswer, 720);
  };

  const renderBuildRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, shapes);
    state.answered = false;
    resetRoundMistakes(state);
    state.letters = [];
    state.picks = [];
    renderWriteTarget(shapeBuildRoot, state.answer);
    updateSlots();
    feedback.textContent = "Выбери буквы по порядку.";
    bank.innerHTML = "";

    shuffle(state.answer.word.split("").map((letter, index) => ({ letter, index }))).forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "letter-tile";
      button.textContent = item.letter;
      button.addEventListener("click", () => {
        if (state.answered) return;
        state.letters.push(item.letter);
        state.picks.push({ letter: item.letter, button });
        button.disabled = true;
        updateSlots();
        if (state.letters.length === state.answer.word.length) checkBuiltWord();
      });
      bank.append(button);
    });

    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const undoLastLetter = () => {
    if (state.answered) return;
    const lastPick = state.picks.pop();
    if (!lastPick) return;
    state.letters.pop();
    lastPick.button.disabled = false;
    feedback.textContent = "Продолжай собирать слово.";
    updateSlots();
  };

  const addHintLetter = () => {
    if (state.answered || !state.answer || state.letters.length >= state.answer.word.length) return;
    const nextLetter = state.answer.word[state.letters.length];
    const tile = [...bank.querySelectorAll("button:not(:disabled)")].find((button) => button.textContent === nextLetter);
    if (!tile) return;
    feedback.textContent = `Подсказка: следующая буква ${nextLetter.toUpperCase()}.`;
    tile.click();
  };

  clear.addEventListener("click", resetCurrentAnswer);
  undo.addEventListener("click", undoLastLetter);
  hint.addEventListener("click", addHintLetter);
  next.addEventListener("click", () => renderBuildRound(true));
  renderBuildRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderBuildRound(false);
  });
}

function startShapeTypeGame() {
  if (!shapeTypeRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    timer: null
  };
  const feedback = shapeTypeRoot.querySelector("[data-feedback]");
  const input = shapeTypeRoot.querySelector("[data-input]");
  const check = shapeTypeRoot.querySelector("[data-check]");
  const hint = shapeTypeRoot.querySelector("[data-hint]");
  const next = shapeTypeRoot.querySelector("[data-next]");

  const renderTypeRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, shapes);
    state.answered = false;
    resetRoundMistakes(state);
    renderWriteTarget(shapeTypeRoot, state.answer);
    input.value = "";
    input.maxLength = state.answer.word.length;
    input.placeholder = "_".repeat(state.answer.word.length);
    feedback.textContent = "Введи слово и нажми «Проверить».";
    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const checkTypedWord = () => {
    if (state.answered) return;
    const typed = input.value.trim().toLowerCase();
    if (typed === state.answer.word) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(shapeTypeRoot, { awardGlobal });
      speak(state.answer.word);
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(() => renderTypeRound(true), autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Почти. Проверь буквы и попробуй ещё.";
    input.select();
  };

  check.addEventListener("click", checkTypedWord);
  hint.addEventListener("click", () => {
    if (state.answered || !state.answer) return;
    const typed = input.value.trim().toLowerCase();
    let nextLength = 1;
    if (state.answer.word.startsWith(typed)) {
      nextLength = Math.min(state.answer.word.length, typed.length + 1);
    }
    input.value = state.answer.word.slice(0, nextLength);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    feedback.textContent = `Подсказка: ${input.value}${"_".repeat(state.answer.word.length - input.value.length)}`;
  });
  next.addEventListener("click", () => renderTypeRound(true));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkTypedWord();
  });
  renderTypeRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderTypeRound(false);
  });
}

function startAntonymBuildGame() {
  if (!antonymBuildRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    letters: [],
    picks: [],
    score: 0,
    timer: null
  };
  const slots = antonymBuildRoot.querySelector("[data-slots]");
  const bank = antonymBuildRoot.querySelector("[data-bank]");
  const feedback = antonymBuildRoot.querySelector("[data-feedback]");
  const clear = antonymBuildRoot.querySelector("[data-clear]");
  const undo = antonymBuildRoot.querySelector("[data-undo]");
  const hint = antonymBuildRoot.querySelector("[data-hint]");
  const next = antonymBuildRoot.querySelector("[data-next]");

  const updateSlots = () => {
    slots.innerHTML = state.answer.word
      .split("")
      .map((letter, index) => `<span aria-label="letter ${index + 1}">${state.letters[index] || ""}</span>`)
      .join("");
  };

  const resetCurrentAnswer = () => {
    if (state.answered) return;
    state.letters = [];
    state.picks = [];
    bank.querySelectorAll("button").forEach((button) => {
      button.disabled = false;
    });
    feedback.textContent = "Выбери буквы по порядку.";
    updateSlots();
  };

  const checkBuiltWord = () => {
    if (state.answered) return;
    const built = state.letters.join("");
    if (built === state.answer.word) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(antonymBuildRoot, { awardGlobal });
      speak(state.answer.word);
      bank.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(renderBuildRound, autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Буквы чуть перепутались. Давай ещё раз.";
    setTimeout(resetCurrentAnswer, 720);
  };

  const renderBuildRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, antonymWords);
    state.answered = false;
    resetRoundMistakes(state);
    state.letters = [];
    state.picks = [];
    renderWriteTarget(antonymBuildRoot, state.answer);
    updateSlots();
    feedback.textContent = "Выбери буквы по порядку.";
    bank.innerHTML = "";

    shuffle(state.answer.word.split("").map((letter, index) => ({ letter, index }))).forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "letter-tile";
      button.textContent = item.letter;
      button.addEventListener("click", () => {
        if (state.answered) return;
        state.letters.push(item.letter);
        state.picks.push({ letter: item.letter, button });
        button.disabled = true;
        updateSlots();
        if (state.letters.length === state.answer.word.length) checkBuiltWord();
      });
      bank.append(button);
    });

    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const undoLastLetter = () => {
    if (state.answered) return;
    const lastPick = state.picks.pop();
    if (!lastPick) return;
    state.letters.pop();
    lastPick.button.disabled = false;
    feedback.textContent = "Продолжай собирать слово.";
    updateSlots();
  };

  const addHintLetter = () => {
    if (state.answered || !state.answer || state.letters.length >= state.answer.word.length) return;
    const nextLetter = state.answer.word[state.letters.length];
    const tile = [...bank.querySelectorAll("button:not(:disabled)")].find((button) => button.textContent === nextLetter);
    if (!tile) return;
    feedback.textContent = `Подсказка: следующая буква ${nextLetter.toUpperCase()}.`;
    tile.click();
  };

  clear.addEventListener("click", resetCurrentAnswer);
  undo.addEventListener("click", undoLastLetter);
  hint.addEventListener("click", addHintLetter);
  next.addEventListener("click", () => renderBuildRound(true));
  renderBuildRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderBuildRound(false);
  });
}

function startAntonymTypeGame() {
  if (!antonymTypeRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    timer: null
  };
  const feedback = antonymTypeRoot.querySelector("[data-feedback]");
  const input = antonymTypeRoot.querySelector("[data-input]");
  const check = antonymTypeRoot.querySelector("[data-check]");
  const hint = antonymTypeRoot.querySelector("[data-hint]");
  const next = antonymTypeRoot.querySelector("[data-next]");

  const renderTypeRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, antonymWords);
    state.answered = false;
    resetRoundMistakes(state);
    renderWriteTarget(antonymTypeRoot, state.answer);
    input.value = "";
    input.maxLength = state.answer.word.length;
    input.placeholder = "_".repeat(state.answer.word.length);
    feedback.textContent = "Введи слово и нажми «Проверить».";
    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const checkTypedWord = () => {
    if (state.answered) return;
    const typed = input.value.trim().toLowerCase();
    if (typed === state.answer.word) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(antonymTypeRoot, { awardGlobal });
      speak(state.answer.word);
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(() => renderTypeRound(true), autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Почти. Проверь буквы и попробуй ещё.";
    input.select();
  };

  check.addEventListener("click", checkTypedWord);
  hint.addEventListener("click", () => {
    if (state.answered || !state.answer) return;
    const typed = input.value.trim().toLowerCase();
    let nextLength = 1;
    if (state.answer.word.startsWith(typed)) {
      nextLength = Math.min(state.answer.word.length, typed.length + 1);
    }
    input.value = state.answer.word.slice(0, nextLength);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    feedback.textContent = `Подсказка: ${input.value}${"_".repeat(state.answer.word.length - input.value.length)}`;
  });
  next.addEventListener("click", () => renderTypeRound(true));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkTypedWord();
  });
  renderTypeRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderTypeRound(false);
  });
}

function startLivingRoomBuildGame() {
  if (!livingBuildRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    letters: [],
    picks: [],
    timer: null
  };
  const slots = livingBuildRoot.querySelector("[data-slots]");
  const bank = livingBuildRoot.querySelector("[data-bank]");
  const feedback = livingBuildRoot.querySelector("[data-feedback]");
  const clear = livingBuildRoot.querySelector("[data-clear]");
  const undo = livingBuildRoot.querySelector("[data-undo]");
  const hint = livingBuildRoot.querySelector("[data-hint]");
  const next = livingBuildRoot.querySelector("[data-next]");

  const updateSlots = () => {
    slots.innerHTML = state.answer.word
      .split("")
      .map((letter, index) => `<span aria-label="letter ${index + 1}">${state.letters[index] || ""}</span>`)
      .join("");
  };

  const resetCurrentAnswer = () => {
    if (state.answered) return;
    state.letters = [];
    state.picks = [];
    bank.querySelectorAll("button").forEach((button) => {
      button.disabled = false;
    });
    feedback.textContent = "Выбери буквы по порядку.";
    updateSlots();
  };

  const checkBuiltWord = () => {
    if (state.answered) return;
    const built = state.letters.join("");
    if (built === state.answer.word) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(livingBuildRoot, { awardGlobal });
      speak(state.answer.word);
      bank.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(renderBuildRound, autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Буквы чуть перепутались. Давай ещё раз.";
    setTimeout(resetCurrentAnswer, 720);
  };

  const renderBuildRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, livingRoomItems);
    state.answered = false;
    resetRoundMistakes(state);
    state.letters = [];
    state.picks = [];
    renderWriteTarget(livingBuildRoot, state.answer);
    updateSlots();
    feedback.textContent = "Выбери буквы по порядку.";
    bank.innerHTML = "";

    shuffle(state.answer.word.split("").map((letter, index) => ({ letter, index }))).forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "letter-tile";
      button.textContent = item.letter;
      button.addEventListener("click", () => {
        if (state.answered) return;
        state.letters.push(item.letter);
        state.picks.push({ letter: item.letter, button });
        button.disabled = true;
        updateSlots();
        if (state.letters.length === state.answer.word.length) checkBuiltWord();
      });
      bank.append(button);
    });

    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const undoLastLetter = () => {
    if (state.answered) return;
    const lastPick = state.picks.pop();
    if (!lastPick) return;
    state.letters.pop();
    lastPick.button.disabled = false;
    feedback.textContent = "Продолжай собирать слово.";
    updateSlots();
  };

  const addHintLetter = () => {
    if (state.answered || !state.answer || state.letters.length >= state.answer.word.length) return;
    const nextLetter = state.answer.word[state.letters.length];
    const tile = [...bank.querySelectorAll("button:not(:disabled)")].find((button) => button.textContent === nextLetter);
    if (!tile) return;
    feedback.textContent = `Подсказка: следующая буква ${nextLetter.toUpperCase()}.`;
    tile.click();
  };

  clear.addEventListener("click", resetCurrentAnswer);
  undo.addEventListener("click", undoLastLetter);
  hint.addEventListener("click", addHintLetter);
  next.addEventListener("click", () => renderBuildRound(true));
  renderBuildRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderBuildRound(false);
  });
}

function startLivingRoomTypeGame() {
  if (!livingTypeRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    timer: null
  };
  const feedback = livingTypeRoot.querySelector("[data-feedback]");
  const input = livingTypeRoot.querySelector("[data-input]");
  const check = livingTypeRoot.querySelector("[data-check]");
  const hint = livingTypeRoot.querySelector("[data-hint]");
  const next = livingTypeRoot.querySelector("[data-next]");

  const renderTypeRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, livingRoomItems);
    state.answered = false;
    resetRoundMistakes(state);
    renderWriteTarget(livingTypeRoot, state.answer);
    input.value = "";
    input.maxLength = state.answer.word.length;
    input.placeholder = "_".repeat(state.answer.word.length);
    feedback.textContent = "Введи слово и нажми «Проверить».";
    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const checkTypedWord = () => {
    if (state.answered) return;
    const typed = input.value.trim().toLowerCase();
    if (typed === state.answer.word) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(livingTypeRoot, { awardGlobal });
      speak(state.answer.word);
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(() => renderTypeRound(true), autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Почти. Проверь буквы и попробуй ещё.";
    input.select();
  };

  check.addEventListener("click", checkTypedWord);
  hint.addEventListener("click", () => {
    if (state.answered || !state.answer) return;
    const typed = input.value.trim().toLowerCase();
    let nextLength = 1;
    if (state.answer.word.startsWith(typed)) {
      nextLength = Math.min(state.answer.word.length, typed.length + 1);
    }
    input.value = state.answer.word.slice(0, nextLength);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    feedback.textContent = `Подсказка: ${input.value}${"_".repeat(state.answer.word.length - input.value.length)}`;
  });
  next.addEventListener("click", () => renderTypeRound(true));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkTypedWord();
  });
  renderTypeRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderTypeRound(false);
  });
}

function startParkBuildGame() {
  if (!parkBuildRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    letters: [],
    picks: [],
    timer: null
  };
  const slots = parkBuildRoot.querySelector("[data-slots]");
  const bank = parkBuildRoot.querySelector("[data-bank]");
  const feedback = parkBuildRoot.querySelector("[data-feedback]");
  const clear = parkBuildRoot.querySelector("[data-clear]");
  const undo = parkBuildRoot.querySelector("[data-undo]");
  const hint = parkBuildRoot.querySelector("[data-hint]");
  const next = parkBuildRoot.querySelector("[data-next]");

  const getAnswerWord = () => compactWord(state.answer.word);

  const updateSlots = () => {
    const answerWord = getAnswerWord();
    slots.innerHTML = answerWord
      .split("")
      .map((letter, index) => `<span aria-label="letter ${index + 1}">${state.letters[index] || ""}</span>`)
      .join("");
  };

  const resetCurrentAnswer = () => {
    if (state.answered) return;
    state.letters = [];
    state.picks = [];
    bank.querySelectorAll("button").forEach((button) => {
      button.disabled = false;
    });
    feedback.textContent = "Выбери буквы по порядку.";
    updateSlots();
  };

  const checkBuiltWord = () => {
    if (state.answered) return;
    const built = state.letters.join("");
    if (built === getAnswerWord()) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(parkBuildRoot, { awardGlobal });
      speak(state.answer.word);
      bank.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(renderBuildRound, autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Буквы чуть перепутались. Давай ещё раз.";
    setTimeout(resetCurrentAnswer, 720);
  };

  const renderBuildRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, parkItems);
    const answerWord = getAnswerWord();
    state.answered = false;
    resetRoundMistakes(state);
    state.letters = [];
    state.picks = [];
    renderWriteTarget(parkBuildRoot, state.answer);
    updateSlots();
    feedback.textContent = "Выбери буквы по порядку.";
    bank.innerHTML = "";

    shuffle(answerWord.split("").map((letter, index) => ({ letter, index }))).forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "letter-tile";
      button.textContent = item.letter;
      button.addEventListener("click", () => {
        if (state.answered) return;
        state.letters.push(item.letter);
        state.picks.push({ letter: item.letter, button });
        button.disabled = true;
        updateSlots();
        if (state.letters.length === answerWord.length) checkBuiltWord();
      });
      bank.append(button);
    });

    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const undoLastLetter = () => {
    if (state.answered) return;
    const lastPick = state.picks.pop();
    if (!lastPick) return;
    state.letters.pop();
    lastPick.button.disabled = false;
    feedback.textContent = "Продолжай собирать слово.";
    updateSlots();
  };

  const addHintLetter = () => {
    if (state.answered || !state.answer || state.letters.length >= getAnswerWord().length) return;
    const nextLetter = getAnswerWord()[state.letters.length];
    const tile = [...bank.querySelectorAll("button:not(:disabled)")].find((button) => button.textContent === nextLetter);
    if (!tile) return;
    feedback.textContent = `Подсказка: следующая буква ${nextLetter.toUpperCase()}.`;
    tile.click();
  };

  clear.addEventListener("click", resetCurrentAnswer);
  undo.addEventListener("click", undoLastLetter);
  hint.addEventListener("click", addHintLetter);
  next.addEventListener("click", () => renderBuildRound(true));
  renderBuildRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderBuildRound(false);
  });
}

function startParkTypeGame() {
  if (!parkTypeRoot) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    timer: null
  };
  const feedback = parkTypeRoot.querySelector("[data-feedback]");
  const input = parkTypeRoot.querySelector("[data-input]");
  const check = parkTypeRoot.querySelector("[data-check]");
  const hint = parkTypeRoot.querySelector("[data-hint]");
  const next = parkTypeRoot.querySelector("[data-next]");

  const getAnswerWord = () => compactWord(state.answer.word);

  const renderTypeRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, parkItems);
    const answerWord = getAnswerWord();
    state.answered = false;
    resetRoundMistakes(state);
    renderWriteTarget(parkTypeRoot, state.answer);
    input.value = "";
    input.maxLength = state.answer.word.length;
    input.placeholder = "_".repeat(answerWord.length);
    feedback.textContent = "Введи слово и нажми «Проверить».";
    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const checkTypedWord = () => {
    if (state.answered) return;
    const typed = compactWord(input.value.trim().toLowerCase());
    if (typed === getAnswerWord()) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(parkTypeRoot, { awardGlobal });
      speak(state.answer.word);
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(() => renderTypeRound(true), autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Почти. Проверь буквы и попробуй ещё.";
    input.select();
  };

  check.addEventListener("click", checkTypedWord);
  hint.addEventListener("click", () => {
    if (state.answered || !state.answer) return;
    const answerWord = getAnswerWord();
    const typed = compactWord(input.value.trim().toLowerCase());
    let nextLength = 1;
    if (answerWord.startsWith(typed)) {
      nextLength = Math.min(answerWord.length, typed.length + 1);
    }
    input.value = answerWord.slice(0, nextLength);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    feedback.textContent = `Подсказка: ${input.value}${"_".repeat(answerWord.length - input.value.length)}`;
  });
  next.addEventListener("click", () => renderTypeRound(true));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkTypedWord();
  });
  renderTypeRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderTypeRound(false);
  });
}

function startObjectBuildGame(root, items, options = {}) {
  if (!root) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    letters: [],
    picks: [],
    timer: null
  };
  const slots = root.querySelector("[data-slots]");
  const bank = root.querySelector("[data-bank]");
  const feedback = root.querySelector("[data-feedback]");
  const clear = root.querySelector("[data-clear]");
  const undo = root.querySelector("[data-undo]");
  const hint = root.querySelector("[data-hint]");
  const next = root.querySelector("[data-next]");
  const getAnswerWord = () => options.compact ? compactWord(state.answer.word) : state.answer.word;

  const updateSlots = () => {
    const answerWord = getAnswerWord();
    slots.innerHTML = answerWord
      .split("")
      .map((letter, index) => `<span aria-label="letter ${index + 1}">${state.letters[index] || ""}</span>`)
      .join("");
  };

  const resetCurrentAnswer = () => {
    if (state.answered) return;
    state.letters = [];
    state.picks = [];
    bank.querySelectorAll("button").forEach((button) => {
      button.disabled = false;
    });
    feedback.textContent = "Выбери буквы по порядку.";
    updateSlots();
  };

  const checkBuiltWord = () => {
    if (state.answered) return;
    const built = state.letters.join("");
    if (built === getAnswerWord()) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(root, { awardGlobal });
      speak(state.answer.word);
      bank.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(renderBuildRound, autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Буквы чуть перепутались. Давай ещё раз.";
    setTimeout(resetCurrentAnswer, 720);
  };

  const renderBuildRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, items);
    const answerWord = getAnswerWord();
    state.answered = false;
    resetRoundMistakes(state);
    state.letters = [];
    state.picks = [];
    renderWriteTarget(root, state.answer);
    updateSlots();
    feedback.textContent = "Выбери буквы по порядку.";
    bank.innerHTML = "";

    shuffle(answerWord.split("").map((letter, index) => ({ letter, index }))).forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "letter-tile";
      button.textContent = item.letter;
      button.addEventListener("click", () => {
        if (state.answered) return;
        state.letters.push(item.letter);
        state.picks.push({ letter: item.letter, button });
        button.disabled = true;
        updateSlots();
        if (state.letters.length === answerWord.length) checkBuiltWord();
      });
      bank.append(button);
    });

    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const undoLastLetter = () => {
    if (state.answered) return;
    const lastPick = state.picks.pop();
    if (!lastPick) return;
    state.letters.pop();
    lastPick.button.disabled = false;
    feedback.textContent = "Продолжай собирать слово.";
    updateSlots();
  };

  const addHintLetter = () => {
    if (state.answered || !state.answer || state.letters.length >= getAnswerWord().length) return;
    const nextLetter = getAnswerWord()[state.letters.length];
    const tile = [...bank.querySelectorAll("button:not(:disabled)")].find((button) => button.textContent === nextLetter);
    if (!tile) return;
    feedback.textContent = `Подсказка: следующая буква ${nextLetter.toUpperCase()}.`;
    tile.click();
  };

  clear.addEventListener("click", resetCurrentAnswer);
  undo.addEventListener("click", undoLastLetter);
  hint.addEventListener("click", addHintLetter);
  next.addEventListener("click", () => renderBuildRound(true));
  renderBuildRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderBuildRound(false);
  });
}

function startObjectTypeGame(root, items, options = {}) {
  if (!root) return;

  const state = {
    answer: null,
    answered: false,
    mistakes: 0,
    usedTargets: [],
    timer: null
  };
  const feedback = root.querySelector("[data-feedback]");
  const input = root.querySelector("[data-input]");
  const check = root.querySelector("[data-check]");
  const hint = root.querySelector("[data-hint]");
  const next = root.querySelector("[data-next]");
  const getAnswerWord = () => options.compact ? compactWord(state.answer.word) : state.answer.word;

  const renderTypeRound = (announce = true) => {
    clearTimeout(state.timer);
    state.answer = pickUnusedTarget(state, items);
    const answerWord = getAnswerWord();
    state.answered = false;
    resetRoundMistakes(state);
    renderWriteTarget(root, state.answer);
    input.value = "";
    input.maxLength = options.compact ? state.answer.word.length : answerWord.length;
    input.placeholder = "_".repeat(answerWord.length);
    feedback.textContent = "Введи слово и нажми «Проверить».";
    if (announce) setTimeout(() => speak(state.answer.word), 180);
  };

  const checkTypedWord = () => {
    if (state.answered) return;
    const typed = options.compact ? compactWord(input.value.trim().toLowerCase()) : input.value.trim().toLowerCase();
    if (typed === getAnswerWord()) {
      state.answered = true;
      const awardGlobal = shouldAwardGlobalHeart(state);
      feedback.textContent = `Верно! ${state.answer.word} — ${state.answer.ru}.${scoreRuleNote(awardGlobal)}`;
      const taskHearts = awardTaskHeart(root, { awardGlobal });
      speak(state.answer.word);
      if (taskHearts < exerciseHeartGoal) {
        state.timer = setTimeout(() => renderTypeRound(true), autoAdvanceDelay);
      }
      return;
    }

    markWrongAttempt(state);
    feedback.textContent = "Почти. Проверь буквы и попробуй ещё.";
    input.select();
  };

  check.addEventListener("click", checkTypedWord);
  hint.addEventListener("click", () => {
    if (state.answered || !state.answer) return;
    const answerWord = getAnswerWord();
    const typed = options.compact ? compactWord(input.value.trim().toLowerCase()) : input.value.trim().toLowerCase();
    let nextLength = 1;
    if (answerWord.startsWith(typed)) {
      nextLength = Math.min(answerWord.length, typed.length + 1);
    }
    input.value = answerWord.slice(0, nextLength);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    feedback.textContent = `Подсказка: ${input.value}${"_".repeat(answerWord.length - input.value.length)}`;
  });
  next.addEventListener("click", () => renderTypeRound(true));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkTypedWord();
  });
  renderTypeRound(false);
  registerGameReset(() => {
    resetTargetHistory(state);
    renderTypeRound(false);
  });
}

function startBedroomBuildGame() {
  startObjectBuildGame(bedroomBuildRoot, bedroomItems);
}

function startBedroomTypeGame() {
  startObjectTypeGame(bedroomTypeRoot, bedroomItems);
}

function startTownBuildGame() {
  startObjectBuildGame(townBuildRoot, townItems, { compact: true });
}

function startTownTypeGame() {
  startObjectTypeGame(townTypeRoot, townItems, { compact: true });
}

function startMaterialsBuildGame() {
  startObjectBuildGame(materialsBuildRoot, materialsItems);
}

function startMaterialsTypeGame() {
  startObjectTypeGame(materialsTypeRoot, materialsItems);
}

setupVisibleCards();
setupLessonControls();
startFindGames();
startShapeBuildGame();
startShapeTypeGame();
setupAntonymCards();
startAntonymGames();
startAntonymBuildGame();
startAntonymTypeGame();
setupLivingRoomCards();
startLivingRoomGames();
startLivingRoomBuildGame();
startLivingRoomTypeGame();
setupParkCards();
startParkGames();
startParkBuildGame();
startParkTypeGame();
setupBedroomCards();
startBedroomGames();
startBedroomBuildGame();
startBedroomTypeGame();
setupTownCards();
startTownGames();
startTownBuildGame();
startTownTypeGame();
setupMaterialsCards();
startMaterialsGames();
startMaterialsBuildGame();
startMaterialsTypeGame();
setupSpeakerHintObserver();
