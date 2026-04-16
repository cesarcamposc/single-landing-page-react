import Figure from "./components/Figure";
import NavBar from "./components/NavBar";
import Secction from "./components/Secction";

const App = () => {
  return (
    <>
      {/* <h1 className="text-5xl text-center text-orange-800 font-bold underline">Hello world!</h1> */}
      <NavBar/>
      <main className="container flex flex-col lg:flex-row justify-between items-center mx-auto p-4 md:p-8">
        <Secction/>
        <Figure/>
      </main>
    </>    
  );
};

export default App;
