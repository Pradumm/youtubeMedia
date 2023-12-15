import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLivechat } from "../Redux/features/appslice"
import { Chatcard } from './Chatcard';



function generateRandomMessage() {
    const messages = ["Hello!", "How can I assist you?", "I'm interested in your services.", "Can you provide more details?", "Of course!", "We offer a range of services, including...", "That sounds great.", "Do you have any special offers?", "Yes, we have a promotion running.", "Here are the details...", "Excellent!", "How can I sign up?", "You can sign up on our website: https://example.com/signup", "Thank you!", "You're welcome! Let me know if you need any assistance.", "I will. Have a wonderful day!", "Goodbye!"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function getRandomUserName() {
    const userNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];
    const randomIndex = Math.floor(Math.random() * userNames.length);
    return userNames[randomIndex];
}




const LiveMessage = () => {

    const { liveChatmessage } = useSelector((state) => state.appSlice);
    // const [displayedChatIndex, setDisplayedChatIndex] = useState(0);

    const [searchTerm, changeSearchTerm] = useState("")
    const dispatch = useDispatch()

    // console.log(liveChatmessage, "-----_-chat ")

    const HandleForm = () => {
        console.log(searchTerm, "--------")
        dispatch(updateLivechat({
            name: getRandomUserName(),
            message: searchTerm
        }))

        changeSearchTerm("")
    }



    useEffect(() => {
        const interval = setInterval(async () => {

            dispatch(updateLivechat({
                name: getRandomUserName(),
                message: generateRandomMessage()
            }))
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [])


    return (
        <div className=''>
            <div className='h-[380px] overflow-scroll'>
                {liveChatmessage.map((chat, index) =>

                    <Chatcard
                        key={index}
                        name={chat.name}
                        massage={chat.message}
                    />)
                }

            </div>

            <div>
                <div className='flex  gap-4'>
                    <input
                        type="text"
                        placeholder="chat"
                        className="  h-8 w-full lg:w-44 text-white bg-gray-600  focus:outline-none border-none  rounded "
                        value={searchTerm}
                        onChange={(e) => changeSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={HandleForm}
                        className=' h-8 px-4 cursor-pointer hover:bg-gray-700 text-white bg-gray-600  focus:outline-none border-none  rounded'>send</button>

                </div>

            </div>

        </div>
    );
};

export default LiveMessage;
