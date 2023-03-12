import { BsFileEarmarkImage, BsEmojiLaughing } from "react-icons/bs"
import EmojiPicker from 'emoji-picker-react';

function NewPost() {
    return (
        <div className="bg-slate-50 p-3 h-32 rounded-lg shadow-lg">
            <div className="flex pb-2 border-b-2">
                <img src="" alt="user" className="rounded-full " />
                <input className="rounded-full mx-1 bg-gray-200 h-9 w-full px-3 hover:bg-gray-300 focus:outline-none" type="text" placeholder="What's on your mind?" />
            </div>
            <div className="flex p-3 justify-center">
                <button className="flex rounded h-10 items-center hover:bg-gray-200 px-2"><BsFileEarmarkImage className="h-6 w-6 text-green-400 mx-1" /><p className="text-gray-600 font-medium">Photo/video</p></button>
                <button className="flex rounded h-10 items-center hover:bg-gray-200 px-2"><BsEmojiLaughing className="h-6 w-6 text-yellow-400 mx-1" /><p className="text-gray-600 font-medium">Feelling/activity</p></button>
            </div>
        </div>
    )
}

export default NewPost