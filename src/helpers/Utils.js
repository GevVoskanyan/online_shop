class Utils {
  static priceFormat(price, currency = 'usd') {
    if (currency === 'usd') {
      return `$${price.toFixed(2)}`;
    } else if (currency === 'rur') {
      return `${price.toFixed(2)}₽`;
    }
    return price.toFixed(2);
  }
}

export default Utils;
