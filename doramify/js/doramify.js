function doramify(args, callback) {
    const translate = require('google-translate-api');
    translate(args, {
        to: 'ko'
    }).then(res => {

        translate(res.text, {
            to: 'ja'
        }).then(res => {

            translate(res.text, {
                to: 'en'
            }).then(res => {
                let a = Math.floor(Math.random() * 4);
                let result = res.text.replace(/null/g, "");
                result = result.replace(/Null/g, "");

                var ratioRami = 8

                if (result.length > 20) {
                    for (r = 0; r < result.length; r++) {
                        if (result[r] == ',') {
                            let gen = Math.floor(Math.random() * ratioRami + 1);
                            if (gen === 6 && !result.indexOf('xD') > -1 && !result.indexOf('XD') > -1) {
                                result = result.substr(0, r) + ', ;3;' + result.substr(r + 1);
                            }
                            if (gen === 5) {
                                result = result.substr(0, r) + ', 8)' + result.substr(r + 1);
                            }
                        }
                        if (result[r] == '.') {
                            let gen = Math.floor(Math.random() * ratioRami + 1);
                            if (gen === 6 && !result.indexOf('xD') > -1 && !result.indexOf('XD') > -1) {
                                result = result.substr(0, r) + '. ;3;' + result.substr(r + 1);
                            }
                            if (gen === 5) {
                                result = result.substr(0, r) + '. 8)' + result.substr(r + 1);
                            }
                        }
                    }
                }

                result = result.replace(/ i /g, " doramis ");
                result = result.replace(/ I /g, " Rami ");
                result = result.replace(/ I'm /g, " Rami is ");
                result = result.replace(/ i'm /g, " dorami ");
                result = result.replace(/ My /g, " rami ");
                result = result.replace(/ my /g, " rami's ");
                result = result.replace(/ me /g, " rami ");
                result = result.replace(/ Me /g, " Rami ");
                result = result.replace(/Holy shit /g, "Holy wow ;3; ");
                result = result.replace(/Holy fuck /g, "Holy nut ;3; ");
                result = result.replace(/holy shit /g, "Holy pennis ;3; ");
                result = result.replace(/holy fuck /g, "Holy horn ;3; ");
                result = result.replace(/fuck/g, "fu\\*k");
                result = result.replace(/Fuck/g, "Fu\\*k");
                result = result.replace(/shit/g, "sh\\*t");
                result = result.replace(/Shit/g, "Sh\\*t");
                result = result.replace(/horny /g, "horn ");
                result = result.replace(/Horny /g, "Horn ");
                result = result.replace(/Horny /g, "Horn ");
                result = result.replace(/penis /g, "pennis ");
                result = result.replace(/Penis /g, "Pennis ");
                result = result.replace(/cum /g, "nut ");
                result = result.replace(/Cum /g, "Nut ");
                result = result.replace(/level /g, "lvl ");
                result = result.replace(/Level /g, "Lvl ");
                result = result.replace(/LEVEL /g, "LVL ");
                result = result.replace(/please /g, "plz ");
                result = result.replace(/Please /g, "Plz ;33;");
                result = result.replace(/pls /g, "plz ;3; ");
                result = result.replace(/Pls /g, "Plz ;3; ");
                result = result.replace(/PLEASE /g, "PLZ ");
                result = result.replace(/PLS /g, "PLZ ;3;");
                result = result.replace(/!/g, "!!");

                if (a == 0 || result.indexOf(':(') > -1 || result.indexOf('rami') > -1 && !result.indexOf(';3;') > -1 && !result.indexOf('xD') > -1 && !result.indexOf('XD') > -1) {
                    result = result + ' ;3;'
                } else if (a == 1) {
                    result = result + ' 8)'
                } else if (a == 2) {
                    result = result + '...'
                } else if (a == 3 && !result.indexOf('xD') > -1 && !result.indexOf('XD') > -1) {
                    result = result + ' '
                }



                callback(result);


            }).catch(err => {
                console.error(err);
                callback('Too long (Or there was an unrelated error)');
            });

        }).catch(err => {
            console.error(err);
            callback('Too long (Or there was an unrelated error)');
        });

    }).catch(err => {
        console.error(err);
        callback('Too long (Or there was an unrelated error)');
    });
}

doramify('Hello friends, i am gay.', function (result) {
    console.log(result)
})