export default (...classes: any) => {
  return classes.filter(Boolean).join(' ');
}