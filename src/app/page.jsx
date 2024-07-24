"use Clients"
import Link from "next/link";
import User from ".//User/settings/page";

export default function Home() {
  return (
    <>
    <main className="flex  items-center justify-center p-4 bg-gray-600 text-white ">
    <Link href="/User/settings"> <h1 className="px-4">Home</h1></Link>  
    <Link href="/User/todo-list"><h1 className="px-4">To do list</h1></Link>
 <h1 className="px-4"> Hello Next Js</h1>
 <h1 className="px-4">Hello Next Js</h1>
    </main>
      
<User/>

</>
  );
}
