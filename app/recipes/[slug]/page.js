import { createClient } from 'contentful'
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

const client = createClient({
  space: process.env.CONTENTFUL_SPACEID,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
});

// fetch all recipes
async function getRecipes() {
  const res = await client.getEntries({ content_type: 'recipe' });
  return res.items;
}

// get a single recipe by slug
async function getRecipeBySlug(slug) {
  const res = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': slug,
  });

  return res.items[0]; // only one result expected
}

// 👇 Use this structure to get slug from params
export default async function RecipeDetails({ params }) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) return <div>Recipe not found</div>;

  const { title, cookingTime,  featuredImage, ingredients, method } = recipe?.fields;

  return (
    <div>
       <Link href={'/'}>
        <button>&#8592; Go Back </button>
        </Link>
      <div className='banner'>


        <Image className="image"
          src={`https:${featuredImage?.fields?.file?.url}`}
          width={featuredImage?.fields?.file?.details?.image?.width}
          height={featuredImage?.fields?.file?.details?.image?.height}
          alt={title}
          />

        <h2>{title}</h2>
      </div>

      <div className="info2">
        <p>Take about {cookingTime} mins to cook.</p>
        <h3>Ingredients:</h3>

        <div className="list-tag">

        {ingredients.map((ing,index) => (
          <ul key={index}>
            <li>{ing}</li>
          </ul>
        ))}
        </div>
      </div>

        <div className="method">
          <h3>Method:</h3>
          <div>{documentToReactComponents(method)}</div>
        </div>
       
    </div>
  );
}
