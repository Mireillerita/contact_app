import { Link } from "react-router-dom";

function LandingPage() {
    const card=[
        {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
        {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
        {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
        {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
    ]
  return (
    <>
    <div className="w-full  ">
        <div className=" flex justify-between px-32 mt-10 ">
            <h2 className="text-[30px] font-bold"> Welcome to your contacts</h2>
            <a className="bg-cyan-700 px-6 py-2 text-white rounded-lg" href="/contacts/add">Add New</a>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 ">
          {card.map((cards,index)=>(
           <Link to="/contacts/view/:contactId" > <div key={index} className="bg-cyan-200 mx-32 my-12 p-4 rounded-lg">
              <h1><span className="font-bold">Name:</span> <span className="text-[18px]">{cards.name }</span></h1>  
              <p><span className="font-bold">Email: </span>{cards.email}</p>
              <h2><span className="font-bold">Telephone: </span>{cards.tel}</h2>
              <h2><span className="font-bold">Location: </span>{cards.location}</h2>
              
            </div></Link>
          ))}  
        </div>
    </div>
    </>
  )
}
export default LandingPage;