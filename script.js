const keyLayoutEn = [
    {mainKey: "`", additional: "~", dataCode: "Backquote"},
    {mainKey: "1", additional: "!", dataCode: "Digit1"}, 
    {mainKey: "2", additional: "@", dataCode: "Digit2"}, 
    {mainKey: "3", additional: "#", dataCode: "Digit3"}, 
    {mainKey: "4", additional: "$", dataCode: "Digit4"}, 
    {mainKey: "5", additional: "%", dataCode: "Digit5"}, 
    {mainKey: "6", additional: "^", dataCode: "Digit6"},
    {mainKey: "7", additional: "&", dataCode: "Digit7"}, 
    {mainKey: "8", additional: "*", dataCode: "Digit8"}, 
    {mainKey: "9", additional: "(", dataCode: "Digit9"}, 
    {mainKey: "0", additional: ")", dataCode: "Digit0"}, 
    {mainKey: "-", additional: "-", dataCode: "Minus"}, 
    {mainKey: "=", additional: "+", dataCode: "Equal"}, 
    {mainKey: "backspace", dataCode: "Backspace"},
    {mainKey: "q", dataCode: "KeyQ"}, 
    {mainKey: "w", dataCode: "KeyW"}, 
    {mainKey: "e", dataCode: "KeyE"}, 
    {mainKey: "r", dataCode: "KeyR"}, 
    {mainKey: "t", dataCode: "KeyT"}, 
    {mainKey: "y", dataCode: "KeyY"}, 
    {mainKey: "u", dataCode: "KeyU"}, 
    {mainKey: "i", dataCode: "KeyI"}, 
    {mainKey: "o", dataCode: "KeyO"}, 
    {mainKey: "p", dataCode: "KeyP"},
    {mainKey: "[", additional: "{", dataCode: "BracketLeft"}, 
    {mainKey: "]", additional: "}", dataCode: "BracketRight"}, 
    {mainKey: "\\", additional: "|", dataCode: "Backslash"},
    {mainKey: "sound", dataCode: "Sound"}, 
    {mainKey: "done"},
    {mainKey: "caps", dataCode: "CapsLock"},
    {mainKey: "a", dataCode: "KeyA"}, 
    {mainKey: "s", dataCode: "KeyS"}, 
    {mainKey: "d", dataCode: "KeyD"}, 
    {mainKey: "f", dataCode: "KeyF"}, 
    {mainKey: "g", dataCode: "KeyG"}, 
    {mainKey: "h", dataCode: "KeyH"},
    {mainKey: "j", dataCode: "KeyJ"}, 
    {mainKey: "k", dataCode: "KeyK"}, 
    {mainKey: "l", dataCode: "KeyL"}, 
    {mainKey: ";", additional: ":", dataCode: "Semicolon"},
    {mainKey: "\'", additional: "\"", dataCode: "Quote"}, 
    {mainKey: "enter", dataCode: "Enter"}, 
    {mainKey: "shift", dataCode: "ShiftLeft"}, 
    {mainKey: "z", dataCode: "KeyZ"}, 
    {mainKey: "x", dataCode: "KeyX"}, 
    {mainKey: "c", dataCode: "KeyC"}, 
    {mainKey: "v", dataCode: "KeyV"}, 
    {mainKey: "b", dataCode: "KeyB"}, 
    {mainKey: "n", dataCode: "KeyN"}, 
    {mainKey: "m", dataCode: "KeyM"}, 
    {mainKey: ",", additional: "<", dataCode: "Comma"},
    {mainKey: ".", additional: ">", dataCode: "Period"},
    {mainKey: "/", additional: "?", dataCode: "Slash"},
    {mainKey: "←", dataCode: "ArrowLeft"}, 
    {mainKey: "→", dataCode: "ArrowRight"},
    {mainKey: "lang"}, 
    {mainKey: "speech", dataCode: "Speech"}, 
    {mainKey: "space", dataCode: "Space"}
];

const keyLayoutRu = [
    {mainKey:"ё", dataCode: "Backquote"}, 
    {mainKey:"1", additional: "!", dataCode: "Digit1"}, 
    {mainKey:"2", additional: "\"", dataCode: "Digit2"}, 
    {mainKey:"3", additional: "№", dataCode: "Digit3"}, 
    {mainKey:"4", additional: ";", dataCode: "Digit4"}, 
    {mainKey:"5", additional: "%", dataCode: "Digit5"}, 
    {mainKey:"6", additional: ":", dataCode: "Digit6"},
    {mainKey:"7", additional: "?", dataCode: "Digit7"}, 
    {mainKey:"8", additional: "*", dataCode: "Digit8"}, 
    {mainKey:"9", additional: "(", dataCode: "Digit9"}, 
    {mainKey:"0", additional: ")", dataCode: "Digit0"}, 
    {mainKey:"-", additional: "-", dataCode: "Minus"}, 
    {mainKey:"=", additional: "+", dataCode: "Equal"}, 
    {mainKey:"backspace", dataCode: "Backspace"},
    {mainKey:"й", dataCode: "KeyQ"}, 
    {mainKey:"ц", dataCode: "KeyW"}, 
    {mainKey:"у", dataCode: "KeyE"}, 
    {mainKey:"к", dataCode: "KeyR"}, 
    {mainKey:"е", dataCode: "KeyT"}, 
    {mainKey:"н", dataCode: "KeyY"}, 
    {mainKey:"г", dataCode: "KeyU"}, 
    {mainKey:"ш", dataCode: "KeyI"}, 
    {mainKey:"щ", dataCode: "KeyO"}, 
    {mainKey:"з", dataCode: "KeyP"},
    {mainKey:"х", dataCode: "BracketLeft"}, 
    {mainKey:"ъ", dataCode: "BracketRight"}, 
    {mainKey:"\\", additional: "/", dataCode: "Backslash"}, 
    {mainKey: "sound", dataCode: "Sound"}, 
    {mainKey: "done"},
    {mainKey:"caps", dataCode: "CapsLock"}, 
    {mainKey:"ф", dataCode: "KeyA"}, 
    {mainKey:"ы", dataCode: "KeyS"}, 
    {mainKey:"в", dataCode: "KeyD"}, 
    {mainKey:"а", dataCode: "KeyF"}, 
    {mainKey:"п", dataCode: "KeyG"}, 
    {mainKey:"р", dataCode: "KeyH"}, 
    {mainKey:"о", dataCode: "KeyJ"}, 
    {mainKey:"л", dataCode: "KeyK"}, 
    {mainKey:"д", dataCode: "KeyL"}, 
    {mainKey:"ж", dataCode: "Semicolon"}, 
    {mainKey:"э", dataCode: "Quote"}, 
    {mainKey: "enter", dataCode: "Enter"}, 
    {mainKey: "shift", dataCode: "ShiftLeft"}, 
    {mainKey:"я", dataCode: "KeyZ"}, 
    {mainKey:"ч", dataCode: "KeyX"}, 
    {mainKey:"с", dataCode: "KeyC"}, 
    {mainKey:"м", dataCode: "KeyV"}, 
    {mainKey:"и", dataCode: "KeyB"}, 
    {mainKey:"т", dataCode: "KeyN"}, 
    {mainKey:"ь", dataCode: "KeyM"}, 
    {mainKey:"б", dataCode: "Comma"}, 
    {mainKey:"ю", dataCode: "Period"},
    {mainKey:".", additional: ",", dataCode: "Slash"},
    {mainKey: "←", dataCode: "ArrowLeft"}, 
    {mainKey: "→", dataCode: "ArrowRight"},
    {mainKey: "lang"}, 
    {mainKey: "speech", dataCode: "Speech"},
    {mainKey: "space", dataCode: "Space"}
];

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class Keyboard {
    constructor() {
        this.mainElement = null;
        this.keysContainer = null;
        this.keys = [];
        this.capsLock = false;
        this.value = '';
        this.eventHandlers = {
            oninput: null,
            onclose: null
        };
        this.textArea = null;
        this.lang = 'en';
        this.shift = false;
        this.sound = false;
        this.recognition = false;
    }

    init() {
        this.mainElement = document.createElement('section');
        this.keysContainer = document.createElement('div');

        this.mainElement.classList.add("keyboard", "keyboard--hidden");
        this.keysContainer.classList.add("keyboard__keys");

        this.keysContainer.appendChild(this.createKeys(this.lang));
        this.mainElement.appendChild(this.keysContainer);
        document.body.appendChild(this.mainElement);

        this.keys = document.querySelectorAll(".keyboard__key");

        this.textArea = document.querySelector('#use-keyboard-input');

        this.textArea.addEventListener('focus', (event) => {
            this.open(event.target.value,  (currentValue) => {
                event.target.value = currentValue;
            })
        });

        this.speechRecognizer = new SpeechRecognition();

        this.speechRecognizer.interimResults = true;
        this.speechRecognizer.continuous = true;
        this.speechRecognizer.lang = this.lang === 'en' ? 'en-US' : 'ru-RU';

        this.speechRecognizer.onstart = () => {
            this.taleValue = this.value ? this.value : '';
        };

        this.speechRecognizer.addEventListener('result', (e) => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

                this.value = this.taleValue + transcript;

            this.triggerEvent("oninput");
        });
    }

    createIconHTML = iconName => `<i class="material-icons">${iconName}</i>`;

    createKeys(lang) {
        const fragment = document.createDocumentFragment();

        let currentKeyLayout = lang === 'en' ? keyLayoutEn : keyLayoutRu;

        currentKeyLayout.forEach(key => {
            const mainKey = this.capsLock ? key.mainKey.toUpperCase() : key.mainKey.toLowerCase();
            const additionKey = key.additional || "";
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "sound", "enter", "?"].includes(mainKey.toLowerCase());

            keyElement.setAttribute("type", "button");
            keyElement.setAttribute("data-code", key.dataCode);
            keyElement.classList.add("keyboard__key");

            if (this.shift) {
                keyElement.classList.add("keyboard__key--shifted");
            }

            switch (mainKey) {
                case "backspace":
                case "BACKSPACE": 
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = this.createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        const selectionStart = this.textArea.selectionStart;
                        const currentCursorPosition = this.textArea.selectionEnd;
                        let futureCursorPosition = currentCursorPosition - 1;

                        if (futureCursorPosition < 0) {
                            this.textArea.focus();
                            this.setCursor(0);
                            this.playSound("backspace");
                            return;
                        }

                        let removeSymbolCount = 1;

                        if (selectionStart !== currentCursorPosition) {
                            futureCursorPosition = selectionStart;
                            removeSymbolCount = currentCursorPosition - selectionStart;
                        }

                        this.value = this.textArea.value;

                        const arrValue = this.value.split('');
                        arrValue.splice(futureCursorPosition, removeSymbolCount);
                        
                        this.value = arrValue.join('');
                        this.triggerEvent("oninput");
                        this.textArea.focus();
                        this.setCursor(futureCursorPosition);
                        this.playSound("backspace");
                        
                    });

                    break;

                case "caps": 
                case "CAPS": 
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");

                    if (this.capsLock) {
                        keyElement.classList.add("keyboard__key--active");
                    }

                    keyElement.innerHTML = this.createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this.toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.capsLock);
                        this.textArea.focus();
                        this.playSound("capslock");
                    });

                    break;

                case "enter": 
                case "ENTER": 
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = this.createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        const currentCursorPosition = this.textArea.selectionEnd;
                        this.recordSymbol(currentCursorPosition, '\n');
                        this.triggerEvent("oninput");
                        this.textArea.focus();
                        this.setCursor(currentCursorPosition + 1);
                        this.playSound('enter');
                    });

                    break;

                case "space": 
                case "SPACE": 
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = this.createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        const currentCursorPosition = this.textArea.selectionEnd;
                        this.recordSymbol(currentCursorPosition, ' ');
                        this.triggerEvent("oninput");
                        this.textArea.focus();
                        this.setCursor(currentCursorPosition + 1);
                        this.playSound('default');
                    });

                    break;

                case "done": 
                case "DONE": 
                    keyElement.classList.add("keyboard__key", "keyboard__key--dark");
                    keyElement.innerHTML = this.createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this.triggerEvent("onclose");
                        this.playSound('default');
                    });

                    break;
                case "←":
                    keyElement.textContent = mainKey.toLowerCase();
                    keyElement.addEventListener("click", () => {
                        this.moveCursorLeft();
                        this.textArea.focus();
                        this.playSound('default');
                    });

                    break;
                case "→":
                    keyElement.textContent = mainKey.toLowerCase();
                    keyElement.addEventListener("click", () => {
                        this.moveCursorRight();
                        this.textArea.focus();
                        this.playSound('default');
                    });

                    break;
                case "lang":
                case "LANG": 
                    keyElement.textContent = this.lang.toLowerCase();
                    keyElement.addEventListener("click", () => {
                        this.playSound('default');
                        this.toggleLang();
                        this.keysContainer.innerHTML = '';
                        this.keysContainer.appendChild(this.createKeys(this.lang));
                        this.keys = document.querySelectorAll(".keyboard__key");
                        this.textArea.focus();
                    });

                    break;
                case "shift":
                case "SHIFT": 
                    if (this.shift) {
                        keyElement.classList.add("keyboard__key--pushed");
                    }

                    keyElement.innerHTML = this.createIconHTML("north");
                    keyElement.addEventListener("click", (event) => {
                        this.toggleShift();
                        const shiftKey = document.querySelector('.keyboard__key[data-code="ShiftLeft"]');

                        shiftKey.classList.toggle('keyboard__key--pushed');

                        this.keys.forEach(key => {
                            key.classList.toggle("keyboard__key--shifted");
                        });

                        this.textArea.focus();
                        this.playSound("shift");
                    });

                    break;

                case "sound":
                case "SOUND": 
                    let icon = this.sound ? this.createIconHTML('volume_up'): this.createIconHTML('volume_off');
                    keyElement.innerHTML = icon;

                    keyElement.addEventListener("click", () => {
                        this.playSound("default");
                        this.toggleSound();
                        this.textArea.focus();
                    });

                    break;

                case "speech":
                case "SPEECH": 
                    let speechIcon = this.recognition ? this.createIconHTML('record_voice_over'): this.createIconHTML('voice_over_off');
                    keyElement.innerHTML = speechIcon;

                    keyElement.addEventListener("click", () => {
                        this.playSound("default");
                        this.toggleSpeechRecognition();
                        this.textArea.focus();
                    });

                    break;

                default:
                    keyElement.innerHTML = `
                        <span class="main">${mainKey}</span>
                        <span class="additional">${additionKey}</span>
                    `;

                    keyElement.addEventListener("click", () => {
                        this.value = this.textArea.value;
                        let currentSymbol = mainKey.toLowerCase();

                        if (this.capsLock) {
                            currentSymbol = mainKey.toUpperCase();
                        }

                        if (this.shift) {
                            if (additionKey) {
                                currentSymbol = additionKey;
                            } else {
                                if (this.capsLock) {
                                    currentSymbol = mainKey.toLowerCase();
                                } else {
                                    currentSymbol = mainKey.toUpperCase();
                                }
                            }
                        }

                        const currentCursorPosition = this.textArea.selectionEnd;

                        this.recordSymbol(currentCursorPosition, currentSymbol);

                        this.triggerEvent("oninput");
                        this.textArea.focus();
                        this.setCursor(currentCursorPosition + 1);
                        this.playSound('default');
                    });
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });
        
        return fragment;
    }

    toggleLang() {
        const currentLang = this.lang;
        this.lang = currentLang === 'en' ? 'ru' : 'en';
        
        // it cound be done with separated method like initSpeechRecognizer but it doesn't work this way

        this.speechRecognizer = null;   
        this.speechRecognizer = new SpeechRecognition();

        this.speechRecognizer.interimResults = true;
        this.speechRecognizer.continuous = true;
        this.speechRecognizer.lang = this.lang === 'en' ? 'en-US' : 'ru-RU';

        this.speechRecognizer.onstart = () => {
            this.taleValue = this.value ? this.value : '';
        };

        this.speechRecognizer.addEventListener('result', (e) => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            this.value = this.taleValue + ' ' + transcript;
            
            this.triggerEvent("oninput");
        });

        if (this.recognition) {
            this.speechRecognizer.start();
        }
    }

    setCursor(cursorPosition) {
        this.textArea.selectionEnd = cursorPosition;
        this.textArea.selectionStart = cursorPosition;
    }

    moveCursorLeft() {
        const currentCursor = this.textArea.selectionEnd;
        const newCursorPosition = this.textArea.selectionEnd > 0 ? currentCursor - 1 : 0;
        this.setCursor(newCursorPosition)
    }

    moveCursorRight() {
        const currentCursor = this.textArea.selectionEnd;
        const currentRowLength = this.textArea.value.length;
        const newCursorPosition = currentCursor === currentRowLength ? currentRowLength : currentCursor + 1;
        this.setCursor(newCursorPosition);
    }

    triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] === 'function') {
            this.eventHandlers[handlerName](this.value)
        }
    }

    toggleCapsLock() {
        this.capsLock = !this.capsLock;

        for (const key of this.keys) {
            const main = key.querySelector('.main');

            if (main) {
                main.textContent = this.capsLock ? main.textContent.toUpperCase() : main.textContent.toLowerCase();
            }
        }
    }

    toggleShift() {
        this.shift = !this.shift;
    }

    open(initialValue, oninput, onclose) {
        this.value = initialValue || '';
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.mainElement.classList.remove('keyboard--hidden');
    }

    close() {
        this.value = '';
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.mainElement.classList.add('keyboard--hidden');
    }

    playSound(type = 'default') {
        if (!this.sound) {
            return;
        }
        
        let audio;

        if (type === 'default') {
            if (this.lang === 'en') {
                audio = document.getElementById('default-en-sound')
            } else {
                audio = document.getElementById('default-ru-sound')
            }
        } else {
            audio = document.getElementById(`${type}-sound`)
        }

        audio.play();
    }

    toggleSound() {
        this.sound = !this.sound;

        const soundBtn = document.querySelector('.keyboard__key[data-code="Sound"]');

        let icon = this.sound ? this.createIconHTML('volume_up') : this.createIconHTML('volume_off');

        soundBtn.innerHTML = icon;
    }

    recordSymbol(cursorPosition, symbol) {
        const arrValue = this.value.split('');
        arrValue.splice(cursorPosition, 0, symbol);
        this.value = arrValue.join('');
    }

    toggleSpeechRecognition() {
        this.recognition = !this.recognition;

        const speechBtn = document.querySelector('.keyboard__key[data-code="Speech"]');

        if (this.recognition) {
            this.speechRecognizer.start();
        } else {
            this.speechRecognizer.stop();
        }

        let icon = this.recognition ? this.createIconHTML('record_voice_over'): this.createIconHTML('voice_over_off');

        speechBtn.innerHTML = icon;
    }
}

let keyboard;

window.addEventListener("DOMContentLoaded", () => {
    keyboard = new Keyboard();
    keyboard.init();
})

document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const key = document.querySelector(`.keyboard__key[data-code="${event.code}"]`) || null;

    if (!key) {
        return
    }

    key.click();
    key.classList.add('keyboard__key--clicked');
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();

    const key = document.querySelector(`.keyboard__key[data-code="${event.code}"]`) || null;

    if (key && event.which === 20) {
        key.click();
    }

    if (key) {
        key.classList.remove('keyboard__key--clicked');
    }

    
});