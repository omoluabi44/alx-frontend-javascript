export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
