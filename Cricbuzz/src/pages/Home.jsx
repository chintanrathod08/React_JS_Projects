// import { RiCircleFill, RiDeleteBin6Line, RiEditBoxLine, RiSearch2Line } from '@remixicon/react'
// import React, { useEffect, useState } from 'react'

// function Home() {

//     const [data, setData] = useState([])
//     const [inputData, setInputData] = useState()
//     const [search, setSearch] = useState("")

//     const [editId, setEditId] = useState(null);
//     const [editData, setEditData] = useState({ status: "", score: "" });

//     const API = '1aa66988-4b9c-4981-befa-eb03c5fc0f9f'

//     const getData = async () => {
//         try {
//             const response = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=${API}`)
//             const data = await response.json();

//             if (data.status === "success") {
//                 console.log("Fetched from API :", data);
//                 setData(data.data)
//                 localStorage.setItem("matchData", JSON.stringify(data.data));
//             } else {
//                 console.warn("API failed, using local data.");
//                 const localData = localStorage.getItem("matchData");
//                 if (localData) {
//                     setData(JSON.parse(localData))
//                 } else {
//                     console.log("No data in localStorage.");
//                 }
//             }
//         } catch (err) {
//             console.log("Error fetching, using localStorage if available:", err);
//             const localData = localStorage.getItem("matchData");
//             if (localData) {
//                 setData(JSON.parse(localData))
//             }
//         }
//     };

//     useEffect(() => {
//         getData()
//     }, [])

//     const hlChange = (e) => {
//         console.log(e.target.value);
//         setInputData(e.target.value)
//     }

//     const hlClick = () => {
//         setSearch(inputData)
//     }


//     const hlDelete = (id) => {
//         const updated = data.filter((item) => item.id !== id)
//         setData(updated);
//         localStorage.setItem("matchData", JSON.stringify(updated));
//     };

//     const hlEdit =(e)=>{
//         const { name,value } = e.target;
//         setEditData({...editData, [name] : value });
//     }

//     const hlSaveEdit =()=>{
//         const updated = data.map((item)=>{
//             if( item.id === editId ){
//                 const [t1s, t2s] = editData.score.split("/");
//                 return {
//                     ...item,
//                     status : editData.status,
//                     t1s: t1s?.trim() || item.t1s,
//                     t2s: t2s?.trim() || item.t2s
//                 };
//             }
//             return item;
//         })
//         setData(updated);
//         localStorage.setItem("matchData", JSON.stringify(updated));
//         setEditId(null)
//     };

//     return (
//         <section className='w-full h-auto flex justify-center items-center'>

//             <section className='w-[95%] h-[90%]'>

//                 {/* --------1------- */}

//                 <section className='w-full h-auto grid grid-cols-2 pt-[2%] pb-[2%]'>

//                     {/* heading */}
//                     <div className='flex justify-start items-center'>
//                         <span className='flex items-center'><RiCircleFill className='w-[19px] me-1 text-[red]' id='livecircle' /><h1 className='text-[1.5rem] font-medium'> Live Cricket Score :</h1></span>
//                     </div>

//                     {/* -------search-here-------- */}

//                     <div className='w-auto h-[38px] flex justify-end items-center'>
//                         <div className=''>
//                             <input type="text" onChange={hlChange} placeholder='Search Series, matches' className='ps-5 border border-[gray] w-[15rem] h-[38px] rounded-l-full' />
//                         </div>

//                         <div className='w-auto h-full bg-[#009270] hover:bg-[#007c5f] flex justify-center items-center  rounded-r-full ps-2 pe-3 cursor-pointer'>
//                             <button onClick={hlClick} ><RiSearch2Line className='text-[white] cursor-pointer' /></button>
//                         </div>

//                     </div>

//                 </section>

//                 {/* -----------2-----------*/}

//                 <section className='w-full h-auto grid grid-cols-3  pb-[3%]'>

//                     {data ? data.map((el) => {
//                         console.log(el);
//                         if (el.status != "Match not started") {
//                             if (el.series.includes(search) || el.t1.includes(search) || el.t2.includes(search)) {
//                                 return (
//                                     <div className='card w-[28rem] h-[18rem] rounded-[10px] border mt-10 flex flex-col justify-evenly items-center'>

//                                         {/* -----series---- */}
//                                         <h3>{el.series}</h3>
//                                         <h3>{el.matchType}</h3>

//                                         {/* ----flag-img------ */}
//                                         <div className='w-full border flex justify-around items-center'>

//                                             <div className='h-auto w-auto text-center leading-10'>
//                                                 <img src={el.t1img} alt="" />
//                                                 <p>{el.t1}</p>
//                                                 <p>{el.t1s}</p>
//                                             </div>

//                                             <div className='h-auto w-auto text-center leading-10'>
//                                                 <img src={el.t2img} alt="" />
//                                                 <p>{el.t2}</p>
//                                                 <p>{el.t2s}</p>
//                                             </div>

//                                         </div>

//                                         {/* ----score---- */}
//                                         <p>Status : {el.status}</p>

//                                         {/* -----DL-Ed---- */}
//                                         <div className='w-full h-auto flex justify-between items-center'>
//                                             <button onclick={() => hlEdit(el)} className='w-[3rem] h-[2rem] border border flex justify-center items-center'><RiEditBoxLine className='me-2' /> Edit</button>
//                                             <button onClick={() => hlDelete(el.id)} className='w-[3rem] h-[2rem] border flex justify-center items-center'><RiDeleteBin6Line className='me-2' /> Delete</button>
//                                         </div>

//                                     </div>
//                                 );
//                             }
//                             if (search == "") {
//                                 return (
//                                     <div className='card w-[28rem] h-[18rem] rounded-[10px] border mt-10 flex flex-col justify-evenly items-center'>

//                                         {/* -----series---- */}
//                                         <h3>{el.series}</h3>
//                                         <h3>{el.matchType}</h3>

//                                         {/* ----flag-img------ */}
//                                         <div className='w-full border flex justify-around items-center'>

//                                             <div className='h-auto w-auto text-center leading-10'>
//                                                 <img src={el.t1img} alt="" />
//                                                 <p>{el.t1}</p>
//                                                 <p>{el.t1s}</p>
//                                             </div>

//                                             <div className='h-auto w-auto text-center leading-10'>
//                                                 <img src={el.t2img} alt="" />
//                                                 <p>{el.t2}</p>
//                                                 <p>{el.t2s}</p>
//                                             </div>

//                                         </div>
//                                         {/* ----score---- */}
//                                         <p>Status : {el.status}</p>

//                                         {/* -----DL-Ed---- */}
//                                         <div className='w-full h-auto flex justify-between items-center'>
//                                             <button onclick={() => hlEdit(el)} className='w-[3rem] h-[2rem] border border flex justify-center items-center'><RiEditBoxLine className='me-2' /> Edit</button>
//                                             <button onClick={() => hlDelete(el.id)} className='w-[3rem] h-[2rem] border flex justify-center items-center'><RiDeleteBin6Line className='me-2' /> Delete</button>
//                                         </div>

//                                     </div>
//                                 );
//                             }
//                         }

//                     })

//                         : <p className='text-center'>Data Not Found! </p>}

//                 </section>

//             </section>

//         </section>
//     )
// }

// export default Home


// ------------------------------2------------------------------


import { RiCircleFill, RiDeleteBin6Line, RiEdit2Line, RiSearch2Line } from '@remixicon/react'
import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState("")
    const [search, setSearch] = useState("")

    const [editId, setEditId] = useState(null)
    const [editData, setEditData] = useState({ status: "", score: "" })

    const API = 'f384f168-9d7c-4241-b062-4825e7080cf8'

    const getData = async () => {
        try {
            const response = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=${API}`)
            const data = await response.json()

            if (data.status === "success") {
                console.log("Fetched from API:", data)
                setData(data.data)
                localStorage.setItem("matchData", JSON.stringify(data.data))
            } else {
                console.warn("API failed, using local data.")
                const localData = localStorage.getItem("matchData")
                if (localData) setData(JSON.parse(localData))
            }
        } catch (err) {
            console.log("Error fetching, using localStorage:", err)
            const localData = localStorage.getItem("matchData")
            if (localData) setData(JSON.parse(localData))
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const hlChange = (e) => {
        const value = e.target.value;
        setInputData(value);
        setSearch(value);
    }

    const hlClick = () => {
        setSearch(inputData)
    }

    const handleEdit = (match) => {
        if(window.confirm("Are You Sure You Want to Edit This Match Card? ✏️")){
        setEditId(match.id)
        setEditData({ status: match.status, score: `${match.t1s} / ${match.t2s}` })
        }
    }

    const handleChangeEdit = (e) => {
        const { name, value } = e.target
        setEditData({ ...editData, [name]: value })
    }

    const filteredData = data.filter((el) => {
        return el.status !== "Match not started" &&
            (!search.trim() ||
                el.series.toLowerCase().includes(search.toLowerCase()) ||
                el.t1.toLowerCase().includes(search.toLowerCase()) ||
                el.t2.toLowerCase().includes(search.toLowerCase()));
    });

    const handleSaveEdit = () => {
        const updated = data.map((item) => {
            if (item.id === editId) {
                const [t1s, t2s] = editData.score.split("/")
                return {
                    ...item,
                    status: editData.status,
                    t1s: t1s?.trim() || item.t1s,
                    t2s: t2s?.trim() || item.t2s
                }
            }
            return item
        })
        setData(updated)
        localStorage.setItem("matchData", JSON.stringify(updated))
        setEditId(null)
    }

    const handleDelete = (id) => {
        if (window.confirm("Are You Sure You Want to Delete This Match Card? ❌")) {
            const filteredData = data.filter((item) => item.id !== id);
            setData(filteredData);
            localStorage.setItem("matchData", JSON.stringify(filteredData));
        }
    };




    return (
        <section className='w-full h-auto flex justify-center items-center'>

            <section className='w-[93%]  h-[90%]'>

                {/* Search Header */}
                <section className='w-full h-auto grid grid-cols-2 pt-[2%] pb-[2%] mt-3'>
                    <div className='flex justify-start items-center'>
                        <span className='flex items-center'>
                            <RiCircleFill id='livecircle' className='w-[19px] me-1 text-[red]' />
                            <h1 className='text-[1.5rem] font-medium'> Live Cricket Score :</h1>
                        </span>
                    </div>

                    <div className='w-auto h-[38px] flex justify-end items-center'>
                        <input type="text" onChange={hlChange} placeholder='Search Series, matches' className='ps-5 border border-[gray] w-[15rem] h-full rounded-l-full' />

                        <div className='bg-[#009270] h-full hover:bg-[#007c5f] flex items-center rounded-r-full ps-2 pe-3 cursor-pointer'>
                            <button onClick={hlClick}><RiSearch2Line className='text-white cursor-pointer' /></button>
                        </div>

                    </div>
                </section>


                {/* Cards - Main - Section */}


                <section className='w-full h-auto flex justify-center items-center mt-5'>

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 justify-center items-center pb-[3%]'>

                        {filteredData.length > 0 ? filteredData.map((el) => (
                            <div key={el.id} className='card w-[28.5rem] h-[25rem] rounded-[10px] bg-[#ECF0F1] shadow-xl flex flex-col justify-evenly items-center'>

                                {/*---- series ----*/}
                                <div className='w-full h-auto text-center'>
                                    <h3 className='text-[1.2rem] font-medium pt-2 text-[#009270] px-5'>{el.series}</h3>
                                    <h3 className='font-medium mt-2'>Match Type : {el.matchType}</h3>
                                </div>

                                {/* ---- flag imgs ---- */}
                                <div className='w-full h-auto flex justify-around items-center'>
                                    <div className='w-[50%] h-full text-center leading-6 flex flex-col justify-start items-center'>
                                        <img src={el.t1img} alt="" className='rounded-full' />
                                        <p className='mt-1 px-5 mt-2'>{el.t1}</p>
                                        <p className='text-[gray] mt-2'>{el.t1s}</p>
                                    </div>
                                    <div>
                                        <img src="https://media-hosting.imagekit.io/6ea16199e9314bb3/versus.png?Expires=1841404121&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mTJ9J-rg0wc25xkazUcnfrAUE--dwZIpLJPmQV5SqHutGpbBmUqax-7uM7RAGEXYDYJAmzADm25kckajulDYYx2EHBtI5yvjuZF54ja6fQc90A8VjOWrfWbhXPWZOvJ-nkvIUmGb9mv~nDHNM-OvZ4ZhPysTxRmLZrEsh58rlR7SaIUJUFy3qPbRUysfNCx1bBkRCNST03wL9tMqQfTr3IMHGKhAzDd-gj1veTnjzT3w-MfhHPBDct5mIIewEEcjWjD7wqH1UWdFrPLhbLzsmkYEPqlhBmpvlGVA5~S~oOh2NbdIeyuG848GbBLDMzguwBH9vj5gYEY7nItlc0845A__" alt="" 
                                        className='w-[3rem]'
                                        />
                                    </div>
                                    <div className='w-[50%] h-full text-center leading-6 flex flex-col justify-start items-center'>
                                        <img src={el.t2img} alt="" className='rounded-full' />
                                        <p className='mt-1 px-5 mt-2'>{el.t2}</p>
                                        <p className='text-[gray] mt-2'>{el.t2s}</p>
                                    </div>
                                </div>

                                {/* --- status --- */}
                                <div className='px-20 text-center'>
                                    <p className='text-[red]'>Status : {el.status}</p>
                                </div>

                                <div className='w-full h-auto flex justify-between items-center px-10 mt-2 pb-3'>
                                    <button onClick={() => handleEdit(el)} className='w-[5rem] h-[2.5rem] bg-green-500 text-[white] shadow-lg rounded flex items-center justify-center cursor-pointer'>
                                        <RiEdit2Line className='me-2 w-[18px]' /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(el.id)} className='w-[6rem] h-[2.5rem] bg-red-500 text-[white] shadow-lg rounded flex items-center justify-center cursor-pointer'>
                                        <RiDeleteBin6Line className='me-2 w-[18px]' /> Delete
                                    </button>
                                </div>

                            </div>
                        )) : (
                            <p className='text-center col-span-3'>No matches found! 😞</p>
                        )}

                    </div>

                </section>

                {/* Edit Modal */}
                {editId && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10'>
                        <div className='bg-white p-6 rounded shadow-lg w-[400px]'>
                            <h2 className='text-lg font-bold mb-4'>Edit Match</h2>
                            <label className='block mb-2'>Status :</label>
                            <input type="text"
                                name="status"
                                value={editData.status}
                                onChange={handleChangeEdit}
                                className="border p-2 mb-4 w-full"
                            />

                            <label className='block mb-2'>Score (Format: 250/3):</label>
                            <input
                                type="text"
                                name="score"
                                value={editData.score}
                                onChange={handleChangeEdit}
                                className="border p-2 mb-4 w-full"
                            />

                            <div className='flex justify-end space-x-2'>
                                <button onClick={handleSaveEdit} className='bg-green-500 text-white px-4 py-2 rounded cursor-pointer'>Save</button>
                                <button onClick={() => setEditId(null)} className='bg-red-500 text-white px-4 py-2 rounded cursor-pointer'>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </section>
    )
}

export default Home

