import Link from "next/link";

const mockUrls=["https://63yyum08cj.ufs.sh/f/NJFq86LZWhPKSVwrfJgbwejk8UcsCqQToml7X6WMxhEi21p3",
  "https://63yyum08cj.ufs.sh/f/NJFq86LZWhPKPx8IpB0xklPZIEbozVduChWweqt9XU2ajgOi",
  "https://63yyum08cj.ufs.sh/f/NJFq86LZWhPKKdBYkDqwX1PmoDAZGkrej8FBbyHUfpNzJET0"
];
const mockImages=mockUrls.map((url,index)=>({
  id:index+1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
      {  [...mockImages,...mockImages,...mockImages,...mockImages].map((image)=> (
          <div key={image.id} className="w-48">
          <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
