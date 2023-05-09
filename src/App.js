import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddStudent from "./components/base/AddStudent";
import Home from "./components/base/Home";
import Student from "./components/base/Student";

function App() {
  const [added, setadded] = useState(false);
  const [students, setStudents] = useState([]);
  // const GetAll =

  async function getAll() {
    const res = await fetch(`http://localhost:8080/student/getAll`);
    const results = await res.json();
    setStudents(results);
  }
  useEffect(() => {
    getAll();
  }, [students]);

  return (
    <div className="App">
      <AddStudent setStudents={setStudents} students={students}></AddStudent>
      <Header></Header>
      <div className="home__base">
        <Home></Home>
        <div className="container">
          {students?.map((student, idx) => (
            <Student idx={idx} key={student.id} student={student} />
            // <div className="student__block" key={student.id}>
            //   <div className="student__info">
            //     {" "}
            //     <div className="">{idx + 1}.</div>
            //     <div className="student__name">Name:{student.name}</div>
            //     <div className=""> Address:{student.address}</div>
            //   </div>
            //   <div className="student__action">
            //     <button onClick={deleteStudent} className="student__delete">
            //       Delete
            //     </button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
