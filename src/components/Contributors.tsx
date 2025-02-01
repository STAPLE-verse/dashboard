import { Card } from "./Card";
import { Project } from "../data";
import { DonutChart } from "./DonutChart";

interface ContributorsProps {
  data: Project;
}

const Contributors = ({ data }: ContributorsProps) => {
  // Calculate role counts
  const roleCounts = data.tasks
    .flatMap((task) => task.roles) // Get all roles
    .reduce((acc, role) => {
      acc[role.name] = (acc[role.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const statusCounts = data.tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Transform to chart format
  const roleData = Object.entries(roleCounts).map(([name, amount]) => ({
    name,
    amount,
  }));
  const statusData = Object.entries(statusCounts).map(([name, amount]) => ({
    name,
    amount,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-4 sm:m-4">
      <Card className="mx-auto max-w-xs">
        <DonutChart
          className="mx-auto"
          data={statusData}
          category="name"
          value="amount"
          showLabel={true}
          label="Task status"
        />
      </Card>
      <Card className="mx-auto max-w-xs">
        <DonutChart
          className="mx-auto"
          data={roleData}
          category="name"
          value="amount"
          showLabel={true}
          label="Contributions"
        />
      </Card>
      <Card className="mx-auto max-w-xs">
        <p className="text-center text-gray-400">Card</p>
      </Card>
      <Card className="mx-auto max-w-xs">
        <p className="text-center text-gray-400">Card</p>
      </Card>
    </div>
  );
};

export default Contributors;

// const chartdata = [
//   {
//     name: "SolarCells",
//     amount: 4890,
//   },
//   {
//     name: "Glass",
//     amount: 2103,
//   },
//   {
//     name: "JunctionBox",
//     amount: 2050,
//   },
//   {
//     name: "Adhesive",
//     amount: 1300,
//   },
//   {
//     name: "BackSheet",
//     amount: 1100,
//   },
//   {
//     name: "Frame",
//     amount: 700,
//   },
//   {
//     name: "Encapsulant",
//     amount: 200,
//   },
// ];
