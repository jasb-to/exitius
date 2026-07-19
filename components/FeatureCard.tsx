interface Props {
 title:string;
 description:string;
}


export default function FeatureCard({
 title,
 description
}:Props){

return (

<div className="
rounded-2xl
border
p-6
">

<h3 className="
font-semibold
text-lg
mb-2
">

{title}

</h3>


<p className="
text-gray-600
text-sm
">

{description}

</p>


</div>

)

}
