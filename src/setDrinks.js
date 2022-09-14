const setDrink = (section) => {
  //   console.log(section);
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    // console.log(e.target);
    const id = e.target.parentElement.dataset.id;
    // console.log(id);

    // JSON.stringify
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
