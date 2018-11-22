import Barrange from './barrange';
class CanvasBarrange {
    constructor(canvas,video,opts = {}){
        if(!canvas || !video) return;
        this.canvas = canvas;
        this.video = video;
        this.canvas.width = video.width;
        this.canvas.height = video.height;
        this.ctx = canvas.getContext("2d");
        let defOpts = {//弹幕的默认属性，安全的data初始化
            coloe:"#e91e63",
            speed:1.5,
            opacity:0.5,
            fontSize:20,
            data:[]
        }
        // 如何将上述属性(defOpts)直接挂载到对象上?并且接受opts可能传过来的data？
        Object.assign(this,defOpts,opts);
        // console.log(this);
        this.isPaused = true;
        this.barranges = this.data.map(item => new Barrange(item,this));
        //此时的this是当前的对象
    }
    render() {
        this.clear();
        this.renderBarrange();
        if(!this.isPaused) {
            // 递归，嵌套绘制
            requestAnimationFrame(this.render.bind(this));
        }
    }
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);//擦除
    }
    renderBarrange(){
        let time = this.video.currentTime;
        console.log(time);
        this.barranges.forEach(barrange => {
            if(!barrange.flag && time >= barrange.time){
                if(!barrange.isInit) {
                    barrange.init();//初始化
                    barrange.isInit = true;
                }
                barrange.x -= barrange.speed;
                barrange.render();
            }
            // 当barrange超出了屏幕该如何？当时间到了，弹幕就出现，
            // 生存时间是从最右边走过canvas的宽度，当它离开最左边就消失了，
            // 它如何消失呢？用clear
            if(barrange.x < -barrange.width) {
                barrange.flag = true;
            }
        });
    }
}

export default CanvasBarrange;