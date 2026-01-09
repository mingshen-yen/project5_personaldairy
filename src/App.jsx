import { useState } from "react";

const App = () => {
  const [dairy, setDairy] = useState([
    {
      title: "test",
      date: "",
      img: "https://images.unsplash.com/photo-1641173587142-ce4c1b35e950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHNjZW5lcnl8ZW58MXx8fHwxNzY3NTgwNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "",
    },
  ]);
  console.log(dairy.title);
  return (
    <body>
      <header className="flex flex-row justify-between">
        <div>
          <h1>My Diary</h1>
          <span>Capture your daily moments and memories</span>
        </div>
        <div>
          <button className="">+ New</button>
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
            <p>date</p>
            <p>content</p>
          </div>
        </div>
      </main>
    </body>
  );
};

export default App;
