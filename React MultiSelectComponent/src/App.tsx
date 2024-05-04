import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoMdClose } from "react-icons/io";
import { CgAddR } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
function App() {

  const [selectedList,setSeletecd] = useState<string[]>([]);
  const [inputField,setInputField]=useState<string>('');
  const [menuToggle,setMenuToggle]=useState<boolean>(false);
  function handleInput(e){
    console.log(e.target.value);
    setInputField(e.target.value);
  }
  const tags:string[] = [
    "Tutorial",
    "HowTo",
    "DIY",
    "Review",
    "Tech",
    "Gaming",
    "Travel",
    "Fitness",
    "Cooking",
    "Vlog",
  ];

  const filteredTags:string[]= tags.filter(
    (item)=>
      item?.toLocaleLowerCase()?.includes(inputField?.toLocaleLowerCase()?.trim())
    )
    const AddItem = (e:string)=>{
      setSeletecd((prev)=>[...prev,e])
    }
    const handleDelete = (i:number)=>{
      // console.log(selectedList[i])
      const tempList:string[] =[...selectedList];
      tempList.splice(i,1);
      // let currState=selectedList.slice(i,1);
      setSeletecd([...tempList]);
    }
  return (
    <>
    <div className="w-full  bg-yellow-50">
        <div className="w-[440px] h-screen bg-pink-200 m-auto grid place-items-center">
            <div className="bg-white shadow-md rounded-md w-96 p-4">
              <h2 className="text-[20px] font-semibold py-2">Languages:</h2>
              {/* Selceted Langs will be shown in Below div */}
              {
                selectedList && selectedList.length>0 &&
                <div className="flex flex-row gap-2 flex-wrap py-2"> 
                    {
                      selectedList.map((e,index)=>
                        <div className="bg-pink-400 rounded-xl text-white p-2 flex flex-row gap-2 hover:bg-pink-500" key={index}>
                          {e}
                          <IoMdClose onClick={()=>handleDelete(index)} className="mt-1 cursor-pointer"/>
                        </div>
                      )
                    }
                </div>
              }

              {/* Select Langs Below */}
                <div >
                  <div className="flex flex-row gap-2">
                    <CgSearch className=" text-[25px] mt-1 text-pink-700"/>
                    <div className="w-full relative">
                      <input type="input" 
                      value={inputField}
                      onBlur={()=>setMenuToggle(false)} 
                      onFocus={()=>setMenuToggle(true)} 
                      onChange={handleInput} 
                      onKeyDown={(e)=>{
                        if(e.key=='Enter' && inputField.trim().length>0){
                          setSeletecd((prev)=>[...prev,inputField]);
                          setInputField('');
                        }
                      }}
                      className="w-full p-1 border border-red-200 rounded-sm outline-pink-500" 
                      placeholder={"Enter here "}>
                      </input>
                        {
                          // menuToggle,setMenuToggle
                          menuToggle && filteredTags.length>0 && <div className="absolute z-10 bg-white w-full max-h-32  overflow-y-auto scrollbar-thin">
                          {filteredTags.map((e)=><h1 onClick={()=>console.log("haha")} onMouseDown={()=>AddItem(e)} className="p-2 cursor-pointer">{e}</h1>)}
                        </div>
                        }

                    </div>

                    <CgAddR className=" text-[25px] mt-1 text-red-600 cursor-pointer"
                      onClick={()=>{
                        if(inputField.trim().length>0)
                        setSeletecd((prev)=>[...prev,inputField]);
                        setInputField('');
                      }}
                    />
                  </div>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default App
