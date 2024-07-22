import { useState } from "react";
import PostCard from "../components/cards/PostCard";
import u1 from "/u1.png"
import u2 from "/u2.png"
import Hand from "/hand.png"
import Sad from "/sad.png"
import ChatWhite from "/chatwhite.png"
// import SignUpForm from "../components/forms/SignUpForm";
import Modal from "../components/modals/Modal";
const posts =[
    {
        name : "Theresa Webb",
        time : "5mins ago",
        message : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        messageEmoji : Hand,
        comments : 24,
        image : u1
    },
    {
        name : "John Doe",
        time : "8mins ago • Edited",
        message : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        messageEmoji : Sad,
        comments : 5,
        image : u2
    },
    {
        name : "John Doe",
        time : "8mins ago • Edited",
        message : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        messageEmoji : Sad,
        comments : 50,
        image : u2
    },
     {
        name : "John Doe",
        time : "8mins ago • Edited",
        message : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        messageEmoji : Hand,
        comments : 15,
        image : u2
    }
]


const Posts = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
  return( 
<section className="bg-gray-50 dark:bg-atlysGray-500 max-h-full overflow-auto py-16 static">
  <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 mx-auto max-w-2xl">
        <div className="flex flex-col gap-4 items-start justify-start">
            <h1 className="text-3xl font-medium leading-tight tracking-tight text-atlysGray-50  ">
                Hello Jane
            </h1>
              <p className="text-md font-medium leading-tight tracking-tight text-atlysGray-100  w-[85%]">
                How are you doing today? Would you like to share something with the community 🤗
            </p>
        </div>
      <div className="p-6 bg-atlysGray-400 rounded-lg border w-full border-atlysGray-300 shadow-md ">
         <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">        
                     <div className="flex flex-col font-medium dark:text-white">
                        <span className="font-medium text-atlysGray-50">
                       Create post
                      </span>
                    </div> 
                  </div>
              </div>     
              <div className="flex mt-4 bg-atlysGray-500 rounded-md py-4 px-6 mb-4 gap-8">
               <div className="rounded-full flex justify-center items-center bg-atlysGray-400 min-w-12 h-12">
                  <img className="w-5 h-5" src={ChatWhite} alt="logo" />
               </div>
              <input className="bg-transparent border-none font-light w-full text-atlysGray-100 focus:outline-none dark:text-gray-400" placeholder="How are you feeling today?"/>
              </div>
               <div className="flex justify-end items-center text-gray-500">
                  <button type="button" className=" text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-3 text-center" onClick={()=>setShowModal(true)}>Post</button>        
              </div>
          </div> 
    {posts.map((post, i)=>  <PostCard key={i} {...post} />)}
  </div>
  {showModal && <Modal onClose={setShowModal}/>}
</section>
  )
};

export default Posts;
