// import './App.css';

function Student(props) {
  const student = props.student;

  const deleteStudent = (e) => {
    fetch(`http://localhost:8080/student/${student.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Student deleted successfully");
    });
  };
  return (
    <div className="student__block">
      <div className="student__info">
        {" "}
        <div className="">{props.idx + 1}.</div>
        <div className="student__name">Name:{student.name}</div>
        <div className=""> Address:{student.address}</div>
      </div>
      <div className="student__action">
        <button onClick={deleteStudent} className="student__delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Student;
