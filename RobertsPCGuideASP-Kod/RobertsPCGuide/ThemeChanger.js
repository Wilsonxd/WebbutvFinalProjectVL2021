/*A function that switches the website between 
 * two different css files. 
 * In this case between Light.css and dark.css*/
function changeCSS(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    oldlink.href = cssFile;
}