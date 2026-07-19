import Link from "next/link";


export default function Navbar() {

return (

<nav className="
flex
items-center
justify-between
py-6
">


<Link
href="/"
className="
text-2xl
font-bold
tracking-tight
"
>
Exitius
</Link>


<div className="
hidden
md:flex
gap-8
text-sm
text-gray-600
">


<Link href="/search">
Search
</Link>


<Link href="/pricing">
Pricing
</Link>


<Link href="/about">
About
</Link>


</div>



<div className="
flex
gap-3
">


<Link
href="/login"
className="
px-4
py-2
text-sm
"
>
Login
</Link>


<Link
href="/register"
className="
rounded-lg
bg-black
px-5
py-2
text-sm
text-white
"
>
Start Free
</Link>


</div>


</nav>

);

}
