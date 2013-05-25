JQuery-Browser-Webcam
=====================
This plugin is simple demo to access the webcam and display the stream directly on the browser.
This uses the HTML5 <video> tag.<br>

It also has the extra option to take snapshots.<br>
Tested in Chrome.<br>
Tested in Firefox. (autoplay feature does not work)<br>
Not tested in  IE.<br>

How to run :<br>
//Basic setup with default settings.<br>
$("#div_webcam").webcam();<br><br>

// with different options<br>
$("#div_webcam").webcam({<br>
    showVideo : true,<br>
    playAudio :true,<br>
    showPlayerControls: true,<br>
    video : {<br>
        width : 400,<br>
        height : 300,<br>
        autoplay : false<br>
    },<br>
    audio : {<br>
        mute:true<br>
    },<br>
    enableSnapshot : false,<br>
    snapshot : {<br>
        width : 400,<br>
        height : 300<br>
    }<br>
});<br>

Options                 Default Value       Description<br>
showVideo               true                show or hide video<br>
playAudio               true                show or hide audio<br>
showPlayerControls      true                show video player controls<br>
video.width             400                 width of the video player<br>
video.height            300                 height of the video player<br>
video.autoplay          false               video starts playing as soon as it loads<br>
audio.mute              true                play or mute the audio when video loads<br>
enableSnapshot          false               show or hide the option to take snapshopts of the video<br>
snapshot.width          400                 width of the snapshot<br>
snapshot.height         300                 height of the snapshot<br>
