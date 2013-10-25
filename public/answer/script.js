var canvasElem = $("canvas")[0]; // canvas要素
var context = canvasElem.getContext('2d'); // キャンバスのコンテキストを取得する
var currentPicture;

// STEP1

// "スナップ" ボタンをクリックしたら、snap_pictureが呼ばれる
$("#snap-button").on("click", snap_picture);

// スナップ写真を撮る
function snap_picture() {
	// ビデオのスナップショットをキャンバスに貼る
	context.drawImage($("video")[0], 0, 0);
}


// STEP2

// "枠線を描く" ボタンをクリックしたら、draw_wakuが呼ばれる
$("#waku-button").on("click", draw_waku);

// 枠線を描く
function draw_waku() {
	context.beginPath(); // 描画を開始する
	context.strokeStyle
	context.strokeRect(0, 0, 640, 360);
}

// STEP3

// "枠線を描く" ボタンをクリックしたら、draw_waku_fancyが呼ばれる
$("#fancy-waku-button").on("click", draw_waku_fancy);
function draw_waku_fancy() {
  var img = new Image();
  img.src = "../files/img/frame_gold.png";
  img.onload = function(){
    context.drawImage(img, 0, 0, canvasElem.width, canvasElem.height);
  };
}

// 画像のダウンロード
// サーバー上で動作させる必要がある（localhostでも可）
$("#download").on("click", create_download_link);
function create_download_link(){
  $("#download-link").attr({
    href: canvasElem.toDataURL(),
    download: "picture.png"
  });
}

// Webカメラからの取り込み
// サーバー上で動作させる必要がある（localhostでも可）
var video = document.querySelector('video');
navigator.webkitGetUserMedia({video: true}, function(stream){
  video.src =  window.URL.createObjectURL(stream);
  video.play();
});



