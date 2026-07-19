import Link from "next/link";
import ScoreBadge from "./ScoreBadge";

interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  founded: number;
  revenue: string;
  employees: number;
  director: string;
  retirementScore: number;
  opportunity: string;
}

interface Props {
  company: Company;
}

export default function CompanyCard({ company }: Props) {
  return (
    <div className="border rounded-2xl p-6 hover:shadow-lg transition">

      <div className="flex items-start justify-between">
        <h2 className="text-xl font-bold">
          {company.name}
        </h2>

        <ScoreBadge score={company.retirementScore} />
      </div>

      <div className="mt-5 space-y-2 text-sm text-gray-600">
        <p><strong>Industry:</strong> {company.industry}</p>
        <p><strong>Location:</strong> {company.location}</p>
        <p><strong>Founded:</strong> {company.founded}</p>
        <p><strong>Revenue:</strong> {company.revenue}</p>
        <p><strong>Employees:</strong> {company.employees}</p>
        <p><strong>Owner:</strong> {company.director}</p>
      </div>

      <Link
        href={`/companies/${company.id}`}
        className="mt-6 inline-block rounded-lg bg-black px-5 py-2 text-white"
      >
        View Company
      </Link>

    </div>
  );
}
