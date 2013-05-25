JQuery-Browser-Webcam
=====================
This plugin is simple demo to access the webcam and display the stream directly on the browser.
This uses the HTML5 <video> tag.

It also has the extra option to take snapshots.
Tested in Chrome.
Tested in Firefox. (autoplay feature does not work)
Not tested in  IE.

How to run :
//Basic setup with default settings.
$("#div_webcam").webcam();

// with different options
$("#div_webcam").webcam({
    showVideo : true,
    playAudio :true,
    showPlayerControls: true,
    video : {
        width : 400,
        height : 300,
        autoplay : false
    },
    audio : {
        mute:true
    },
    enableSnapshot : false,
    snapshot : {
        width : 400,
        height : 300
    }
});

Options                 Default Value       Description
showVideo               true                show or hide video
playAudio               true                show or hide audio
showPlayerControls      true                show video player controls
video.width             400                 width of the video player
video.height            300                 height of the video player
video.autoplay          false               video starts playing as soon as it loads
audio.mute              true                play or mute the audio when video loads
enableSnapshot          false               show or hide the option to take snapshopts of the video
snapshot.width          400                 width of the snapshot
snapshot.height         300                 height of the snapshot
