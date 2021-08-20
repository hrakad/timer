const setTimer = function(arg){
  let timer = Number(arg);
    if ( timer < 0 || isNaN(timer)) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('peep', timer)
  }, timer * 1000);

}
const args = process.argv.slice(2)

for (const arg of args) {
  setTimer(arg);
}
