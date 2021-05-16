/*En funktion som byter hemsidan mellan två
 olika css filer. I detta fallet mellan Light.css 
 och dark.css*/
function changeCSS(cssFile, cssLinkIndex) {
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    oldlink.href = cssFile;
}