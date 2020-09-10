let app = new Vue({
  el: "#app",
  data: {
    prefs: [
      {name: "青森"},
      {name: "秋田"},
      {name: "宮城"},
      {name: "岩手"},
      {name: "山形"},
      {name: "福島"},
    ]
  },
  methods: {
    shuffle: function() {
      this.prefs = _.shuffle(this.prefs);
    }
  }
})
