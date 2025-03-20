import Person from "./components/person";

export default function App() {
  return (
    <div className="h-screen flex justify-center bg-blue-950">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-amber-100 font-extrabold">
          React App Starter
        </h1>
        <section className="w-full p-5 bg-amber-100 flex">
          <ul className="list-inside list-disc flex-1">
            <span className="font-semibold">Tech Stack:</span>
            <li>Vite</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
          </ul>
        </section>

        <article className="bg-amber-500">
          <h1>My First Component</h1>
          <ol>
             <li>Components: UI Building Blocks</li>
             <li>Defining a Component</li>
             <li>Using a Component</li>
          </ol>
        </article>

        <div>
          <Person name="Anawat" address="123"/>
          <Person name="Anawat" address="123 ab"/>
        </div>

      </div>
    </div>

  )
}


