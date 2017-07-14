new Vue({
  el: "#app",
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false
    }
  },
  methods: {
    startGame: function(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
      console.log('HIT!');
    },
    attack: function () {
      var vm = this;
      function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
      }
      vm.attackSize = randomInteger(1, 10);
    }
  }
})