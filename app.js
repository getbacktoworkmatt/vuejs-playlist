new Vue({
  el: '#vue-app',
  data: {
    name: "Sean",
    job: "ninja",
    
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
