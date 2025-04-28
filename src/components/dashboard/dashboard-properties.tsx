import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/components/i18n-provider';

interface DashboardPropertiesProps {
  dictionary: any;
}

export function DashboardProperties({ dictionary }: DashboardPropertiesProps) {
  const { locale } = useI18n();
  
  // Mock data for properties
  const properties = [
    {
      id: 1,
      name: "Luxury Villa with Pool",
      address: "123 Palm Avenue, Miami, FL",
      status: "ACTIVE",
      occupancy: "80%",
      income: "$5,200",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
    },
    {
      id: 2,
      name: "Modern Downtown Apartment",
      address: "456 Urban Street, New York, NY",
      status: "ACTIVE",
      occupancy: "100%",
      income: "$3,800",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "Cozy Suburban Home",
      address: "789 Maple Drive, Chicago, IL",
      status: "MAINTENANCE",
      occupancy: "0%",
      income: "$0",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{dictionary.title}</h2>
        <div className="flex space-x-2">
          <Link href={`/${locale}/properties`}>
            <Button variant="outline" size="sm">
              {dictionary.viewAll}
            </Button>
          </Link>
          <Link href={`/${locale}/properties/new`}>
            <Button size="sm">
              {dictionary.addNew}
            </Button>
          </Link>
        </div>
      </div>
      
      {properties.length > 0 ? (
        <div className="space-y-4">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/${locale}/properties/${property.id}`}
              className="flex items-center space-x-4 p-3 hover:bg-muted rounded-md transition-colors"
            >
              <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              
              <div className="flex-grow min-w-0">
                <h3 className="font-medium truncate">{property.name}</h3>
                <p className="text-sm text-muted-foreground truncate">
                  {property.address}
                </p>
              </div>
              
              <div className="flex-shrink-0 text-right">
                <div className={`text-sm font-medium ${
                  property.status === 'ACTIVE' ? 'text-green-500' : 'text-amber-500'
                }`}>
                  {property.status}
                </div>
                <p className="text-sm text-muted-foreground">
                  {property.income} / mo
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">{dictionary.noProperties}</p>
        </div>
      )}
    </div>
  );
}