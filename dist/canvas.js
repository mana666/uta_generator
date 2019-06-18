
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var context2 = canvas.getContext("2d");

canvas.style.top = "125px";
canvas.style.left = "480px";

context.font = "bold 35px Arial";
context.fillStyle = "red";
context.fillText("ああああああああああああああああああああ", 40,40);
//context.rotate(-14 * Math.PI / 180);
context.rotate(Math.PI*2/(20*6));
//context.fillRect();
context.fillRect(17, 90, 230, 278);
//context.globalAlpha = 0.2;

context2.fillStyle = "blue";
context2.font = "bold 35px Arial";
context2.fillText("いいいいいいいいいいいい", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
context2.rotate(28 * Math.PI / 180);
context2.fillRect(360, -60, 230, 277);
//context2.globalAlpha = 0.2;





/* 

new Vue({
    el: '#app',
    
    data() {
      return {
        font: {
          family: "arial",
          size: 40,
          lineHeightOffset: 4
        },
        imgsrc: "/src/assets/yuriuta_image.png", // 表示画像
        size: { // 表示画像のサイズ
          width: 611,
          height: 378
        },
        textareaRate: { // 画像中のテキスト表示エリアの左上・右下座標(左上基準)
          start: {
            x: 0.26,
            y: 0.1
          },
          end: {
            x: 0.72,
            y: 0.34
          }
        },
        cotext: null,
        text: "",
      }
    },
    mounted() {
      // init canvas
      const canvas = this.$refs.canvas;
      if (!canvas || !canvas.getContext) return false;
      
      // context
      this.context = canvas.getContext("2d");
      // align center(horizontal/vertical)
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      
      // initial draw
      this.drawImage("");
      
    },
    methods: {
      drawText(text, startX, startY, endX, endY) {
        // set context setting
        this.context.font = `${this.font.size}px '${this.font.family}'`;
        const heightAdjustment = this.size.height * 0.01;
        
        let lines = [text];
        if (text.includes("\n")) lines = text.split("\n");
        const lineCount = lines.length;
        lines.forEach((line, idx) => {
          this.context.fillText(
            line,
            startX + (endX - startX) / 2,
            startY +
              (endY - startY) / 2 +
              idx * (this.font.size + this.font.lineHeightOffset) -
              ((this.font.size + this.font.lineHeightOffset) * (lineCount - 1)) /
                2 -
              heightAdjustment
          );
        });
      },
      drawImage(text) {
        console.log(this.size);
        // clear canvas
        this.context.clearRect(0, 0, this.size.width, this.size.height);
        
        // image obj
        const img = new Image();
        img.src = this.imgsrc;
        img.onload = () => {
          this.context.drawImage(img, 0, 0, this.size.width, this.size.height);
          this.drawText(
            text,
            this.textareaRate.start.x * this.size.width,
            this.textareaRate.start.y * this.size.height,
            this.textareaRate.end.x * this.size.width,
            this.textareaRate.end.y * this.size.height
          );
        };
      },
      changeText(text) {
        this.drawImage(this.text);
      }
    }
  })








 */