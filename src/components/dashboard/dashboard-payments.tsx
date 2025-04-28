import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/components/i18n-provider';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

interface DashboardPaymentsProps {
  dictionary: any;
}

export function DashboardPayments({ dictionary }: DashboardPaymentsProps) {
  const { locale } = useI18n();
  
  // Mock data for payments
  const payments = [
    {
      id: 1,
      tenant: "John Smith",
      property: "Luxury Villa with Pool",
      amount: "$3,500",
      date: "2023-05-28",
      status: "PAID"
    },
    {
      id: 2,
      tenant: "Sarah Johnson",
      property: "Modern Downtown Apartment",
      amount: "$2,200",
      date: "2023-05-27",
      status: "PAID"
    },
    {
      id: 3,
      tenant: "Michael Brown",
      property: "Cozy Suburban Home",
      amount: "$1,800",
      date: "2023-06-01",
      status: "PENDING"
    },
    {
      id: 4,
      tenant: "Emily Davis",
      property: "Waterfront Condo",
      amount: "$2,500",
      date: "2023-05-15",
      status: "FAILED"
    }
  ];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PAID':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'PENDING':
        return <Clock className="h-5 w-5 text-amber-500" />;
      default:
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'PAID':
        return dictionary.status.paid;
      case 'PENDING':
        return dictionary.status.pending;
      case 'FAILED':
        return dictionary.status.failed;
      default:
        return status;
    }
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{dictionary.title}</h2>
        <Link href={`/${locale}/payments`}>
          <Button variant="outline" size="sm">
            {dictionary.viewAll}
          </Button>
        </Link>
      </div>
      
      {payments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2 font-medium">Tenant</th>
                <th className="pb-2 font-medium">Property</th>
                <th className="pb-2 font-medium text-right">Amount</th>
                <th className="pb-2 font-medium text-right">Date</th>
                <th className="pb-2 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="py-3">{payment.tenant}</td>
                  <td className="py-3 text-muted-foreground">{payment.property}</td>
                  <td className="py-3 text-right font-medium">{payment.amount}</td>
                  <td className="py-3 text-right text-muted-foreground">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end space-x-1">
                      {getStatusIcon(payment.status)}
                      <span className={`text-sm ${
                        payment.status === 'PAID' ? 'text-green-500' : 
                        payment.status === 'PENDING' ? 'text-amber-500' : 'text-red-500'
                      }`}>
                        {getStatusText(payment.status)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">{dictionary.noPayments}</p>
        </div>
      )}
    </div>
  );
}