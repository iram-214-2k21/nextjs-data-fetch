import ButtonComponent from "./button";
export default async function About()
{
    console.log("Hey");
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const posts=await response.json();
    console.log(posts);
    return(
        <div>
            <ButtonComponent/>
        </div>
    );
}