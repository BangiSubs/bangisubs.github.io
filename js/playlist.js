// SCRAPE URL FOR PARAMETERS
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// MAKE VARS
var playlist = document.getElementById('playlist');
var tlgur = "https://tlgur.com/d/";

// GET AUDIO LINKS
var m0 = getUrlVars().m0;
document.getElementById('0a').setAttribute('ml',m0);
document.getElementById('0b').setAttribute('href',tlgur + m0);

var m1 = getUrlVars().m1;
playlist.children[0].setAttribute('ml',m1);
playlist.children[1].setAttribute('href',tlgur + m1);
var m2 = getUrlVars().m2;
playlist.children[2].setAttribute('ml',m2);
playlist.children[3].setAttribute('href',tlgur + m2);
var m3 = getUrlVars().m3;
playlist.children[4].setAttribute('ml',m3);
playlist.children[5].setAttribute('href',tlgur + m3);
var m4 = getUrlVars().m4;
playlist.children[6].setAttribute('ml',m4);
playlist.children[7].setAttribute('href',tlgur + m4);
var m5 = getUrlVars().m5;
playlist.children[8].setAttribute('ml',m5);
playlist.children[9].setAttribute('href',tlgur + m5);
var m6 = getUrlVars().m6;
playlist.children[10].setAttribute('ml',m6);
playlist.children[11].setAttribute('href',tlgur + m6);
var m7 = getUrlVars().m7;
playlist.children[12].setAttribute('ml',m7);
playlist.children[13].setAttribute('href',tlgur + m7);
var m8 = getUrlVars().m8;
playlist.children[14].setAttribute('ml',m8);
playlist.children[15].setAttribute('href',tlgur + m8);
var m9 = getUrlVars().m9;
playlist.children[16].setAttribute('ml',m9);
playlist.children[17].setAttribute('href',tlgur + m9);
var m10 = getUrlVars().m10;
playlist.children[18].setAttribute('ml',m10);
playlist.children[19].setAttribute('href',tlgur + m10);
var m11 = getUrlVars().m11;
playlist.children[20].setAttribute('ml',m11);
playlist.children[21].setAttribute('href',tlgur + m11);
var m12 = getUrlVars().m12;
playlist.children[22].setAttribute('ml',m12);
playlist.children[23].setAttribute('href',tlgur + m12);
var m13 = getUrlVars().m13;
playlist.children[24].setAttribute('ml',m13);
playlist.children[25].setAttribute('href',tlgur + m13);
var m14 = getUrlVars().m14;
playlist.children[26].setAttribute('ml',m14);
playlist.children[27].setAttribute('href',tlgur + m14);
var m15 = getUrlVars().m15;
playlist.children[28].setAttribute('ml',m15);
playlist.children[29].setAttribute('href',tlgur + m15);
var m16 = getUrlVars().m16;
playlist.children[30].setAttribute('ml',m16);
playlist.children[31].setAttribute('href',tlgur + m16);
var m17 = getUrlVars().m17;
playlist.children[32].setAttribute('ml',m17);
playlist.children[33].setAttribute('href',tlgur + m17);
var m18 = getUrlVars().m18;
playlist.children[34].setAttribute('ml',m18);
playlist.children[35].setAttribute('href',tlgur + m18);
var m19 = getUrlVars().m19;
playlist.children[36].setAttribute('ml',m19);
playlist.children[37].setAttribute('href',tlgur + m19);
var m20 = getUrlVars().m20;
playlist.children[38].setAttribute('ml',m20);
playlist.children[39].setAttribute('href',tlgur + m20);

// GET AUDIO TITLES
var t0 = getUrlVars().t0.replaceAll("+"," ");
document.getElementById('0a').children[0].innerText = decodeURIComponent(t0);

var t1 = getUrlVars().t1.replaceAll('+'," ");
playlist.children[0].children[0].innerText = decodeURIComponent(t1);
var t2 = getUrlVars().t2.replaceAll('+'," ");
playlist.children[2].children[0].innerText = decodeURIComponent(t2);
var t3 = getUrlVars().t3.replaceAll('+'," ");
playlist.children[4].children[0].innerText = decodeURIComponent(t3);
var t4 = getUrlVars().t4.replaceAll('+'," ");
playlist.children[6].children[0].innerText = decodeURIComponent(t4);
var t5 = getUrlVars().t5.replaceAll('+'," ");
playlist.children[8].children[0].innerText = decodeURIComponent(t5);
var t6 = getUrlVars().t6.replaceAll('+'," ");
playlist.children[10].children[0].innerText = decodeURIComponent(t6);
var t7 = getUrlVars().t7.replaceAll('+'," ");
playlist.children[12].children[0].innerText = decodeURIComponent(t7);
var t8 = getUrlVars().t8.replaceAll('+'," ");
playlist.children[14].children[0].innerText = decodeURIComponent(t8);
var t9 = getUrlVars().t9.replaceAll('+'," ");
playlist.children[16].children[0].innerText = decodeURIComponent(t9);
var t10 = getUrlVars().t10.replaceAll('+'," ");
playlist.children[18].children[0].innerText = decodeURIComponent(t10);
var t11 = getUrlVars().t11.replaceAll('+'," ");
playlist.children[20].children[0].innerText = decodeURIComponent(t11);
var t12 = getUrlVars().t12.replaceAll('+'," ");
playlist.children[22].children[0].innerText = decodeURIComponent(t12);
var t13 = getUrlVars().t13.replaceAll('+'," ");
playlist.children[24].children[0].innerText = decodeURIComponent(t13);
var t14 = getUrlVars().t14.replaceAll('+'," ");
playlist.children[26].children[0].innerText = decodeURIComponent(t14);
var t15 = getUrlVars().t15.replaceAll('+'," ");
playlist.children[28].children[0].innerText = decodeURIComponent(t15);
var t16 = getUrlVars().t16.replaceAll('+'," ");
playlist.children[30].children[0].innerText = decodeURIComponent(t16);
var t17 = getUrlVars().t17.replaceAll('+'," ");
playlist.children[32].children[0].innerText = decodeURIComponent(t17);
var t18 = getUrlVars().t18.replaceAll('+'," ");
playlist.children[34].children[0].innerText = decodeURIComponent(t18);
var t19 = getUrlVars().t19.replaceAll('+'," ");
playlist.children[36].children[0].innerText = decodeURIComponent(t19);
var t20 = getUrlVars().t20.replaceAll('+'," ");
playlist.children[38].children[0].innerText = decodeURIComponent(t20);