import { notFound } from "next/navigation";
import { getCompany } from "@/lib/companies";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

function Metric({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="border rounded-xl p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-2 text-xl font-bold">{value}</p>
    </div>
  );
}

export default async function CompanyPage({ params }: PageProps) {
  const { id } = await params;

  const company = getCompany(id);

  if (!company) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold">{company.name}</h1>

          <p className="mt-2 text-gray-600">
            {company.industry} • {company.location}
          </p>
        </div>

        <div className="rounded-xl bg-green-100 px-5 py-3 font-bold text-green-700">
          {company.retirementScore}/100
        </div>
      </div>

      <section className="mt-10 grid gap-5 md:grid-cols-4">
        <Metric title="Founded" value={company.founded} />
        <Metric title="Revenue" value={company.revenue} />
        <Metric title="Employees" value={company.employees} />
        <Metric title="Owner" value={company.director} />
      </section>

      <section className="mt-12 rounded-2xl border p-8">
        <h2 className="text-2xl font-bold">Opportunity Analysis</h2>

        <p className="mt-4 text-gray-600">
          This business has operated for many years with characteristics commonly
          associated with owner succession opportunities.
        </p>
      </section>
    </main>
  );
}
