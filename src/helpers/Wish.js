import { findIndex } from 'lodash';
import Events from './Events';
import products from '../products.json';

class Wish {
  static getAll() {
    try {
      return JSON.parse(localStorage.getItem('wish')) || [];
    } catch (e) {
      return [];
    }
  }
  static #save(wish) {
    localStorage.setItem('wish', JSON.stringify(wish));
  }

  static add(productId, count) {
    const wish = this.getAll();
    const i = findIndex((d) => d.productId === productId);
    if (i > -1) {
    } else {
      wish.push({
        productId,
        count,
      });
    }

    this.#save(wish);
    Events.emit('wish:change', wish);
    return wish;
  }
  static getWithProducts() {
    const wish = this.getAll();
    const prod = wish.map((item) => {
      item.product = products.find((p) => p.id === item.productId);
      return item;
    });
    return prod;
  }
  static get(productId) {
    const wish = this.getAll();
    return wish.find((d) => d.productId === productId);
  }
  static change(productId, wish) {}
  static delete(productId) {
    const wish = this.getAll().filter((d) => d.productId !== productId);
    this.#save(wish);
    Events.emit('wish:change', wish);
    return wish;
  }
}

export default Wish;
