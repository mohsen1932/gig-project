export const randomizeColors = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i].color;
    array[i].color = array[j].color;
    array[j].color = temp;
  }
  return array;
};
