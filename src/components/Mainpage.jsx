
const Mainpage = () => {
  const PDF_URL = "http://localhost:5173/Resume.pdf";
  
  const downloadCV = () => {
    fetch(PDF_URL)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Duong Ha - Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading the file:', error));
  }; 
    return (
      <div>
        <div className="container h-3xl mx-auto mt-32 mb-52">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center ">
              <img src="./src/assets/Man doing design thinking.png" alt="Duong Ha" className="w-60 h-60 rounded-md" />
            </div>
            <div>
              <h1 className="text-6xl text-white pb-4">Duong Ha</h1>
              <span className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent py-4">Full Stack Developer</span>
              <p className="text-white mt-4">I'm a software engineer based in Vietnam. I have a passion for software development and love to learn new things. I'm currently working at a software company in Vietnam. I'm also a student at FPT University, majoring in Software Engineering.</p>
              <div className="mt-4 flex items-center">
                <button onClick={downloadCV} className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 text-white px-4 py-2 rounded-md">Download CV</button>
                <div className="ml-10 flex space-x-5 ">
                  <a href="https://github.com/alexha11" className="w-12 h-12 rounded-full">
                    <img src="./src/assets/github-logo.png" alt="GitHub" className="w-12 h-12" />
                  </a> 
                  <a href="https://www.linkedin.com/in/duong-ha-55524a246" className="w-12 h-12 rounded-full border-white">
                    <img src="./src/assets/linkedin-logo-gradient.png" alt="Linkedin" className="w-12 h-12 object-scale-up rounded-full" />
                  </a>  
                  <a href="https://www.instagram.com/hayduoo_/" className="w-12 h-12 ">
                    <img src="./src/assets/instagram.svg" alt="GitHub" className="w-12 h-12 object-contain rounded-full" />
                  </a>   
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Mainpage;