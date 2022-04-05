/**
 * A clothing type.
 * @enum {string}
 */
export const ClothingType = {
  Coat: "coat",
  Hat: "hat",
  Layer: "layer",
  Pants: "pants",
  Shoes: "shoes",
  UnderGarment: "under",
};

/**
 * A user-defined item of clothing.
 * @typedef {Object} ClothingItem
 * @property {string} color
 * @property {string} name
 * @property {number} rain
 * @property {ClothingType} type
 * @property {number} warmth
 * @property {number} wind
 */

/**
 * An object which can recommend items of clothing for a specific set of conditions.
 */
export class Recommender {
  /**
   * @param {ClothingItem[]} wardrobe The available items of clothing.
   * @param {ClothingItem[]} [history] An optional array of previously used clothing items.
   */
  constructor(wardrobe, history = []) {
    this.wardrobe = wardrobe;
    this.history = history;
  }

  /**
   * Recommends an item based on given conditions.
   * @param {{}} [conditions] The current conditions to take into account when recommending an outfit.
   */
  recommendItem(conditions = {}) {
    const randomIndex = Math.floor(Math.random() * this.wardrobe.length),
      item = this.wardrobe[randomIndex];

    this.history.push(item);
    return item;
  }
}
