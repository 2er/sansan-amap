<template>
  <div class="home">
    <mt-header fixed title="上泗安村旅游景区电子导览"></mt-header>
    <div class="amap-wrapper">
      <el-amap ref="map" vid="amap_map" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-map">
        <el-amap-ground-image :clickable="groundimage.clickable" :url="groundimage.url" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image>
        <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index" :content="marker.content"></el-amap-marker>
      </el-amap>
    </div>
    <mt-popup id="poi-detail-panel" position="bottom" v-model="popupVisible" popup-transition="popup-fade" class="el-card" :modal="false">
      <div class="el-card__body">
        <span class="audio-control" style="background: url(&quot;http://images.vjingkeji.com/images/5a79140e075f04003a56ada0/FtsYWFgQ-1LAzwZ7_J65k3y6POi0.jpg&quot;) center center / 100% 100% no-repeat;">
          <audio src="http://images.vjingkeji.com/audios/temp/Fmh1JmHDY6Vxc7dChq2ql-WeoUqi.mp3" preload="auto"></audio>
          <span class="play"></span>
        </span>
        <h2 class="name">神仙居景区</h2>
        <div>
          <button type="button" class="el-button detail el-button--default el-button--small">
            <span>详情</span>
          </button>
          <button type="button" class="el-button navigate el-button--default el-button--small">
            <span>去这里</span>
          </button>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      popupVisible: false,
      zoom: 10,
      center: [120.6048, 28.695373],
      events: {
        init: (o) => {

        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {

        }
      },
      plugin: [
        // 'ToolBar'
      ],
      groundimage: {
        clickable: true,
        url: 'http://192.168.2.160/map.png',
        bounds: [[120.390576, 28.668266], [120.663861, 28.839228]],
        events: {
          click () {
            alert('click groundimage')
          }
        }
      },
      markers: [
        {
          position: [120.6048, 28.695373],
          events: {
            click: (e) => {
              this.popupVisible = true
              e.target.setContent("<img src='http://192.168.2.160/video_on.png' style='top: 0px; left: 0px; width: 40px; height: 40px;'>")
            }
          },
          visible: true,
          draggable: false,
          content: "<img src='http://192.168.2.160/video_off.png' style='top: 0px; left: 0px; width: 34px; height: 34px;'>"
        }
      ]

    }
  },
  mounted: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    position: relative;
  }
  .amap-map {
    height: 600px;
  }
  #poi-detail-panel {
    width: 70%;
    position: absolute;
    bottom: 10px;
    height: 100px;
    z-index: 1000;
    font-size: 16px;
    color: #364a63;
    padding-left: 80px;
  }
  .el-card {
    border: 1px solid #e5dad1;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
  .el-card__body {
    padding: 20px;
  }
  .audio-control {
    position: absolute;
    box-sizing: border-box;
    height: 80px;
    width: 80px;
    top: 10px;
    left: 10px;
    font-size: 30px;
    line-height: 82px;
    text-align: center;
    border: 2px solid #364a63;
    border-radius: 8px;
    color: #fff;
    z-index: 2;
  }
  .audio-control .pause, .audio-control .play {
    position: absolute;
    top: 29px;
    left: 29px;
    width: 22px;
    height: 22px;
    background: url(../assets/play.png) 50%/22px 22px no-repeat;
  }

  #poi-detail-panel .name {
    line-height: 50px;
    margin-top: -20px;
    margin-left: 12px;
    margin-bottom: 0;
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 1px solid #e5e5e5;
  }
  #poi-detail-panel button.detail {
    margin-left: 10px;
  }
  #poi-detail-panel button {
    font-size: 12px;
    margin-top: 10px;
    padding-left: 24px;
    background: url(../assets/info.png) 8px/13px 13px no-repeat;
  }
  .el-button--small {
    padding: 7px 9px;
    font-size: 12px;
    border-radius: 4px;
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #d9cabf;
    border-color: #c4c4c4;
    color: #3d2c1f;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
  }
  #poi-detail-panel button.navigate {
    margin-left: 10px;
    background-image: url(../assets/go.png);
  }
</style>
