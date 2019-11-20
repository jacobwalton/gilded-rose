import { expect } from 'chai';
import GildedRose from '../app/gilded-rose';
import Item from '../app/Item';

describe('Gilded Rose', function () {
  describe('normal items', function () {
    it('reduces quality by 1', function () {
      const gildedRose = new GildedRose([new Item('some normal product', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(9);
    });

    it('reduces sellIn by 1', function () {
      const gildedRose = new GildedRose([new Item('some normal product', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(9);
    });

    it('reduces quality by 2 if sell by has passed', function () {
      const gildedRose = new GildedRose([new Item('some normal product', -1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(8);
    });
  });

  describe('vintage items', function() {
    it('increases quality by 1', function() {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(11);
    });

    it('never increases quality greater than 50', function() {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });

    describe('legendary items', function() {
      it('never expires', function() {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(10);
      });

      it('always has quality 80', function() {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
      });
    });

    describe('backstage passes', function() {
      it('increases quality by 2 when it expires in less than ten days', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);
      });

      it('increases quality by 3 when it expires in less than five days', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
      });

      it('sets quality to 0 after the event', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
      });
    });

    describe('conjured items', function() {
      it('reduces quality by 2', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
      });
  
      it('reduces quality by 4 if sell by has passed', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -1, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
      });
    });
  });
});
