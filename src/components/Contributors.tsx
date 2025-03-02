import { Card } from "./Card";
import { Project } from "../data";
import { DonutChart } from "./DonutChart";
import { TabsContent } from "@radix-ui/react-tabs";

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
  const teamCount = data.projectMembers.filter(
    (member) => member.name && member.name.startsWith("Team")
  ).length;

  return (
    <TabsContent value="contributors">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-4">
        {/* Total members */}
        <Card className="mx-auto max-w-xs">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-center mb-2">Members</h3>
            <p className="text-3xl font-bold text-center">
              {data.projectMembers.length}
            </p>
          </div>
        </Card>
        {/* Teams */}
        <Card className="mx-auto max-w-xs">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-center mb-2">Teams</h3>
            <p className="text-3xl font-bold text-center">{teamCount}</p>
          </div>
        </Card>
        {/* Roles */}
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
        {/* Tasks compmleted */}
        <Card className="mx-auto max-w-xs">
          <DonutChart
            className="mx-auto"
            data={statusData}
            category="name"
            value="amount"
            showLabel={true}
            label="Tasks"
          />
        </Card>
        {/* Forms submitted */}
        <Card className="mx-auto max-w-xs">
          <DonutChart
            className="mx-auto"
            data={statusData}
            category="name"
            value="amount"
            showLabel={true}
            label="Tasks"
          />
        </Card>
      </div>
    </TabsContent>
  );
};

export default Contributors;
