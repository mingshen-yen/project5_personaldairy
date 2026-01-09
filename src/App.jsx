import { Calendar, FileText, Type } from "lucide-react";
import { useState } from "react";

const App = () => {
  const [dairyDetails, setDairyDetails] = useState([
    {
      id: "",
      title: "test",
      date: "",
      img: "https://images.unsplash.com/photo-1641173587142-ce4c1b35e950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHNjZW5lcnl8ZW58MXx8fHwxNzY3NTgwNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "",
    },
  ]);

  const handleAdd = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const onClose = () => {};
  return (
    <>
      <header className="flex flex-row justify-between">
        <div>
          <h1>My Diary</h1>
          <span>Capture your daily moments and memories</span>
        </div>
        <div>
          <button onClick={handleAdd}>+ New</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-black">
              <div className="p-1">
                <h2 className="text-2xl font-bold text-cyan-500">Create New Entry</h2>
                {/* <button
                  onClick={onClose}
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="Close form"
                >
                  <X className="w-6 h-6" />
                </button> */}
              </div>
              <div>
                <form>
                  <div>
                    <label htmlFor="date" className="flex items-center gap-1 p-2 font-semibold">
                      {/* <Calendar /> */}
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={dairyDetails.date}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="flex items-center gap-1 p-2 font-semibold">
                      {/* <Type /> */}
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={dairyDetails.title}
                      placeholder="Enter a title..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="content" className="flex items-center gap-1 p-2 font-semibold">
                      {/* <FileText /> */}
                      content
                    </label>
                    <textarea
                      name="title"
                      id="title"
                      rows={6}
                      value={dairyDetails.content}
                      placeholder="Write your thoughts, experiences, and memories..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="img" className="flex items-center gap-1 p-2 font-semibold">
                      {/* <Image /> */}
                      Image URL
                    </label>
                    <input
                      type="url"
                      name="imgUrl"
                      id="imgUrl"
                      value={dairyDetails.img}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <button className="btn mt-3">Submit</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </header>
      <main className="py-10">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1641173587142-ce4c1b35e950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHNjZW5lcnl8ZW58MXx8fHwxNzY3NTgwNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="img"
            />
          </figure>
          <div className="card-body">
            <p></p>
            <p>content</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
