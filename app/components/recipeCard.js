import Image from "next/image";
import Link from "next/link";


export default function RecipeCard({ recipe }) {

  const { title, slug, cookingTime, thumbnail } = recipe?.fields;

  return (
    <div className="card">
      <div className="featured">
        <Image
        className="images"
          src={`https:${thumbnail?.fields?.file?.url}`}
          width={thumbnail?.fields?.file?.details?.image?.width}
          height={thumbnail?.fields?.file?.details?.image?.height} 
          alt={title}
          />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link style={{textDecoration:'none', color: 'white', backgroundColor: 'red', padding: '10px 16px', borderRadius: '20px' , cursor: 'pointer' }} href={`/recipes/${slug}`}>
            Read more about this..
          </Link>
        </div>
      </div>
    </div>
  )
}
