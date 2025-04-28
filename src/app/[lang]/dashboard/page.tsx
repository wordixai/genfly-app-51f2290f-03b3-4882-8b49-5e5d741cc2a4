import { getDictionary } from "@/lib/dictionaries";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardProperties } from "@/components/dashboard/dashboard-properties";
import { DashboardTasks } from "@/components/dashboard/dashboard-tasks";
import { DashboardPayments } from "@/components/dashboard/dashboard-payments";

export default async function DashboardPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{dict.dashboard.title}</h1>
      
      <DashboardStats dictionary={dict.dashboard.stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <DashboardProperties dictionary={dict.dashboard.properties} />
        <DashboardTasks dictionary={dict.dashboard.tasks} />
      </div>
      
      <div className="mt-8">
        <DashboardPayments dictionary={dict.dashboard.payments} />
      </div>
    </div>
  );
}