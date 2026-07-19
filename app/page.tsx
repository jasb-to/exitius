import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";


export default function Home(){


return (

<main className="max-w-6xl mx-auto px-6">


<Navbar/>


<section className="
py-24
text-center
">


<h1 className="
text-6xl
font-bold
tracking-tight
">

Find great businesses
<br/>
before they go to market.

</h1>


<p className="
mt-8
text-xl
text-gray-600
max-w-2xl
mx-auto
">

Exitius helps entrepreneurs discover
established companies with succession
opportunities before they appear for sale.

</p>


<div className="
mt-10
flex
justify-center
gap-4
">


<button className="
rounded-xl
bg-black
text-white
px-8
py-4
">

Start Searching

</button>


<button className="
rounded-xl
border
px-8
py-4
">

View Demo

</button>


</div>


</section>



<section className="
grid
md:grid-cols-3
gap-6
py-20
">


<FeatureCard

title="Discover"

description="
Search millions of companies and identify hidden acquisition opportunities.
"

/>


<FeatureCard

title="Analyse"

description="
Understand financial history, directors and succession signals.
"

/>


<FeatureCard

title="Acquire"

description="
Build relationships with owners before businesses reach the market.
"

/>


</section>




<section className="
rounded-3xl
bg-gray-100
p-12
my-20
">


<h2 className="
text-3xl
font-bold
">

Search the market

</h2>


<p className="
mt-3
text-gray-600
">

Filter by industry, location,
revenue and retirement probability.

</p>



<div className="
mt-8
bg-white
rounded-xl
border
p-5
flex
gap-3
">


<input

placeholder="
Search engineering, manufacturing...
"

className="
flex-1
outline-none
"

/>


<button className="
bg-black
text-white
px-6
rounded-lg
">

Search

</button>


</div>


</section>



<footer className="
py-10
text-center
text-sm
text-gray-500
">

© {new Date().getFullYear()} Exitius

</footer>


</main>

)

}
