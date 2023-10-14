import { useState } from "react";
import axios from "axios";
import  {imageUrl} from "../assets/Imgs"
import '../assets/App.scss'

function Header()
{
  const [qu, setQu] = useState("");
  const [recipie, setRecipie] = useState([]);
  const YOUR_APP_ID = "fbc4893f";
  const YOUR_APP_KEY = "5bc80c79ae3949ee506136c484cb9d90  ";



  const fetchRecipies = async (e: React.FormEvent<HTMLFormElement>) => {
   
    e.preventDefault();
    const url = `https://api.edamam.com/search?q=${qu}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    const result = await axios.get(url);
    console.log(result);
    setRecipie(result.data.hits);
    (e.target as HTMLFormElement).reset();
  
   };


  return (
    <>
    <div className="h-full w-full bg-gradient-to-b from-black to-black/opacity-100">
          <div className=' md:flex w-full h-20 items-center justify-center '>
          <div className='flex items-center gap-2'>
          
          <ul className=' flex items-center gap-10 '>
            <li className='text-xl  items-center text-textColor hover:text-headingColor text-white  cursor-pointer text-yellow-300'>Home</li>
            <li className='text-xl  items-center text-textColor hover:text-headingColor  text-white cursor-pointer'>Menu</li>
            <li className='text-xl  items-center text-textColor hover:text-headingColor text-white cursor-pointer'>About us</li>
            <li className='text-xl  items-center text-textColor hover:text-headingColor  text-white cursor-pointer'>Service</li>

          </ul>
          </div>
          </div>
          </div>



         <div style={{backgroundImage: `url(${imageUrl})`}}  className=" -mt-20 bg-center bg-cover w-screen h-[700px] justify-center text-center align-center bg-slate-100" >
         <div className='bg-black/70  w-full h-full '>
        <h1 className="text-4xl font-bold mb-4 pt-80 text-white">Food Recipe <span className="text-yellow-300">App</span></h1>
        <form
          className="flex justify-center gap-4"
          onSubmit={(e) => fetchRecipies(e)}>

          <input
            type="text"
            placeholder="Search"
            className="w-[400px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring  focus:ring-slate-300"
            onChange={(e) => setQu(e.target.value)} />
          <button className="bg-yellow-500 w-[120px] rounded ">Submit</button>
        </form>
        </div>
        </div>


     <div className="w-full h-auto flex flex-wrap justify-center items-center gap-2 rounded-xl pt-9 ">
        {recipie.map((recipe: any) => (

        <div className="wrapper rounded-xl ">
      <div className="card w-[200px] h-[240px] border rounded-xl shadow-lg cursor-pointer mx-2 my-7 text-center">
        <div className="front flex-col mt-2 rounded-xl"><img 
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              className="w-full h-50 -mt-20 object-cover rounded-xl"
            />
            <p className="text-lg font-bold mt-2 ">{recipe.recipe.label}</p></div>
       <div className="back  -mt-10 text-xs flex-col">
        <h2 className="text-yellow-900 text-xl  ">Ingredients</h2>
       {recipe.recipe.ingredientLines}
       
       </div>
              </div>
                      </div>


        ))}
      </div>
    </>
  );
}


export default Header;

























