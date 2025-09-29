import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../SessionProvider";
import { Navigate, useAsyncError } from "react-router-dom";
import { diaryRepository } from "../repositories/diary";
import TodayDate from "../components/toDayDate";
import { Diary } from "../components/Diary";

function Home() {
  const[title,setTile]=useState('')
  const[content,setContent]=useState('')
  const [diaries,setDiaries]=useState([])
  const [date,setDate]=useState(()=>{
    const today=new Date();
    return today.toISOString().split("T")[0]
  })

  const {currentUser}=useContext(SessionContext);

  useEffect(()=>{
    fetchdiary();

  },[])

  const creatediary=async()=>{
    const diary =await diaryRepository.create(content,currentUser.id,date,title);
    setDiaries([{...diary,userId:currentUser.id,userName:currentUser.userName},...diaries])
    console.log(diary)
    setContent('')
    setTile('')
    setDate(new Date().toISOString().split('T')[0])
  }

  const fetchdiary=async ()=>{
    const diaries=await diaryRepository.find();
    setDiaries(diaries)
  }

  const deleteDiary=async (diaryId)=>{
    await diaryRepository.delete(diaryId);
    setDiaries(diaries.filter((diary)=>diary.id !==diaryId))
  }

  if (currentUser == null) return <Navigate replace to="/signin"/>


  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Output Diary</h1>
          <button className="text-white hover:text-red-600">ログアウト</button>
        </div>
      </header>
      <div>
        <TodayDate />
      </div>
      <div className="container mx-auto mt-6 p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h1 className="w-full p-0.5 mb-4 "><b>学んだことのアウトプット</b></h1>
              <input 
              type="date"
              className="w-full p-2 mb-4 border-2 border-gray-200 rounded-md"
              value={date}
              onChange={(e)=>setDate(e.target.value)} />
              <h1 className="w-full p-0.5 mb-4 ">タイトル</h1>
              <input
                className="w-full p-2 mb-4 border-2 border-gray-200 rounded-md"
                placeholder="タイトル"
                onChange={(e)=>setTile(e.target.value)}
                value={title} />
              <h1 className="w-full p-0.5 mb-4 ">学び</h1>
              <textarea
                className="w-full p-2 mb-4 border-2 border-gray-200 rounded-md"
                placeholder="学んだことをここに書き記してください"
                onChange={(e)=>setContent(e.target.value)}
                value={content}
              />
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={creatediary}
              disabled={content===''}>
                Post
              </button>
            </div>
            <div className="mt-4">
              {diaries.map((diary)=>(
                <Diary key={diary.id} diary={diary} onDelete={deleteDiary} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;