function mutedVideo () {
var myVideo =  iframe.getElementsByTagName('iframe');
for(x in myVideo ) {
	myVideo[x].mute();
}

}