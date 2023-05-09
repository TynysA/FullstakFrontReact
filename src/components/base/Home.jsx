
function Home() {
  const getAdd = (e) => {
    let contact__modal = document.querySelector(".contact__modal-wrap");
    contact__modal.classList.add("active");
  };
  return (
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__title">Список Студентов</div>
          <div className="home__add" onClick={getAdd}>
            Добавить
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
