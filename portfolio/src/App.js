import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
        <div class="text-3xl mb-6 text-center ">Ready to build your website?</div>

        <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <div class="col-span-2 lg:col-span-1">
            <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Name" />
          </div>

          <div class="col-span-2 lg:col-span-1">
            <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email Address" />
          </div>

          <div class="col-span-2">
            <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Message"></textarea>
          </div>

          <div class="col-span-2 text-right">
            <button class="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
