export default (...classes) => {
  console.log(classes.join(' '));
  return classes.filter(Boolean).join(' ')
}