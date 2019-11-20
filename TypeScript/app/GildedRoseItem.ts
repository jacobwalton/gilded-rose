import Item from './Item';

class GildedRoseItem extends Item {
  minQuality = 0;
  maxQuality = 50;
  dailyQualityChange = -1;
  expiredDailyQualityChange = -2;

  updateQuality() {
    if (this.quality <= this.minQuality || this.quality >= this.maxQuality) {
      return;
    }
    if (this.sellIn >= 0) {
      this.quality = this.quality + this.dailyQualityChange;
    } else {
      this.quality = this.quality + this.expiredDailyQualityChange;
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