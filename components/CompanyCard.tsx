import ScoreBadge from "./ScoreBadge";


interface Props {
company:any;
}


export default function CompanyCard({
company
}:Props){


return (

<div
className="
border
rounded-2xl
p-6
hover:shadow-lg
transition
"
>


<div className="
flex
justify-between
">

<h2 className="
font-bold
text-xl
">

{company.name}

</h2>


<ScoreBadge
score={company.retirementScore}
/>


</div>


<div className="
mt-4
space-y-2
text-sm
text-gray-600
">

<p>
Industry: {company.industry}
</p>

<p>
Location: {company.location}
</p>

<p>
Founded: {company.founded}
</p>

<p>
Revenue: {company.revenue}
</p>

<p>
Employees: {company.employees}
</p>

<p>
Owner: {company.director}
</p>

</div>



<button
className="
mt-5
rounded-lg
bg-black
text-white
px-5
py-2
"
>

View Company

</button>


</div>

)

}
