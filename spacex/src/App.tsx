import { useState } from "react";
import YearDropdown from "./components/YearDropdown";
import LaunchesTable from "./components/LaunchesTable";
import backgroundImage from "./assets/background.png";
import "./index.css";

const App = () => {
  const [selectedYear, setSelectedYear] = useState<string>("");

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-center font-league"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="flex justify-between items-center p-[2rem]">
        <div>
          <h1 className="text-[5rem] font-krona">Space-X</h1>
        </div>
        <nav className="flex gap-[8rem] text-[1.5rem]">
          <a href="#" className="hover:underline text-lg">
            about us
          </a>
          <a href="#" className="hover:underline text-lg">
            gallery
          </a>
          <a href="#" className="hover:underline text-lg">
            starlink
          </a>
          <a href="#" className="hover:underline text-lg">
            contact
          </a>
        </nav>
      </header>
      <main className="flex flex-col">
        <div className="flex justify-between p-[5rem]">
          <div className="w-1/2">
            <h2 className="text-[2rem] font-krona">Follow our missions</h2>
            <p className="text-[1.5rem]">
              Select a year of your choice and see the releases made:
            </p>
            <YearDropdown
              selectedYear={selectedYear}
              onChange={setSelectedYear}
            />
          </div>
          <div className="w-1/2 h-[20rem] overflow-y-auto pr-[4rem]">
            {selectedYear ? (
              <LaunchesTable year={selectedYear} />
            ) : (
              <p className="text-[2rem] text-center">
                Select a year to see the launches here.
              </p>
            )}
          </div>
        </div>

        <div className="flex"></div>
      </main>
    </div>
  );
};

export default App;
