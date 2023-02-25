<template>
  <div>
    <Header></Header>
    <nav>
      <div class="scene">
        <div><span id="luke"></span></div>
      </div>
    </nav>
    <nav>
      <div class="qq">
        <a href="http://https://www.baidu.com/"
          ><img src="../assets/img/icon_QQ.png" alt="" class="qqimg"
        /></a>
      </div>
      <div class="weChat">
        <a href=""
          ><img src="../assets/img/微信 (1).png" alt="" class="wechat"
        /></a>
      </div>
      <div class="Git">
        <a href="https://github.com/3Asterism/akiBlog"
          ><img src="../assets/img/github (1).png" alt="" class="git"
        /></a>
      </div>
      <div class="WYY">
        <a href=""
          ><img src="../assets/img/网易云音乐 .png" alt="" class="wyy"
        /></a>
      </div>
      <div class="CR">
        <a href=""
          ><img src="../assets/img/bilibili-fill.png" alt="" class="cr"
        /></a>
      </div>
    </nav>
    <nav>
      <div class="head"></div>
    </nav>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { Typeit } from "../utils/plug.js";
export default {
  components: {
    Header,
  },
  mounted() {
    //页面元素加载完成
    var that = this;
    var timer = setTimeout(function () {
      Typeit(1, "#luke"); //打字机效果
      clearTimeout(timer);
    }, 500);
  },
};
</script>

<style scoped>
.head {
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: pink;
  top: 1300px;
}

.scene {
  position: absolute;
  color: rgb(255, 255, 255);
  font-style: italic;
  font-size: 25px;
  height: 250px;
  width: 600px;
  top: 300px;
  left: 700px;
}
nav .qq {
  position: absolute;
  top: 750px;
  left: 350px;
}
nav .qq .qqimg {
  width: 30%;
}
nav .weChat {
  position: absolute;
  top: 755px;
  left: 600px;
}
nav .weChat .wechat {
  width: 26%;
}
nav .Git {
  position: absolute;
  top: 750px;
  left: 850px;
}
nav .Git .git {
  width: 30%;
}
nav .WYY {
  position: absolute;
  top: 750px;
  left: 1100px;
}
nav .WYY .wyy {
  width: 35%;
}
nav .CR {
  position: absolute;
  top: 760px;
  left: 1380px;
}
nav .CR .cr {
  width: 28%;
}
</style>