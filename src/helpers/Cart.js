import Events from './Events';
import products from '../products.json';
import _ from 'lodash';

class Cart {
  static getAll() {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (e) {
      return [];
    }
  }

  static getWithProducts() {
    const cart = this.getAll();
    const prod = cart.map((item) => {
      item.product = products.find((p) => p.id === item.productId);
      return item;
    });
    return prod;
  }

  static getTotal() {
    const cart = this.getWithProducts();
    const total = _.sumBy(cart, (item) => {
      return (item.product.disconnectPrice || item.product.price) * item.count;
    });
    return total;
  }

  static get(productId) {
    const cart = this.getAll();
    return cart.find((d) => d.productId === productId);
  }

  static #save(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  static add(product, count) {
    const cart = this.getAll();
    if (!product.stock) {
      return cart;
    }
    const i = cart.findIndex((d) => d.productId === product.id);
    if (i > -1) {
      cart[i].count += count;
      cart[i].count = Math.min(cart[i].count, product.stock);
      cart[i].count = Math.max(cart[i].count, 1);
    } else {
      cart.push({
        productId: product.id,
        title: product.title,
        count: Math.min(count, product.stock),
      });
    }
    this.#save(cart);
    Events.emit('cart:change', cart);
    return cart;
  }

  static change(product, count) {
    const cart = this.getAll();
    if (!product.stock) {
      return cart;
    }
    console.log(count);
    if (count <= 0) {
      return this.delete(product.id);
    }
    const i = cart.findIndex((d) => d.productId === product.id);
    if (i > -1) {
      cart[i].count = Math.min(count, product.stock);
    } else {
      cart.push({
        productId: product.id,
        title: product.title,
        count: Math.min(count, product.stock),
      });
    }
    this.#save(cart);
    Events.emit('cart:change', cart);
    return cart;
  }

  static delete(productId) {
    const cart = this.getAll().filter((d) => d.productId !== productId);
    this.#save(cart);
    Events.emit('cart:change', cart);
    return cart;
  }
}

export default Cart;
