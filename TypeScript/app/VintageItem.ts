import GildedRoseItem from '../app/GildedRoseItem';

class VintageItem extends GildedRoseItem {
  updateQuality() {
    if (this.quality >= 50) {
      return;
    }
    this.quality++;
  }
}

export default VintageItem;