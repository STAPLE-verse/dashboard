import { useState } from "react";
import { Project } from "./data";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import Contributors from "./components/Contributors";
import MetadataContent from "./components/MetadataContent";
import ListOfTabs from "./components/ListOfTabs";

const downloadPageHTML = () => {
  // Get the entire HTML document
  const htmlContent = new XMLSerializer().serializeToString(
    document.documentElement
  );

  // Create a valid HTML document with DOCTYPE
  const fullHTML = `<!DOCTYPE html>${htmlContent}`;

  // Create blob and trigger download
  const blob = new Blob([fullHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const link = document.createElement("a");
  link.href = url;
  link.download = `page-snapshot-${timestamp}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

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
            <sub className="text-xl font-light">
              <a href="https://app.staple.science">STAPLE</a> Project Dashboard
            </sub>
          </header>
          <div className="flex justify-center p-4">
            <input
              type="file"
              accept=".json"
              onChange={handleFileSelect}
              className="block w-full max-w-xs text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>
          <div className="flex justify-center p-4">
            <button
              onClick={downloadPageHTML}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
            >
              Download Displayed Information
            </button>
          </div>
          <Tabs
            defaultValue="metadata"
            className="grid md:grid-cols-[300px_1fr] gap-6 p-4"
          >
            <ListOfTabs />

            <div className="w-full">
              <MetadataContent data={data} />
              <Contributors data={data} />
              <TabsContent value="tasks">
                {/* Completed tasks */}
                {/* task logs completed */}
                {/* avg completion time */}
              </TabsContent>
              <TabsContent value="formData"></TabsContent>
              <TabsContent value="events"></TabsContent>
            </div>
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
