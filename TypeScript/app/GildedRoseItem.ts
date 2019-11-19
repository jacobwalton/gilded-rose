import Item from './Item';

class GildedRoseItem extends Item {
  updateQuality() {
    if (this.quality === 0) {
      return;
    }
    if (this.sellIn > 0) {
      this.quality--;
    } else {
      this.quality = this.quality - 2;
    }
  }

  updateSellin() {
    this.sellIn--;
  }

  update() {
    this.updateQuality()
    this.updateSellin()
  }
}

export default GildedRoseItem;