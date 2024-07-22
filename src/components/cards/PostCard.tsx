import Dots from "/dots.png"
import Chat from "/chat.png"
// import Hand from "/hand.png"

type PostCardProps = {
    name : string,
    time : string,
    message : string
    messageEmoji : string
    comments : number,
    image : string
}
const PostCard : React.FC<PostCardProps> =  ({name, time, message, messageEmoji, comments, image}) => {
  return(
     <div className="p-6 bg-atlysGray-400 rounded-lg border border-atlysGray-300 shadow-md ">
         <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <img className="w-11 h-11 rounded-full" src={image} alt={name} />
                     <div className="flex flex-col font-medium dark:text-white">
                        <span className="font-medium text-atlysGray-50">
                         {name}
                      </span>
                       <span className="font-medium text-sm text-atlysGray-100">
                         {time}
                      </span>
                    </div> 
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      <img className="w-8 h-8 mr-2" src={Dots} alt="logo" />  
                  </a>
              </div>
            
              <div className="flex mt-4 bg-atlysGray-500 rounded-md py-4 px-6 mb-4 gap-8">
               <div className="rounded-full flex justify-center items-center bg-atlysGray-400 min-w-12 h-12">
                  <img className="w-5 h-5" src={messageEmoji} alt="logo" />
               </div>
              <p className=" font-light text-gray-500 dark:text-gray-400">{message}</p>
              </div>
               <div className="flex justify-between items-center text-gray-500">
                  <span className=" text-sm font-medium inline-flex items-center px-2.5 py-0.5 gap-2">
                        <img className="w-5 h-5" src={Chat} alt="logo" />
                        {comments} comments
                  </span>
              </div>
          </div> 
  );
};

export default PostCard;
