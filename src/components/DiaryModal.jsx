import { useState } from "react";

export default function DiaryModal() {
  const [diaryDetails, setdiaryDetails] = useState([
    {
      title: "test",
      date: "",
      img: "https://images.unsplash.com/photo-1641173587142-ce4c1b35e950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHNjZW5lcnl8ZW58MXx8fHwxNzY3NTgwNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "",
    },
  ]);

  const handleAdd = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const submitAction = async (diaryDetails) => {
    const title = diaryDetails.get("title");
    const date = diaryDetails.get("date");
    const img = diaryDetails.get("img");
    const content = diaryDetails.get("content");
  };

  return (
    <div>
      <button onClick={handleAdd}>+ New</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-black">
          <div className="flex justify-between p-1">
            <h2 className="text-2xl font-bold text-cyan-500">Create New Entry</h2>
            {/* <button
              onClick={onClose()}
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button> */}
          </div>
          <div>
            <form method="dialog" action={submitAction}>
              <div>
                <label htmlFor="date" className="flex items-center gap-1 p-2 font-semibold">
                  {/* <Calendar /> */}
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={diaryDetails.date}
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
                  value={diaryDetails.title}
                  placeholder="Enter a title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="content" className="flex items-center gap-1 p-2 font-semibold">
                  {/* <FileText /> */}
                  Content
                </label>
                <textarea
                  name="title"
                  rows={6}
                  value={diaryDetails.content}
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
                  name="img"
                  value={diaryDetails.img}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button className="w-full">Create Entry</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
