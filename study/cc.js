 //  第一大模块，页面滑动可以显示和隐藏
    (function(){
      // 获取元素
    const elevator = document.querySelector('.xtx-elevator')
    const entry = document.querySelector('.xtx_entry')
    // 1.当页面滚动大于 300像素 ，就显示 电梯导航
    // 2.给页面添加滚动事件
    window.addEventListener('scroll', function(){
      const n = document.documentElement.scrollTop
      // if (n >= 300) {
      //   elevator.style.opacity = 1
      // } else {
      //   elevator.style.opacity = 0
      // }
      elevator.style.opacity = n >= entry.offsetTop ? 1 : 0
    })

    // 点击返回页面顶部
    const backTop = document.querySelector('#backTop')
    backTop.addEventListener('click', function(){
      // document.documentElement.scrollTop = 0

      // 用scrollTo(x, y)
      window.scrollTo(0, 0)
    })
    })();

 // 第二第三都放到另外一个执行函数里面
  (function(){
    // 2. 点击页面可以滑动
   const list = document.querySelector('.xtx-elevator-list')
   list.addEventListener('click', function(e){
    if (e.target.tagName === 'A' && e.target.dataset.name) {
      // 先获取active对象
      const old = document.querySelector('.xtx-elevator-list .active')
      // 排他思想
      // 用判断if 来实现依次这个本来就没有的active
      if (old) {
      old.classList.remove('active')
    }
    // 再给当前元素添加active
    e.target.classList.add('active')

    // 获得自定义属性
    // console.log(e.target.dataset.name)
    /* // 根据小盒子的自定义属性值 去选择 对应的大盒子
    console.log(document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop) */
    // 获取对应大盒子的 offsetTop
    const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
    // 让页面滚动到对应的位置
    document.documentElement.scrollTop = top
    }
   })

    // 3. 页面滚动 根据大盒子选 小盒子 添加active 类
    window.addEventListener('scroll', function(){
    // 先获取active对象
    const old = document.querySelector('.xtx-elevator-list .active')
      // 排他思想
      // 用判断if 来实现依次这个本来就没有的active
      if (old) old.classList.remove('active')
      
    // 获取4个大盒子
    const news = document.querySelector('.xtx_goods_new')
    const popular = document.querySelector('.xtx_goods_popular')
    const brand = document.querySelector('.xtx_goods_brand')
    const topic = document.querySelector('.xtx_goods_topic')
    const n = document.documentElement.scrollTop
    // 选中第一个小盒子
    if (n >= news.offsetTop && n < popular.offsetTop) {
      document.querySelector('[data-name="new"]').classList.add('active')
    } else if (n >= popular.offsetTop && n < brand.offsetTop) {
      document.querySelector('[data-name="popular"]').classList.add('active')
    } else if (n >= brand.offsetTop && n < topic.offsetTop) {
      document.querySelector('[data-name="brand"]').classList.add('active')
    } else if (n >= topic.offsetTop) {
      document.querySelector('[data-name="topic"]').classList.add('active')
    }
  })

  })();

