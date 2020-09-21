// ALBUM COVER / TITLE
var album = getUrlVars().a.replaceAll('+'," ");
document.getElementById('name').innerText = decodeURIComponent(album);
var band = getUrlVars().b.replaceAll('+'," ");
document.getElementById('author').innerText = decodeURIComponent(band);
var img = getUrlVars().c.replaceAll('+'," ");
document.getElementById('art').src = tlgur + img;
var ttl = album + ' - ' + band + ' | TruTunes';
document.title = decodeURIComponent(ttl);

// VISIBILITY
var v = getUrlVars().v;

if (v >= 2) {
    playlist.children[0].style.display = "block";
	playlist.children[1].style.display = "block";
}
if (v >= 3) {
    playlist.children[2].style.display = "block";
	playlist.children[3].style.display = "block";
}
if (v >= 4) {
    playlist.children[4].style.display = "block";
	playlist.children[5].style.display = "block";
}
if (v >= 5) {
    playlist.children[6].style.display = "block";
	playlist.children[7].style.display = "block";
}
if (v >= 6) {
    playlist.children[8].style.display = "block";
	playlist.children[9].style.display = "block";
}
if (v >= 7) {
    playlist.children[10].style.display = "block";
	playlist.children[11].style.display = "block";
}
if (v >= 8) {
    playlist.children[12].style.display = "block";
	playlist.children[13].style.display = "block";
}
if (v >= 9) {
    playlist.children[14].style.display = "block";
	playlist.children[15].style.display = "block";
}
if (v >= 10) {
    playlist.children[16].style.display = "block";
	playlist.children[17].style.display = "block";
}
if (v >= 11) {
    playlist.children[18].style.display = "block";
	playlist.children[19].style.display = "block";
}
if (v >= 12) {
    playlist.children[20].style.display = "block";
	playlist.children[21].style.display = "block";
}
if (v >= 13) {
    playlist.children[22].style.display = "block";
	playlist.children[23].style.display = "block";
}
if (v >= 14) {
    playlist.children[24].style.display = "block";
	playlist.children[25].style.display = "block";
}
if (v >= 15) {
    playlist.children[26].style.display = "block";
	playlist.children[27].style.display = "block";
}
if (v >= 16) {
    playlist.children[28].style.display = "block";
	playlist.children[29].style.display = "block";
}
if (v >= 17) {
    playlist.children[30].style.display = "block";
	playlist.children[31].style.display = "block";
}
if (v >= 18) {
    playlist.children[32].style.display = "block";
	playlist.children[33].style.display = "block";
}
if (v >= 19) {
    playlist.children[34].style.display = "block";
	playlist.children[35].style.display = "block";
}
if (v >= 20) {
    playlist.children[36].style.display = "block";
	playlist.children[37].style.display = "block";
}
if (v >= 21) {
    playlist.children[38].style.display = "block";
	playlist.children[39].style.display = "block";
}