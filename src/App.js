import Header from "./components/header/Header";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import scrollreveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
   #header,
   #section1,
   #section2,
    `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  });
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
