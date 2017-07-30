function emojify(message, emoji) {
    var returns = message;
    for (i = 0; i < returns.length; i++) {
        if (returns[i] == ' ') {
            if (Math.floor(Math.random() * 2) == 1) {
                returns = returns.substr(0, i) + ' ' + emoji[Math.floor(Math.random() * emoji.length)] + '1234rfgyhu8o2f6tovy7g6tUOV6F5tod5TIYfyuoFfyo6toFud6O&898Oc6of6of&8ug' + returns.substr(i + 1);
            }
        }
    }
    if (returns.indexOf('1234rfgyhu8o2f6tovy7g6tUOV6F5tod5TIYfyuoFfyo6toFud6O&898Oc6of6of&8ug') == -1) {
        returns = returns.replace(' ', emoji[Math.floor(Math.random() * emoji.length)] + '1234rfgyhu8o2f6tovy7g6tUOV6F5tod5TIYfyuoFfyo6toFud6O&898Oc6of6of&8ug')
    }
    returns = returns.replace(/1234rfgyhu8o2f6tovy7g6tUOV6F5tod5TIYfyuoFfyo6toFud6O&898Oc6of6of&8ug/g, ' ')
    return returns;
}

function jumbo(message) {
    var call = message.toLowerCase()
    call = call.replace(/ /g, "  ").replace(/&nbsp;/g, ' ')
    call = call.split("")
    console.log(call)
    conversion = {
        a: '&#x1F170',
        b: '&#x1F171',
        c: '&#x1F1E8',
        d: '&#x1F1E9',
        e: '&#x1F1EA',
        f: '&#x1F1EB',
        g: '&#x1F1EC',
        h: '&#x1F1ED',
        i: '&#x1F1EE',
        j: '&#x1F1EF',
        k: '&#x1F1F0',
        l: '&#x1F1F1',
        m: '&#x1F1F2',
        n: '&#x1F1F3',
        o: '&#x1F1F4',
        p: '&#x1F1F5',
        q: '&#x1F1F6',
        r: '&#x1F1F7',
        s: '&#x1F1F8',
        t: '&#x1F1F9',
        u: '&#x1F1FA',
        v: '&#x1F1FB',
        w: '&#x1F1FC',
        x: '&#x1F1FD',
        y: '&#x1F1FE',
        z: '&#x1F1FF',
    }
    for (i = 0; i < call.length; i++) {
        for (letter in conversion) {
            if (call[i] == letter) {
                call[i] = conversion[letter] + " "
            }
        }
    }
     console.log(call.join(''))
    return call.join("");

}