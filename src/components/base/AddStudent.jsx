import { useState } from "react";

function AddStudent(props) {
  const students = props.students;
  const setStudents = props.setStudents;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const ClodeMoadal = (e) => {
    let contact__modal = document.querySelector(".contact__modal-wrap");
    contact__modal.classList.remove("active");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert("Please enter the name");
    }
    if (address.length === 0) {
      alert("Please enter the address");
    }
    if (address.length > 0 && name.length > 0) {
      console.log(name + " : " + address);
      setName("");
      setAddress("");
      let student = { name, address };
      fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        console.log("New Student added");
      });
      setStudents([...students, ...[student]]);
      e.target.reset();
      ClodeMoadal();
    }
  };
  return (
    <div className="contact__modal-wrap">
      <div className="contact__modal">
        <div className="contact__modal-title">Добавить Студента</div>
        <form
          onSubmit={sendEmail}
          autoComplete="off"
          className="contact__form contact__item"
        >
          <div className="contact__name">
            <input
              className="contact__input"
              type="text"
              placeholder="Имя"
              onChange={(e) => setName(e.target.value)}
              name="contact__name"
            />
          </div>
          <div className="contact__name">
            <input
              className="contact__input"
              type="text"
              placeholder="Адресс"
              onChange={(e) => setAddress(e.target.value)}
              name="contact__name"
            />
          </div>
          <input className="contact__btn" type="submit" value="Добвать" />
        </form>
        <div className="contact__modal-close" onClick={ClodeMoadal}>
          <div className="close_vector"></div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
