import Item from './Item';
import GildedRoseItem from './GildedRoseItem';
import GildedRoseItemFactory from './GildedRoseItemFactory';

class GildedRose {
  items: Array<Item>;
  gildedRoseItems: Array<GildedRoseItem>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.gildedRoseItems = items.map(item => GildedRoseItemFactory.create(item))
  }

  updateQuality() {
    for(let i = 0; i < this.gildedRoseItems.length; i++) {
      this.gildedRoseItems[i].update();
    }
    return this.gildedRoseItems;
  }
}

export default GildedRose;