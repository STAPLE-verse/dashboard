import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Project } from "./data";

function App() {
  const [data, setData] = useState<Project | null>(null);
  // const params = new URLSearchParams(window.location.search);
  // const apiParam = params.get("api") || "test"; // Default to 'test' if not specified

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("test.json");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <header className="bg-gray-800 text-white p-4 text-center">
            <h1 className="text-4xl">{data.name}</h1>
            <sub className="text-xl font-light">STAPLE Project Dashboard</sub>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-4 sm:m-4">
            <Card className="mx-auto max-w-xs">
              <p className="text-center text-gray-400">Card</p>
            </Card>
            <Card className="mx-auto max-w-xs">
              <p className="text-center text-gray-400">Card</p>
            </Card>
            <Card className="mx-auto max-w-xs">
              <p className="text-center text-gray-400">Card</p>
            </Card>
            <Card className="mx-auto max-w-xs">
              <p className="text-center text-gray-400">Card</p>
            </Card>
          </div>
          <h2>JSON Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
