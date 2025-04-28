import { PropertyGallery } from "@/components/property/property-gallery";
import { PropertyDetails } from "@/components/property/property-details";
import { PropertyAmenities } from "@/components/property/property-amenities";
import { PropertyLocation } from "@/components/property/property-location";
import { PropertyContact } from "@/components/property/property-contact";
import { PropertyReviews } from "@/components/property/property-reviews";
import { SimilarProperties } from "@/components/property/similar-properties";
import { getDictionary } from "@/lib/dictionaries";
import { getPropertyById, getSimilarProperties } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function PropertyPage({
  params: { lang, id },
}: {
  params: { lang: string; id: string };
}) {
  const dict = await getDictionary(lang);
  const property = await getPropertyById(parseInt(id));
  
  if (!property) {
    notFound();
  }
  
  const similarProperties = await getSimilarProperties(property);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <p className="text-muted-foreground">
          {property.address}, {property.city}, {property.state} {property.zipCode}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyGallery photos={property.photos} />
          
          <div className="mt-8">
            <PropertyDetails 
              property={property} 
              locale={lang} 
              currencyCode="USD" 
              dictionary={dict.propertyDetails}
            />
          </div>
          
          <div className="mt-8">
            <PropertyAmenities 
              amenities={property.amenities} 
              dictionary={dict.propertyAmenities}
            />
          </div>
          
          <div className="mt-8">
            <PropertyLocation 
              property={property} 
              dictionary={dict.propertyLocation}
            />
          </div>
          
          <div className="mt-8">
            <PropertyReviews 
              propertyId={property.id} 
              dictionary={dict.propertyReviews}
            />
          </div>
        </div>
        
        <div>
          <div className="sticky top-24">
            <PropertyContact 
              property={property} 
              dictionary={dict.propertyContact}
            />
            
            <div className="mt-8">
              <SimilarProperties 
                properties={similarProperties} 
                locale={lang} 
                currencyCode="USD" 
                dictionary={dict.similarProperties}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}