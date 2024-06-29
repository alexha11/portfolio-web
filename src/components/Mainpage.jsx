const Mainpage = () => {
    return (
      <div>
        <div className="container mx-auto pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <img src="https://gravatar.com/avatar/89e830a810c2658975ab88dc2e97629f?s=400&d=robohash&r=x" alt="Duong Ha" className="w-48 h-48 rounded-full" />
            </div>
            <div>
              <h1 className="text-6xl text-white pb-4">Duong Ha</h1>
              <span className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent py-4">Full Stack Developer</span>
              <p className="text-white mt-4">I'm a software engineer based in Vietnam. I have a passion for software development and love to learn new things. I'm currently working at a software company in Vietnam. I'm also a student at FPT University, majoring in Software Engineering.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Mainpage;