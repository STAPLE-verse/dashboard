import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const ListOfTabs = () => (
  <TabsList className="flex md:flex-col space-y-2 md:space-x-0 space-x-2 rounded-xl p-1">
    <TabsTrigger
      value="metadata"
      className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
    >
      Project Summary
    </TabsTrigger>
    <TabsTrigger
      value="contributors"
      className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
    >
      Contributors
    </TabsTrigger>
    <TabsTrigger
      value="tasks"
      className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
    >
      Tasks
    </TabsTrigger>
    <TabsTrigger
      value="formData"
      className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
    >
      Form Data
    </TabsTrigger>
    <TabsTrigger
      value="events"
      className="w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
    >
      Events
    </TabsTrigger>
  </TabsList>
);

export default ListOfTabs;
