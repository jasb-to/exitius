import CompanyCard from "@/components/CompanyCard";
import { companies } from "@/data/companies";


export default function DashboardPage() {

  const savedCompanies = companies.slice(0,2);


  return (

    <main className="
      max-w-6xl
      mx-auto
      px-6
      py-10
    ">

      <h1 className="
        text-4xl
        font-bold
      ">
        My Acquisition Dashboard
      </h1>


      <p className="
        mt-3
        text-gray-600
      ">
        Track businesses you may want to acquire.
      </p>


      <div className="
        mt-10
        grid
        md:grid-cols-2
        gap-6
      ">

        {savedCompanies.map(company => (

          <CompanyCard
            key={company.id}
            company={company}
          />

        ))}

      </div>


    </main>

  );
}
