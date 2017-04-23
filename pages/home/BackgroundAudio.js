var app = getApp()  
Page({  
  data: {
    number:0,
    song:[{
      url:'http://ac-5g9r20ds.clouddn.com/e54ad7f0a834b9c07ec6.mp3',
      title:"李宗盛"
    },{
      url:'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      title:"李建"
    }] 
  },  
  listenerButtonPlay: function (e,songUrl) {
    console.log(e.currentTarget.id)
    console.log(this.data.song)
    this.setData({number:e.currentTarget.id})
    console.log(this.data.number)
    var audioDataUrl=this.data.song[this.data.number].url
    var audioTitle=this.data.song[this.data.number].title
    wx.playBackgroundAudio({  
      //播放地址  
      dataUrl: audioDataUrl,  
      title: audioTitle,  
      //图片地址  
      coverImgUrl: 'http://ac-5g9r20ds.clouddn.com/63bedb5f584234b6827c.jpg'  
    })  
     
  },  
  
  /** 
   * 播放状态 
   */  
  listenerButtonGetPlayState: function () {  
    wx.getBackgroundAudioPlayerState({  
      success: function (res) {  
        console.log('duration:' + res.duration)
        console.log('currentPosition:' + res.currentPosition)  
        console.log('status:' + res.status)  
        console.log('downloadPercent:' + res.downloadPercent)  
        console.log('dataUrl:' + res.dataUrl)  
      }  
    })  
  },  
  /** 
   * 监听button暂停按钮 
   */  
  listenerButtonPause: function () {  
    wx.pauseBackgroundAudio();  
    console.log('暂停播放')  
  },  
  /** 
   * 设置进度 
   */  
  listenerButtonSeek: function () {  
    wx.seekBackgroundAudio({  
      position: 40  
    })  
  },  
  /** 
   *停止播放  
   */  
  listenerButtonStop: function () {  
    wx.stopBackgroundAudio()  
    console.log('停止播放')  
  },  
  
  onLoad: function (options) {  
    // 页面初始化 options为页面跳转所带来的参数  
    /** 
     * 监听音乐播放 
     */  
    wx.onBackgroundAudioPlay(function () {  
      console.log('onBackgroundAudioPlay')  
    })  
  
    /** 
     * 监听音乐暂停 
     */  
    wx.onBackgroundAudioPause(function () {  
      console.log('onBackgroundAudioPause')  
    })  
  
    /** 
     * 监听音乐停止 
     */  
    wx.onBackgroundAudioStop(function () {  
      console.log('onBackgroundAudioStop')  
    })  
  },  
})  