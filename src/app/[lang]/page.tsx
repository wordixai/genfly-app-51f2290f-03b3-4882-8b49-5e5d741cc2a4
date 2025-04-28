import { PropertyCard } from "@/components/property/property-card";
import { SearchBar } from "@/components/search/search-bar";
import { getDictionary } from "@/lib/dictionaries";
import { getFeaturedProperties } from "@/lib/data";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  const featuredProperties = await getFeaturedProperties();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {dict.home.hero.title}
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            {dict.home.hero.subtitle}
          </p>
          <div className="w-full max-w-4xl">
            <SearchBar placeholder={dict.search.placeholder} />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{dict.home.featured.title}</h2>
          <a
            href={`/${lang}/properties`}
            className="text-primary hover:underline"
          >
            {dict.home.featured.viewAll}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              locale={lang}
              currencyCode="USD"
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12 py-12 bg-muted rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {dict.home.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.home.features.items.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          {dict.home.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.home.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm border"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{dict.home.cta.title}</h2>
        <p className="mb-6 max-w-2xl mx-auto">{dict.home.cta.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`/${lang}/properties`}
            className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            {dict.home.cta.browseProperties}
          </a>
          <a
            href={`/${lang}/contact`}
            className="bg-transparent border border-white px-6 py-2 rounded-md font-medium hover:bg-white/10 transition-colors"
          >
            {dict.home.cta.contactUs}
          </a>
        </div>
      </section>
    </div>
  );
}