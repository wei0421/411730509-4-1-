let points = [[0,7], [1,5], [2, 5],[2,3],[3,2],[3,1],[4,0],[5,1],[5,2],[6,3],[6,5],[7,5],[8,7],[5,6],[6,7],[7,7],[8,8],[8,10],[7,11],[6,10],[7,10],[7,9],[6,9],[5,10],[5,9],[6,8],[5,8],[5,7],[3,7],[3,8],[2,8],[3,9],[3,10],[2,9],[1,9],[1,10],[2,10],[1,11],[0,10],[0,8],[1,7],[2,7],[3,6]]; //list資料(鹿頭)
function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*20
	ctx = canvas.getContext('2d');
	ctx.lineWidth =5;
	ctx.lineCap = 'round'
	//-----

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  gradientLine(ctx,500,400,800,680, 'brown', 'orange') //由咖啡色漸層至紅色	
  background(255);
  //translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  //scale(1, -1);  //上下翻轉
  //設定文字
  textSize(20)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("淡江教科",-50+mouseX,0+mouseY)  //顯示文字
    
  for (let i = 0; i < points.length-1; i++) {
      
  //讓圖形跟著滑鼠移動並產生漸層    
  line(mouseX-points[i][0], mouseY-points[i][1], mouseX-points[i+1][0], mouseY-points[i+1][1]);
  }
  line(mouseX-points[points.length-1][0], mouseY-points[points.length-1][1], mouseX-points[0][0], mouseY-points[0][1]); //把最後一點與第一點的連線
    
function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  }
}