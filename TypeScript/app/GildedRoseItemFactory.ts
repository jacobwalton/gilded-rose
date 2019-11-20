import Item from "./Item";
import GildedRoseItem from "./GildedRoseItem";
import VintageItem from "./VintageItem";
import LegendaryItem from "./LegendaryItem";
import BackstagePassItem from "./BackstagePassItem";

class GildedRoseItemFactory {
  private static inventory = {
    'Aged Brie': VintageItem,
    'Sulfuras, Hand of Ragnaros': LegendaryItem,
    'Backstage passes to a TAFKAL80ETC concert': BackstagePassItem,
  }

  static create(item:Item) {
    const { name, sellIn, quality } = item;
    const itemClass = this.inventory[name] || GildedRoseItem
    return new itemClass(name, sellIn, quality);
  }
}

export default GildedRoseItemFactory;