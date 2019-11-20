import GildedRoseItem from './GildedRoseItem';

class BackstagePassItem extends GildedRoseItem {
  expiredDailyQualityChange = -this.quality;

  updateQuality() {
    if (this.sellIn < 5) {
      this.dailyQualityChange = 3
    }

    if (this.sellIn > 5 && this.sellIn < 10) {
      this.dailyQualityChange = 2
    }

    super.updateQuality()
  }
}

export default BackstagePassItem;