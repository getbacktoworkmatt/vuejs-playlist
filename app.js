new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    add: function(x){
      this.age += x;
    },
    subtract: function(x){
      this.age -= x;
    },
    updateXY: function(event){
      console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});
