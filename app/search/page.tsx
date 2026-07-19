import CompanyCard from "@/components/CompanyCard";
import { companies } from "@/data/companies";


export default function SearchPage() {

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold">
        Find Acquisition Opportunities
      </h1>


      <p className="mt-3 text-gray-600">
        Discover established businesses before they reach the market.
      </p>


      <div className="
        mt-10
        grid
        md:grid-cols-3
        gap-6
      ">

        {companies.map((company) => (

          <CompanyCard
            key={company.id}
            company={company}
          />

        ))}

      </div>

    </main>
  );
}
