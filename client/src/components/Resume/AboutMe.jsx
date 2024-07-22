const AboutMe = () => {
  const About = [
    {
      title: "Name",
      content: "Duong Ha"
    },
    {
      title: "Email",
      content: "thanhduonghd114@gmail.com"
    },
    {
      title: "Age",
      content: "20"
    },
    {
      title: "Phone",
      content: "(+358) 415 705 441"
    },
    {
      title: "Address",
      content: "Finland"
    },
    {
      title: "Nationality",
      content: "Vietnamese"
    },
    {
      title: "Language",
      content: "Vietnamese, English"
    },
    {
      title: "Hobby", 
      content: "Football, Gym, Coding"
    }

  ]
  return (
    <div>
      <h2 className="font-bold text-3xl mb-2">About me</h2>
      <div className="relative ">
        <img src="./src/assets/football-pic.jpeg" className="rounded-md w-full h-auto opacity-30"/>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <ul className="grid gird-cols-1 md: grid-cols-2 gap-y-6 max-x-[620px] xl:gap-x-20 xl:gap-y-12">
              {
                About.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="text-white/60 mr-2 xl:text-base text-xs">{item.title}:</span> 
                      <span className="xl:text-lg text-sm">{item.content}</span>
                    </li>
                  );
                })
              }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;