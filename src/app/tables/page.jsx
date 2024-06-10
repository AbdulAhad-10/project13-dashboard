import CheckTable from "@/components/CheckTable";
import ComplexTable from "@/components/ComplexTable";
import DevelopmentTable from "@/components/DevelopmentTable";
import FourColumnTable from "@/components/FourColumnTable";

const TablesPage = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex-1 min-w-[300px] mb-4">
          <DevelopmentTable />
        </div>

        <div className="flex-1 min-w-[300px] mb-4">
          <CheckTable />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex-1 min-w-[300px] mb-4">
          <FourColumnTable />
        </div>

        <div className="flex-1 min-w-[300px] mb-4">
          <ComplexTable />
        </div>
      </div>
    </main>
  );
};

export default TablesPage;
