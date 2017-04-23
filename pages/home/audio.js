// pages/home/audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
  },
  data: {
    number:0,//改变播放器上audioArr列表 为第几个
    audioArr:[
      {
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      },
      {
        poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000000O9DJ2Grais.jpg?max_age=2592000',
    name: '红尘恋',
    author: '萌萌哒天团',
    src: 'http://dl.stream.qqmusic.qq.com/C400000Y4Pxy1CvhFM.m4a?vkey=AFBDC92A2B29A46AB1EBFECA79FE2A97A560044B784D5951A875C4869B599C321C24944FC774319E908477D2A0BDD9378BD710F771E5BE96&guid=837374216&uin=470114528&fromtag=66',
      },
      {
        poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003y9LbB0peqTc.jpg?max_age=2592000',
    name: '失落的缘',
    author: '谭维维',
    src: 'http://dl.stream.qqmusic.qq.com/C4000004wHpg2Nu6A5.m4a?vkey=4DC40C695F1D792600C0BBA4181CA1FD0E1DB44BFA7DFB4A01ED116FD5278718FE1EDE7EA4B3307F099E213659F4BD9EA777EF34F9C8F73C&guid=837374216&uin=470114528&fromtag=66',
      }
    ]
  },
  audioPlay: function (e) {
    console.log(e.currentTarget.id)
    this.setData({number:e.currentTarget.id})
    console.log(this)
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})