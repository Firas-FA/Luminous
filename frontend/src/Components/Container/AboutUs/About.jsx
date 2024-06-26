import "./AboutStyle.css"
import video from './video_2024-06-30_18-23-26.mp4'
function About() {
  return (
    <div className=" pl-[9%] w-screen h-screen bg-primarybg">
      <div className="flex flex-row items-center justify-between">
        <div className="w-1/3">
          <h1 className="text-xl  text-headerscolor mb-4">About Us</h1>
          <p className="text-2xl text-black mb-8">
            Luminous started with a spark of inspiration to illuminate life's special moments. We've grown into a trusted name, known for our creativity, dedication, and passion for bringing people together.
          </p>
          <div className="flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
            <img
            src="./Picture/Group .png"
            alt="Our Vision"
            className="w-30 h-30 mb-7"
          />
              <h2 className="text-xl font-bold ">Our Vision:</h2>
              <p className=" text-base text-black">
                We aim to transform events into unforgettable experiences through creativity and dedication, inspiring lasting memories.
              </p>
            </div>
            <div >
            <img
            src="./Picture/Layer.png"
            alt="Our Vision"
            className="w-30 h-30 mb-4"
          />
              <h2 className="text-xl font-bold ">Our Mission:</h2>
              <p className="text-base text-black">
                We create extraordinary events with a personal touch, ensuring perfection in every detail and unforgettable moments.
              </p>
            </div>
          </div>
          <button className="bg-headerscolor text-white py-2 px-4 text-lg mt-8 hover:bg-highlightcolor transition">Contact Us Now</button>
        </div>
        <div className="md:w-1/2 pl-24 ">
          <img src="./Picture/About.png" alt="Luminous event planning"  />
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="relative  md:w-2/3">
          <video
            className="shadow-md w-5/6 h-5/6 "
            controls
            autoplay
            muted
          >
            <source src="https://i.imgur.com/3wF1W1p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
