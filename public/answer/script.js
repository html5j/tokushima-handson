var canvasElem = $("canvas")[0] // canvas要素
var context = canvasElem.getContext('2d') // キャンバスのコンテキストを取得する

// STEP1

// "スナップ" ボタンをクリックしたら、snap_pictureが呼ばれる
$("#snap-button").on("click", snap_picture)

// スナップ写真を撮る
function snap_picture() {
	// ビデオのスナップショットをキャンバスに貼る
	context.drawImage($("video")[0], 0, 0)
}


// STEP2

// "枠線を描く" ボタンをクリックしたら、draw_wakuが呼ばれる
$("#waku-button").on("click", draw_waku)

// 枠線を描く
function draw_waku() {
	context.beginPath(); // 描画を開始する
	context.strokeStyle
	context.strokeRect(0, 0, 640, 360)
}





// STEP3

// "枠線を描く" ボタンをクリックしたら、draw_waku_fancyが呼ばれる
$("#fancy-waku-button").on("click", draw_waku_fancy)
