const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration);
};

const prepareBigMac = () => {
  setTimeout(() => {
    console.log('1- Big Mac ');
  }, 2000);
}

const prepareMilkShake = () => {
  setTimeout(() => {
    console.log('2- Milk Shake');
  }, 2000);
}

console.log('Vou fazer meu pedido');

prepareBigMac();
prepareMilkShake();

console.log('Fiz meu pedido');
