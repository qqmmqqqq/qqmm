    // 1. 获取元素  对视频进行操作
    const video = document.querySelector('video')
    video.ontimeupdate = _.throttle (() => {
      // console.log(video.currentTime)  获得当前的视频时间
      // 把当前的时间存储到本地存储里面
      localStorage.setItem('currentTime', video.currentTime)
    }, 1000)

    // 打开页面触发事件，就冲本地存储里面取出记录的时间， 赋值给 video.currentTime
    video.onloadedmetadata = () => {
      video.currentTime = localStorage.getItem('currentTime') || 0
    }