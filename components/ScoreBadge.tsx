interface Props {
 score:number;
}


export default function ScoreBadge({
 score
}:Props){

let colour =
score >= 85
? "bg-green-100 text-green-700"
:
score >=70
? "bg-yellow-100 text-yellow-700"
:
"bg-gray-100 text-gray-700";


return (

<span
className={`
px-3
py-1
rounded-full
text-sm
font-semibold
${colour}
`}
>

{score}/100

</span>

)

}
