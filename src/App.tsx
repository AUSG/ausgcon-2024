import Faq from './FAQ';
import Introduce from './Introduce';
import Timetable from './TimeTable';

function App() {

  return (
    <div style={{
      paddingLeft: "10px",
      paddingRight: "10px",
      width: "100%",
      maxWidth: "580px",
      height: "100vh",
    }}>
      <Introduce />
      <Timetable />
      <Faq />
    </div>

  )
}

export default App
