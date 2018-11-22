import CanvasBarrange from './canvas_barrange';

let data = [
    {
        value:"周杰伦的听妈妈的话，让我反复循环再循环",
        time:5,
        color:"red",
        speed:1,
        fontSize:22
    },
    {
        value:"想快快长大，才能保护她",
        time:5
    },
    {
        value:"听妈妈的话，啦啦啦啦~",
        time:15
    }
];

const doc = document, //文档对象模型
      canvas = doc.getElementById("canvas"),
      video = doc.getElementById("video"),
      textInput = doc.getElementById("text"),
      color = doc.getElementById("color"),
      range = doc.getElementById("range");

let canvasBarrange = new CanvasBarrange(canvas,video,{data});
video.addEventListener("play",() => {
    canvasBarrange.isPaused = false;
    canvasBarrange.render();
});
video.addEventListener("pause",() => {

});
video.addEventListener("seeked",() => {

});


// 弹幕的核心属性是text，其次是time，其他的属性都可以是default，可以用es6的默认参数设置一下
// canvas要盖在video上，就形成了弹幕层，这是css属性
// video播放到相应的时间弹出那条相应的弹幕