new Vue({
  el: '#vue-app',
  data: {
    name: "Sean",
    job: "ninja",
    website: "mattwritesco.de"
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
