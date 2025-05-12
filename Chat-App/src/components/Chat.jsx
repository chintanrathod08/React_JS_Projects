import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { RiArrowLeftSFill, RiHome9Fill, RiSquareFill } from "@remixicon/react";


function Chat() {
    const { user } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const scroll = useRef(null);


    const sendMessage = async () => {
        if (text.trim()) {
            await addDoc(collection(db, "messages"), {
                text,
                uid: user.uid,
                photoURL: user.photoURL,
                createdAt: serverTimestamp(),
            });
            setText(""); // clear the input after sending the message
        }
    };

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        const unsub = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const hlEdit = (msg) => {
        const newText = prompt("Edit your message:", msg.text);
        if (newText !== null && newText.trim() !== "") {
            const docRef = doc(db, "messages", msg.id);
            updateDoc(docRef, { text: newText });
        }
    };

    const hlDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this message?");
        if (!confirm) return;

        try {
            await deleteDoc(doc(db, "messages", id));
        } catch (error) {
            console.log("Error deleting message: ", error);
        }
    };




    return (

        <section className="w-full h-[100vh] bg-[#25323A] flex justify-center items-center">

            <div className="w-[35%] h-[90vh] overflow-hidden rounded-[10px] shadow-2xl flex flex-col justify-between">

                {/* ---- header ---- */}

                <header className="w-[100%] h-[12%] flex  items-center justify-start ps-3 bg-[#000000]">
                    <div className="w-[10%]  border-white h-full flex justify-center items-center">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-2285/1024/logo-512.png" alt="" className="w-[100%]" />
                    </div>
                    <h1 className=" text-[white]" >Messenger</h1>
                </header>

                {/* --------content--------- */}

                <div className="w-full h-[80%] flex flex-col space-y-4  py-2 px-3 overflow-y-auto relative bg-blend-overlay bg-[#4f4f4f] bg-[url(https://w0.peakpx.com/wallpaper/306/181/HD-wallpaper-whatsapp-walpaper-art-background-eallpaper-pattern-patterns.jpg)] bg-cover bg-center">

                    {/* Render Messages */}

                    {messages.map((msg) => {
                        const isCurrentUser = msg.uid === user.uid;

                        return (
                            <div
                                key={msg.id}
                                className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`relative max-w-xs p-2 rounded shadow ${isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                                >
                                    <div className="flex justify-between items-start gap-2">
                                        <p className="flex-1 break-words">{msg.text}</p>

                                        {isCurrentUser && (
                                            <div className="flex gap-1 text-xs">
                                                <button className="cursor-pointer" onClick={() => hlEdit(msg)} title="Edit">✏️</button>
                                                <button className="cursor-pointer" onClick={() => hlDelete(msg.id)} title="Delete">🗑️</button>
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-[10px] text-gray-300 block mt-1 text-right">
                                        {msg.createdAt?.toDate().toLocaleTimeString() || "Loading..."}
                                    </span>
                                </div>
                            </div>
                        );
                    })}

                    {/* Scroll to bottom */}
                    <div ref={scroll}></div>

                    {/* Message Input and Send Button */}
                    <div className="w-[100%] h-[70px] mt-4 flex items-center bg-[white] space-x-2  bottom-0 left-0 absolute flex justify-center items-center">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-[75%] p-2 border rounded border-[gray] "
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-500 text-white p-2 rounded cursor-pointer"
                        >
                            Send
                        </button>
                    </div>


                    {/* ------------- */}


                </div>

                <div className="h-[8%] w-full  flex justify-center items-center bg-[#000000] ">
                    <div className="text-[white] flex justify-evenly items-center  h-full w-[50%]">
                        <RiSquareFill className="w-[0.9vw] cursor-pointer " />
                        <RiHome9Fill className="w-[1vw] cursor-pointer" />
                        <RiArrowLeftSFill className="text-[3vw] cursor-pointer" />
                    </div>

                </div>

            </div>




        </section>

    );
}

export default Chat;
