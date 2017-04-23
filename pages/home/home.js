// pages/home/home.js
var app = getApp()  
Page({  
  data: {
    number:0,//歌曲的index
    playIconToggle:"../../images/icon-play.png",//播放暂停按钮图片
    closeIcoToggle:"../../images/icon-down.png",//展开收缩按钮图片
    toggle:true,//切换播放/暂停状态
    firstPlay:0,//第一次点击播放按钮/暂停
    defaultStatus:0,//默认播放状态 0是暂停 1播放 2未播放
    defaultDuration:0,//默认歌曲总时长
    intervalState:null,
    cc:0,//中转倒计时
    animationList: {},
    animationTime: {},
    animationRangeBar: {},
    audioArr:[
      {
        audioCoverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        audioIcon:"../../images/icon-happy.png",
        audioTitle: '此时此刻',
        audioaudioAuthor: '许巍',
        audioDataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      },
      {
        audioCoverImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000000O9DJ2Grais.jpg?max_age=2592000',
        audioIcon:"../../images/icon-lianhua.png",
        audioTitle: '红尘恋',
        audioAuthor: '萌萌哒天团',
        audioDataUrl: 'http://dl.stream.qqmusic.qq.com/C400000Y4Pxy1CvhFM.m4a?vkey=AFBDC92A2B29A46AB1EBFECA79FE2A97A560044B784D5951A875C4869B599C321C24944FC774319E908477D2A0BDD9378BD710F771E5BE96&guid=837374216&uin=470114528&fromtag=66',
      },
      {
        audioCoverImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003y9LbB0peqTc.jpg?max_age=2592000',
        audioIcon:"../../images/icon-hourse.png",
        audioTitle: '失落的缘',
        audioAuthor: '谭维维',
        audioDataUrl: 'http://dl.stream.qqmusic.qq.com/C4000004wHpg2Nu6A5.m4a?vkey=4DC40C695F1D792600C0BBA4181CA1FD0E1DB44BFA7DFB4A01ED116FD5278718FE1EDE7EA4B3307F099E213659F4BD9EA777EF34F9C8F73C&guid=837374216&uin=470114528&fromtag=66',
      },
      {
        audioCoverImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000yiVfk1EpZIs.jpg?max_age=2592000',
        audioIcon:"../../images/icon-fire.png",
        audioTitle: '唐僧 ',
        audioAuthor: '李建',
        audioDataUrl: 'http://dl.stream.qqmusic.qq.com/C400001bmOvP4GhFHA.m4a?vkey=455D385713830EC5BCD047103B3D9B5D6C44D1581A5D3C398CFE54D19E029A1A4702F54A3F39476A8AE5208558DF360AC6BD6A8A3A0F2806&guid=837374216&uin=470114528&fromtag=66',
      },
      {
        audioCoverImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003y9LbB0peqTc.jpg?max_age=2592000',
        audioIcon:"../../images/icon-lianhua.png",
        audioTitle: '平凡之路',
        audioAuthor: '狮子合唱团',
        audioDataUrl: 'http://dl.stream.qqmusic.qq.com/C400004Y6XjS4VmNtT.m4a?vkey=4FDECB2AA02DC7A91DC22695E73B809F63BD11ACE693ABA977CEED21C55CD1FC9268C2D7D29A6C8B0DC4BA4A66037D583A6FF820199675E0&guid=837374216&uin=470114528&fromtag=66',
      },
      {
        audioCoverImgUrl: 'http://ac-5g9r20ds.clouddn.com/63bedb5f584234b6827c.jpg',
        audioIcon:"../../images/icon-lianhua.png",
        audioTitle: '山丘',
        audioAuthor: '李宗盛',
        audioDataUrl: 'http://ac-5g9r20ds.clouddn.com/e54ad7f0a834b9c07ec6.mp3',
      },
      {
        audioCoverImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003y9LbB0peqTc.jpg?max_age=2592000',
        audioIcon:"../../images/icon-lianhua.png",
        audioTitle: '失落的缘',
        audioAuthor: '谭维维',
        audioDataUrl: 'http://dl.stream.qqmusic.qq.com/C4000004wHpg2Nu6A5.m4a?vkey=4DC40C695F1D792600C0BBA4181CA1FD0E1DB44BFA7DFB4A01ED116FD5278718FE1EDE7EA4B3307F099E213659F4BD9EA777EF34F9C8F73C&guid=837374216&uin=470114528&fromtag=66',
      },
      {
        audioCoverImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003y9LbB0peqTc.jpg?max_age=2592000',
        audioIcon:"../../images/icon-lianhua.png",
        audioTitle: '失落的缘',
        audioAuthor: '谭维维',
        audioDataUrl: 'http://dl.stream.qqmusic.qq.com/C4000004wHpg2Nu6A5.m4a?vkey=4DC40C695F1D792600C0BBA4181CA1FD0E1DB44BFA7DFB4A01ED116FD5278718FE1EDE7EA4B3307F099E213659F4BD9EA777EF34F9C8F73C&guid=837374216&uin=470114528&fromtag=66',
      }
    ]
  },  
  listenerButtonPlay: function (e) {
      // console.log(e.currentTarget.id);
      // console.log(this.data.audioArr);
    this.setData({number:e.currentTarget.id});//获取点击的是哪一个音乐
      // console.log(this.data.number);
    this.playSong();
    this.setData({toggle:true});//每次换歌后把按钮设置为播放状态
    this.setData({firstPlay:++this.data.firstPlay});//解决点了下面歌曲列表 后不能暂停音乐
  }, 
  playSong:function(){
    var that=this;
    var audioDataUrl=this.data.audioArr[this.data.number].audioDataUrl;
    var audioTitle=this.data.audioArr[this.data.number].audioTitle;
    var audioCoverImgUrl=this.data.audioArr[this.data.number].audioCoverImgUrl;
    this.setData({playIconToggle:"../../images/icon-pause.png"})
    wx.playBackgroundAudio({  
      //播放地址  
      dataUrl: audioDataUrl,  
      title: audioTitle,  
      //图片地址  
      coverImgUrl: audioCoverImgUrl,
      success:function(){
        console.log("回调")
      }  
    });

    // var total = 0;
    // var flag = false;
    // if(this.data.intervalState!=null){
    //   clearInterval(this.data.intervalState);
    // }
    // this.data.intervalState=setInterval(function(){
    //   console.log("d")
    //   wx.getBackgroundAudioPlayerState({  
    //     success: function (res) {
    //       console.log(res);
    //       if(res.status=="1"&&flag==false){
    //         flag=true;
    //         total = res.duration;
    //         that.setData({defaultDuration:res.duration})
    //         console.log('that.data.duration1:' + res.duration)
    //       }else if(res.status =="1"&&flag&&total>0){
    //         total--;
    //         that.setData({defaultDuration:total})
    //       }else if(res.status =="2"){
    //         console.log(122)
    //       }
    //     } 
    //   })
    // },1000)
    var total = 0;
    var flag = false;
    var miunte=0;
    var sec=0;
    var nowTime=0;
    if(this.data.intervalState!=null){
      clearInterval(this.data.intervalState);
    }
    this.data.intervalState=setInterval(function(){
      console.log("d")
      wx.getBackgroundAudioPlayerState({  
        success: function (res) {
          console.log(res);
          if(res.status=="1"&&flag==false){
            total=-(res.currentPosition+(-res.duration))
            
            //把时间转化为分钟秒的格式
            miunte=Math.floor(total/60)
            sec=(total-Math.floor(total/60)*60)
            if(miunte<10){
              miunte="0"+miunte
            }
            if(sec<10){
              sec="0"+sec
            }
            nowTime=miunte+":"+sec

            that.setData({defaultDuration:nowTime})
            that.setData({cc:nowTime})

            flag=true;
            console.log('that.data.duration1:' + res.duration)
          }else if(res.status =="1"&&flag&&total>0){
            total--;
            
            //把时间转化为分钟秒的格式
            miunte=Math.floor(total/60)
            sec=(total-Math.floor(total/60)*60)
            if(miunte<10){
              miunte="0"+miunte
            }
            if(sec<10){
              sec="0"+sec
            }
            nowTime=miunte+":"+sec
            console.log(nowTime)
            
            that.setData({defaultDuration:nowTime})
            that.setData({cc:that.data.defaultDuration})
            
            console.log("cccccc:"+that.data.cc)
          }else if(res.status =="0"){
            that.setData({defaultDuration:that.data.cc})
            console.log(122)
          }
        } 
      })
    },1000)
  },
 
  //播放/暂停切换按钮
  iconPlayToggle:function(){
    if(this.data.firstPlay==0){//第一次点击播放暂停按钮
        console.log("??")
        this.playSong();
        this.setData({playIconToggle:"../../images/icon-pause.png"});
        this.setData({firstPlay:++this.data.firstPlay})
    }else if(this.data.toggle==true){
        console.log("点击暂停了");
        wx.pauseBackgroundAudio();
        this.setData({playIconToggle:"../../images/icon-play.png"});
        this.setData({toggle:!this.data.toggle});
    }else if(this.data.toggle==false){
        console.log("点击播放了");
        this.playSong();
        this.setData({playIconToggle:"../../images/icon-pause.png"});
        this.setData({toggle:!this.data.toggle});
    }
  },

  //点击展开 显示进度条
  bgDown2:function(e){
    console.log(12)
    console.log(e.currentTarget.id)
    // document.getElementById("iconDown").style.top="51%"
  },
  bgDown: function(e){
    console.log(e.currentTarget)
    var eleId=e.currentTarget.id
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })
    
    var animation2 = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    var animation3 = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    // this.animation = animation
    // this.animation2 = animation2

    // this.setData({
    //   animationData:animation.export(),
    //   animationData2:animation2.export()      
    // })

    if(eleId=="iconDown"){
      animation.translateY(48).step()
      animation2.translateY(48).scale(0).step()
      animation3.opacity(1).step()
    }else if(eleId=="iconClose"){
      animation.translateY(0).step()
      animation2.translateY(0).scale(1).step()
      animation3.opacity(0).step()
    }
    this.setData({
      animationList:animation.export(),
      animationTime:animation2.export(),
      animationRangeBar:animation3.export()
    })
  },
  onShareAppMessage: function () {
    return {
      title: '小睡眠,晚安',
      path: '/pages/home?id=123',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  /** 
   * 播放状态 
   */  
  listenerButtonGetPlayState: function () {
    var that=this;
    wx.getBackgroundAudioPlayerState({  
      success: function (res) {
        that.setData({defaultStatus:res.status})
        that.setData({defaultDuration:res.duration})//ddddddddd
        console.log('that.data.duration:' + res.duration)
        console.log('that.data.currentPosition:' + res.currentPosition)
        // console.log('that.data.status:' + that.data.status)
        // console.log('duration:' + res.duration)
        // console.log('currentPosition:' + res.currentPosition)  
        // console.log('status:' + res.status)  
        // console.log('downloadPercent:' + res.downloadPercent)  
        // console.log('dataUrl:' + res.dataUrl)  
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