import { useState } from "react";
import { Card } from "./components/Card";
import { Project } from "./data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Contributors from "./components/Contributors";

function App() {
  const [data, setData] = useState<Project | null>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        setData(json);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      {data ? (
        <>
          <header className="bg-gray-800 text-white p-4 text-center">
            <h1 className="text-4xl">{data.name}</h1>
            <sub className="text-xl font-light">STAPLE Project Dashboard</sub>
          </header>
          <>
            <div className="flex justify-center p-4">
              <input
                type="file"
                accept=".json"
                onChange={handleFileSelect}
                className="block w-full max-w-xs text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
          </>
          <Tabs defaultValue="contributors">
            <TabsList className="flex w-full max-w-2xl mx-auto my-4 space-x-2 rounded-xl bg-gray-100 p-1">
              <TabsTrigger
                value="contributors"
                className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
              >
                Contributors
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
              >
                Teams
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
              >
                Project
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contributors">
              <Contributors data={data} />
            </TabsContent>

            <TabsContent value="documents">
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
            </TabsContent>

            <TabsContent value="settings">
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
            </TabsContent>
          </Tabs>

          <h2>JSON Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <>
          <header className="bg-gray-800 text-white p-4 text-center">
            <sub className="text-xl font-light">STAPLE Project Dashboard</sub>
          </header>
          <>
            <div className="flex justify-center p-4">
              <input
                type="file"
                accept=".json"
                onChange={handleFileSelect}
                className="block w-full max-w-xs text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
              />
            </div>
          </>
        </>
      )}
    </>
  );
}

export default App;
