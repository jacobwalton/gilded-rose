import GildedRoseItem from './GildedRoseItem';

class BackstagePassItem extends GildedRoseItem {
  updateQuality() {
    if (this.sellIn <= 0) {
      this.quality = 0;
      return;
    }

    if (this.sellIn < 5) {
      this.quality = this.quality + 3
      return;
    }

    if (this.sellIn < 10) {
      this.quality = this.quality + 2
      return;
    }
  }
}

export default BackstagePassItem;