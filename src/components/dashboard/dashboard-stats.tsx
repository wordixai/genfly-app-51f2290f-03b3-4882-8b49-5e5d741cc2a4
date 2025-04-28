interface DashboardStatsProps {
  dictionary: any;
}

export function DashboardStats({ dictionary }: DashboardStatsProps) {
  // Mock data for dashboard stats
  const stats = [
    { 
      title: dictionary.properties, 
      value: '12', 
      change: '+2', 
      isPositive: true 
    },
    { 
      title: dictionary.tenants, 
      value: '8', 
      change: '+1', 
      isPositive: true 
    },
    { 
      title: dictionary.income, 
      value: '$12,450', 
      change: '+$1,200', 
      isPositive: true 
    },
    { 
      title: dictionary.expenses, 
      value: '$3,200', 
      change: '-$300', 
      isPositive: false 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            {stat.title}
          </h3>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold">{stat.value}</p>
            <span className={`ml-2 text-sm ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}