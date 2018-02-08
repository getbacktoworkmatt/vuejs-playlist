new Vue({
  el: '#vue-app',
  data: {
    name: "Sean",
    job: "ninja",
    website: "mattwritesco.de",
    websiteTag:'<a href="mattwritesco.de">the matt website website</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
