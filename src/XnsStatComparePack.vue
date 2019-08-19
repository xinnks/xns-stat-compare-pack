<template>
  <div class="pack-wrapper" :style="'width:'+statPackWidth+'px;height:'+statPackHeight+'px'">
    <div class="pack" :style="'background-color: '+colorTwo">
      <div class="title" :style="'color:'+titleColor">
        <div>{{spTitle}}</div>
      </div>
      <div class="pack-left" :style="'background-color: '+colorOne+';width: '+size1+'px'">
        <span class="content" :style="'color:'+statsColor">{{sizeOne}}</span>
      </div>
      <div class="pack-right" :style="'width: '+size2+'px'">
        <span class="content" :style="'color:'+statsColor">{{sizeTwo}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XnsStatComparePack',
  props: {
    spWidth: {
      type: Number,
      default: 300
    },
    spHeight: {
      type: Number,
      default: 50
    },
    colorOne: {
      type: String,
      required: true
    },
    colorTwo: {
      type: String,
      required: true
    },
    sizeOne: {
      type: Number,
      required: true
    },
    sizeTwo: {
      type: Number,
      required: true
    },
    statsColor: {
      type: String,
      required: true
    },
    spTitle: {
      type: String,
      required: true
    },
    titleColor: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      size1: 0,
      size2: 0,
      color1: '',
      color2: '',
      statPackWidth: 300,
      statPackHeight: 50,
      statTitle: ''
    }
  },
  mounted () {
    // set defaults
    this.statTitle = this.title != '' ? this.title : 'Stats'
    this.statPackWidth = this.spWidth ? this.width : 300
    this.statPackHeight = this.spHeight ? this.height : 50

    // compute widths
    let valuesSum = this.sizeOne + this.sizeTwo
    this.size1 = (this.sizeOne / valuesSum) * this.spWidth;
    this.size2 = (this.sizeTwo / valuesSum) * this.spWidth;
  }
}
</script>
<style scoped>
  .title{
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    padding: 5px auto;
    flex-flow: column;
    justify-content: center;
    text-transform: uppercase;
  }
  .pack-wrapper{
    position: relative;
    padding: 2px;
    display: flex;
    flex-direction: column;
  }
  .pack{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: inherit !important;
  }
  .pack-left{
    display: inline-flex;
    justify-content: center;
    text-align: left;
  }
  .pack-left > .content{
    text-align: left;
  }
  .pack-right{
    display: inline-flex;
    justify-content: center;
    text-align: right;
  }
  .pack-right > .content{
    text-align: right;
  }
  .pack, .pack-left, .pack-right{
    height: inherit !important;
  }
  .content{
    font-size: 30px;
    font-weight: 600;
    width: inherit;
    height: inherit;
    padding: 5px;
    margin: 5px;
  }
</style>