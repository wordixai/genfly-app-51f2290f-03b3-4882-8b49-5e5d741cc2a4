import { PropertyFilters } from "@/components/property/property-filters";
import { PropertyGrid } from "@/components/property/property-grid";
import { getDictionary } from "@/lib/dictionaries";
import { getProperties } from "@/lib/data";

export default async function PropertiesPage({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const dict = await getDictionary(lang);
  const properties = await getProperties(searchParams);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{dict.properties.title}</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <PropertyFilters dictionary={dict.properties.filters} />
        </div>
        
        <div className="lg:w-3/4">
          <PropertyGrid 
            properties={properties} 
            locale={lang} 
            currencyCode="USD" 
            emptyMessage={dict.properties.noResults}
          />
        </div>
      </div>
    </div>
  );
}