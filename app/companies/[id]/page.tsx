import { getCompany } from "@/lib/companies";
import { notFound } from "next/navigation";


export default function CompanyPage({

params,

}:{

params:{
id:string
}

}){


const company = getCompany(params.id);


if(!company){

notFound();

}


return (

<main className="
max-w-6xl
mx-auto
px-6
py-10
">


<div className="
flex
justify-between
items-start
">


<div>

<h1 className="
text-4xl
font-bold
">

{company.name}

</h1>


<p className="
mt-2
text-gray-600
">

{company.industry}
•
{company.location}

</p>


</div>


<div className="
rounded-xl
bg-green-100
px-5
py-3
text-green-700
font-bold
">

{company.retirementScore}/100

</div>


</div>



<section className="
grid
md:grid-cols-4
gap-5
mt-10
">


<Metric

title="Founded"

value={company.founded}

/>


<Metric

title="Revenue"

value={company.revenue}

/>


<Metric

title="Employees"

value={company.employees}

/>


<Metric

title="Owner"

value={company.director}

/>


</section>



<section className="
mt-12
border
rounded-2xl
p-8
">


<h2 className="
text-2xl
font-bold
">

Opportunity Analysis

</h2>


<p className="
mt-4
text-gray-600
">

This business has operated for many years
with characteristics commonly associated
with owner succession opportunities.

</p>


</section>


</main>

)

}



function Metric({

title,

value

}:{

title:string;

value:string|number;

}){


return (

<div className="
border
rounded-xl
p-5
">


<p className="
text-sm
text-gray-500
">

{title}

</p>


<p className="
text-xl
font-bold
mt-2
">

{value}

</p>


</div>

)

}
