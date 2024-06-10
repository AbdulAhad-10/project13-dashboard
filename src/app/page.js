import CustomCalendar from "@/components/CustomCalendar";
import CheckTable from "@/components/CheckTable";
import ComplexTable from "@/components/ComplexTable";
import PieChart from "@/components/PieChart";
import SpendingChart from "@/components/SpendingChart";
import StatsComponent from "@/components/StatsComponent";
import TaskList from "@/components/TaskList";
import TrafficChart from "@/components/TrafficChart";
import WeeklyRevenue from "@/components/WeeklyRevenue";

export default function Home() {
  return (
    <main>
      <StatsComponent />
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex-1 min-w-[300px] mb-4">
          <SpendingChart />
        </div>

        <div className="flex-1 min-w-[300px] mb-4">
          <WeeklyRevenue />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex-1 min-w-[300px] mb-4">
          <CheckTable />
        </div>
        <div className="flex flex-1 gap-4 min-w-[300px] mb-4">
          <div className="flex-1 min-w-[150px]">
            <TrafficChart />
          </div>
          <div className="flex-1 min-w-[150px]">
            <PieChart />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex-1 min-w-[300px] mb-4">
          <ComplexTable />
        </div>
        <div className="flex flex-1 gap-4 min-w-[300px] mb-4">
          <div className="flex-1 min-w-[150px]">
            <TaskList />
          </div>
          <div className="flex-1 min-w-[150px]">
            <CustomCalendar />
          </div>
        </div>
      </div>
    </main>
  );
}
