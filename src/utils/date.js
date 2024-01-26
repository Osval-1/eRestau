 const date = () => {
  const date = new Date();
  const formatedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return formatedDate;
};

export default date