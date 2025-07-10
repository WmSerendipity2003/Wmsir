const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '赛丽亚的旅馆',
        artist: 'Dungeon and Fighter',
        url: 'https://m10.music.126.net/20250530171154/b2d8f8a5969d0d0bd5fd1b156d4154cb/ymusic/540b/560b/535b/ca56fc92d2aad2c5d206d1749e4606cc.mp3?vuutv=9y+t1ejhyDQsztiq3cKLSP4rqU7iSNAuni2iqJg8W9oxEHW/91MAjlXvecw/Q6/FZU4IEtudAdfkLV4Lt9pM5CNrbnf/REEHct3yVNZGyfM=',
        cover: 'https://p1.music.126.net/EgeGHOxwBOt9ICpzDpjwng==/109951163870341978.jpg?param=130y130',
    }, 
	]
});
