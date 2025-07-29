import RecipeCard from './components/recipeCard'
import { createClient } from 'contentful'


export async function getRecipes() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACEID,
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  });

  const res = await client.getEntries({ content_type: 'recipe' });
  return res.items;
}

export default async function HomePage() {
  const recipes = await getRecipes();

  return (
    <div className="recipe-list">
      <h1>Recipe List</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

    </div>
  );
}
