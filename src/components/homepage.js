import React from "react";
import {
    Alert,
    Avatar,
    Card,
    CardBody,
    Typography,
    CardFooter,
  } from "@material-tailwind/react";
import {PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import Typewriter from "typewriter-effect";
import MyPicture from '../static/images/MyPicture.jpeg';
import LinkedIn from '../static/images/LinkedIn.png';

function Homepage() {
    return (
      <div>
        <Card className="flex items-center justify-center bg-darkPurple-800 w-full h-full max-w-[96rem] max-h-[72rem]">
          <Avatar src={MyPicture} withBorder={true} color="white" className="p-2 mt-2" alt="My Picture" size="xxl" /> 
          <div>
            <Typography className="text-4xl font-ptserif font-bold" color="white">Jayanand Jayan</Typography>
          </div>
          <CardBody>
            <Typography className="text-4xl uppercase text-teal-200 font-zen-tokyo-zoo text-center whitespace-break-spaces">
              <Typewriter options={{strings: ["An Engineer", "A Coder", "A Web Developer", "A Data Analytics Enthusiast", "An AI & ML Enthusiast"], autoStart: true, loop: true}}/>
            </Typography>
          </CardBody>
          <CardFooter>
            <div className="grid grid-cols-3 block m-auto">
              <Alert color="deep-purple" variant="outlined" className="border-0 float-left ml-10" icon={<PhoneIcon className="w-5 h-5" fill="white"/>}>
                <Typography color="white" className="align-top font-comfortaa font-lg font-bold">+91 8451817575</Typography>
              </Alert> 
              <Alert color="deep-purple" variant="outlined" className="border-0 block m-auto" icon={<EnvelopeIcon className="w-6 h-6" fill="white"/>}>
                <Typography variant="h6" color="white" className="font-comfortaa align-top">nandujayanand@gmail.com</Typography>  
              </Alert>
              <Alert color="deep-purple" variant="outlined" className="border-0 block m-auto" icon={<Avatar src={LinkedIn} variant="rounded" className="w-6 h-6" fill="white"/>}>
                <Typography variant="h6" color="white" className="align-top">
                  <a href="https://www.linkedin.com/in/jayanand-jayan/" className="underline decoration-solid">https://www.linkedin.com/in/jayanand-jayan/</a>
                </Typography>  
              </Alert>
            </div>
          </CardFooter>
        </Card>
        <div className="flex justify-center align-center">
          <Typography className="text-xl font-merienda italic tracking-tight font-black text-justify w-4/5 whitespace-break-spaces" color="black" textGradient={false}>
            {'\n'}"As a proud and happy student of Computer Science at Vellore Institute of Technology, Chennai, I have a dream.
            A dream to make positive impacts in human lives with the skills in AI & ML that I acquire at VIT. Having been trained in 
            classical music, my hobbies include singing, drawing and playing Tabla. On the sports front, I play football, cricket and basketball.
            With a flair for software, I am fluent in programming languages C, C++, Python, Java and JavaScript to begin with. Many more in the waiting..."
          </Typography>
        </div>
      </div>
    )
}

export default Homepage