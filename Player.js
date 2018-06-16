class Player {
  constructor() {
    this.health = 20;
    this.prevHealth = 20;
  }

  playTurn(warrior) {
    // Cool code goes here.
    this.health = warrior.health();

    // warrior.think(warrior.feel());
    var felt = warrior.feel();
    if (felt.isEmpty()) {
      if (!this.takingDamage() && this.health < 20) {
        warrior.rest();
      } else {
        warrior.walk();

      }
    } else {
      var unit = felt.getUnit();
      if (unit.isBound()) {
        warrior.rescue();
      } else if (unit.isEnemy()) {
        warrior.attack();
      }
    }
    this.prevHealth = this.health;
  }

  takingDamage(warrior) {
    return this.prevHealth > this.health;
  }
}
