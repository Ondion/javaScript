const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration);
};

const prepareBigMac = () => {
  setTimeout((molho) => {
    console.log('1- Big Mac ' + molho);
  }, Math.random() * 2000, "com molho barbecue");
}

const prepareMilkShake = () => {
  setTimeout(() => {
    console.log('2- Milk Shake');
  },  Math.random() * 2000);
}

console.log('Vou fazer meu pedido');

prepareBigMac();
prepareMilkShake();

console.log('Fiz meu pedido');
