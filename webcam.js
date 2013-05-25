/*
 *  Copyright 2001-2005 Stephen Colebourne
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
 
 /**
  * This plugin is simple demo to access the webcam and display the stream directly on the browser.
  * This uses the HTML5 <video> tag. 
  * How to run :
  *      //Basic setup with default settings.
  *      $("#div_webcam").webcam();
  * 
  */
(function($) {
    $.fn.webcam = function( jsonWebcamSettings ) {
        return this.each(function() {
            var config = $.extend({},$.fn.webcam.defaults,jsonWebcamSettings);
            json_webcam_config = config;
            webcam_function.init(this);
        });
    };
    $.fn.webcam.defaults =  {
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
    };
    var json_webcam_config = '';
    webcam_function = {
        init : function( div_webcam ) {
            if( this.isUserMediaAccessible() ) {
                this.webcam_stream.bootstrap();
                this.webcam_stream.load_player( );
            } else {
                $(div_webcam).html('Does not support HTML5 webcam');
            }
        },
        getUserMedia : function() {
            return ( navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia  );
        },
        isUserMediaAccessible : function() {
            if( navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia  ) {
                return true;
            } else  {
                return false;
            }
        },
        webcam_stream : {
            bootstrap : function() {
                $(div_webcam).html('<video  id="video_webcam" autoplay></video><br>');
                var video_webcam = $('#video_webcam');
                video_webcam.attr('width',json_webcam_config.video.width);
                video_webcam.attr('height',json_webcam_config.video.height);
                video_webcam.prop("controls",json_webcam_config.showPlayerControls);
                video_webcam.prop("autoplay",json_webcam_config.video.autoplay);
                video_webcam.prop("muted",json_webcam_config.audio.mute);
                if(json_webcam_config.enableSnapshot == true ) {
                    $(div_webcam).append('<br><img src="" id="img_screenshot"/><br><canvas style="display:none;" id="canvas_webcam"></canvas><br><button id="btn_snapshot" value="tabke screenshot">Take Snapshot</button>' );
                    $('#btn_snapshot').click( webcam_function.webcam_stream.takeSnapshot );
                }
                return;
            },
            load_player : function( ) {
                navigator.userMedia = webcam_function.getUserMedia();
                navigator.userMedia  ({
                        video: json_webcam_config.showVideo , audio: json_webcam_config.playAudio } ,
                    function(localMediaStream) {
                        var video_webcam = $('#video_webcam');
                        video_webcam.attr("src", window.URL.createObjectURL(localMediaStream));
                    },
                    webcam_function.webcam_stream.on_failure
                );
                return;
            },
            on_failure : function(err) {
                alert('code : ' + err.code + ' permission denied : ' + err.PERMISSION_DENIED);
                return ;
            },
            takeSnapshot : function() {
                var video_webcam = $('#video_webcam').get(0);

                var canvas_webcam = $('#canvas_webcam');
                canvas_webcam.attr('width', video_webcam.videoWidth);
                canvas_webcam.attr('height',video_webcam.videoHeight);

                var img_screenshot = $('#img_screenshot');
                img_screenshot.attr('width', json_webcam_config.snapshot.width);
                img_screenshot.attr('height',json_webcam_config.snapshot.height);

                var varCanvas = canvas_webcam.get(0);
                var varCanvasContext =  varCanvas.getContext('2d');
                varCanvasContext.drawImage(video_webcam, 0, 0);

                img_screenshot.attr("src", varCanvas.toDataURL('image/png') );
            }
        }
    }
}(jQuery));
