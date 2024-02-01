const changeColor = isOnline => {
  let color = 'green';
  if (!isOnline) {
    color = 'red';
  }
  return color;
};

export default changeColor;
