class Hello {
  static getWorld() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(' world'), 500);
    });
  }

  static hello() {
    return new Promise((resolve, reject) => {
      this.getWorld().then(result => {
        resolve('hello' + result);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}

export default Hello;
