import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/components/i18n-provider';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface DashboardTasksProps {
  dictionary: any;
}

export function DashboardTasks({ dictionary }: DashboardTasksProps) {
  const { locale } = useI18n();
  
  // Mock data for tasks
  const tasks = [
    {
      id: 1,
      title: "Schedule property inspection",
      dueDate: "2023-06-15",
      status: "OPEN",
      priority: "HIGH",
      property: "Luxury Villa with Pool"
    },
    {
      id: 2,
      title: "Collect rent from tenant",
      dueDate: "2023-06-01",
      status: "IN_PROGRESS",
      priority: "MEDIUM",
      property: "Modern Downtown Apartment"
    },
    {
      id: 3,
      title: "Fix leaking faucet",
      dueDate: "2023-05-28",
      status: "COMPLETED",
      priority: "LOW",
      property: "Cozy Suburban Home"
    }
  ];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'IN_PROGRESS':
        return <Clock className="h-5 w-5 text-amber-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'OPEN':
        return dictionary.status.open;
      case 'IN_PROGRESS':
        return dictionary.status.inProgress;
      case 'COMPLETED':
        return dictionary.status.completed;
      default:
        return status;
    }
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{dictionary.title}</h2>
        <div className="flex space-x-2">
          <Link href={`/${locale}/tasks`}>
            <Button variant="outline" size="sm">
              {dictionary.viewAll}
            </Button>
          </Link>
          <Link href={`/${locale}/tasks/new`}>
            <Button size="sm">
              {dictionary.addNew}
            </Button>
          </Link>
        </div>
      </div>
      
      {tasks.length > 0 ? (
        <div className="space-y-4">
          {tasks.map((task) => (
            <Link
              key={task.id}
              href={`/${locale}/tasks/${task.id}`}
              className="flex items-center space-x-4 p-3 hover:bg-muted rounded-md transition-colors"
            >
              <div className="flex-shrink-0">
                {getStatusIcon(task.status)}
              </div>
              
              <div className="flex-grow min-w-0">
                <h3 className="font-medium truncate">{task.title}</h3>
                <p className="text-sm text-muted-foreground truncate">
                  {task.property}
                </p>
              </div>
              
              <div className="flex-shrink-0 text-right">
                <div className="text-sm font-medium">
                  {getStatusText(task.status)}
                </div>
                <p className="text-sm text-muted-foreground">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">{dictionary.noTasks}</p>
        </div>
      )}
    </div>
  );
}