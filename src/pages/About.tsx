import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <Helmet>
      <title>About | Kausik</title>
    </Helmet>
    <div className='w-full bg-dark_bg h-full'>
    <section className="w-[90%] mx-auto md:w-[40%] flex flex-col justify-start gap-8 mt-6 pt-24 pb-24 items-start  text-light_text">
      
      {/* About Me section */}<p className="text-center mx-auto text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-light_text">About ME</p>
      {/* Intro section */}
      <span className='font-sans flex flex-col leading-7 items-start font-light justify-center text-justify gap-8 lg:text-xl tracking-wider text-lg'>
      <p>
        Hello, It's me Kausik. Probably the third time, you've seen my name. (Considering my domain name doesn't count! Haha)
        Let me tell you a short story about how I became a software developer. Oh, by the way, if you are looking for my technical expertise or projects, you can find it in 
        my projects section.
  
      </p>
      <img src="valley.webp" alt="Game Theme" className="mx-auto border border-2 aspect-video rounded-xl h-auto max-w-full object-cover" />

      <p>
        I was born in Biratnagar, a town in eastern Nepal. But with my father's job as a teacher in Nepal Police School, Sanga, Kavre, I was raised in the beautiful
        hills of Sanga. I spent my childhood there, playing in the hills, running in the jungles with kids of my age, jumping off cliffs on to haystacks, going to school and doing
        all the things that a normal kid does.
      </p>
      <p>
          I like to believe that I was a good kid in school😜. However, having a lot of friends around, I naturally turned to become a sportsman. 
          We played all sort of sports back then. Football, Cricket, Badminton, Table Tennis, 100,200,400m Sprints, some local Nepalese games like "Kabbadi" "Dandi Biyo" and what not.
          The only video games I played was "Super Mario". Later my father bought a computer around 2012 and I started playing games like "Road Rash","FIFA 06", "Dave", "GTA Vice City", "Call of Duty"
          and "Unreal Tournament". 
          That's how I was introduced towards computer. I was fascinated by the games and the graphics. But I really didn't care much about it. I was more into sports.
      </p> 
      <img src="game_theme.webp" alt="Game Theme" className="mx-auto border border-2 rounded-xl h-auto max-w-full object-contain" />

      <p>
        I played Lawn Tennis for a while and then I switched to Badminton. My curious mind always wanted to know the fundamentals of other sports too. So, I started playing
        cricket. I finally found the footing and played cricket for 4 years. I played as a bowling all rounder. Let's not go into details. Some horrible memories there. Haha.
        Anyways, Rugby caught my attention. I wasn't the quickest runner. 100m in 13.8 to 14 seconds. That was my timing. Neither a good stepper nor a good kicker.
        But I wanted to try Rugby. So, I started playing Rugby. Within one month, I was selected for the school team. We played touch Rugby and I played as a link. We won that tournament.
        That was my first gold medal in inter school tournament. 
        I was very happy. Naturally, I started playing more Rugby and got to know a lot of national players representing Nepal. I still manage time to play some tournaments here and there.
        It's good to be in field with brothers and play the game you love. 
    
      </p>
      <img src="sports.jfif" alt="Game Theme" className="mx-auto border border-2 rounded-xl h-auto max-w-full object-contain" />
      
      <p>  It's fascinating how I didn't become a player and became a software developer. </p>
      
      <p>
        I still remember those good times where I plugged in the Nintendo Chip and played games on CRT monitor. It was around 2009/2010 maybe. I was 6 or 7 years old. 
        Somehow, I broke the chip and we threw it away. Then, my father bought a CPU (Intel Core Pentium 4). And I started playing games on it. 
        With games, came viruses. Cause they were all free...you know what I mean. A cousin of mine used to come and install all those games in my PC. And when it crashed, he used to come and 
        format it. I was always curious about how he did it. I used to watch him install Windows XP and then install games. 
        Slowly, I started to learn how to install programs. I installed some games and played them. I learned some basic troubleshooting. Mostly, I learned about the internet 
        cause we faced a lot of troubles with the internet. When we started using wifi for the first time in 2015, I learned about basic configuration of router and about IP addresses
        and stuff. The network engineer was kind enough to teach me about it.
      </p>
      <img src="router_config.webp" alt="Game Theme" className="mx-auto border border-2 rounded-xl h-auto max-w-full object-contain" />

      <p>
        While I was in Grade 8, I was introduced to HTML. That's when I got more fascinated about computers. I really didn't think about CSS or Javscript. I just built some pages with HTML 
        and called it a website. I thought the <em>C:\Users\Desktop\website.html</em> was a website. Haha. I was so naive. Sent it to my friends and they were like "Your website doesn't run on my PC".
        Some funny old memories. 
        I learnt Python and Django while my school taught QBasic! Can you imagine QBasic in 2017? At least C has its usefulness. But QBasic? I don't know.
        If I remember correctly, Heroku Cloud was free back then. I didn't know what I did but some youtube tutorial taught me how to deploy a Django app on Heroku. 
        My first blogpost was live on the internet! I was so happy. This time, it ran on my friend's PC too. Haha.
        Back in Grade 9,10, whatever programming concepts I learned, I implemented them in Python. It was fun.  But I didn't think much about programming. I was more into sports. I rather 
        loved networking, configuring routers and probably using some packages to ... you know what I mean. Haha. Linux was and still is fun. Though I don't use it much now. 
        Dual booting, tri booting, formatting, installing, breaking, fixing, breaking again, fixing again. That was fun. It still is, isn't it?
      </p>
      <img src="rugby_boy.webp" alt="Game Theme" className="aspect-video mx-auto border border-2 rounded-xl h-auto max-w-full object-cover" />

      <p>
        My school was more about sports for me. But I did learn some programming concepts. In my high school, I met some friends who were into programming. They showed me some cool stuffs. 
        I had friends and seniors who were very good at programming. That's when I realized that I wanted to be a software developer. But I never really paid much attention to details. After all,
        I was more into sports. I completed my high school amidst COVID 19 pandemic. 2019-2021 were tough times. I had online classes. 3 hours a day. That meant, I had a lot of free time.
        Yoga, home workouts and playing with my neighbours in isolated environment was all I did. I still had more free time. That's when I started to really learn programming. I knew basics
        of HTML. So, I started learning Javascript and CSS. I built some projects. Heroku was still free then. So, I used heroku as my cloud storage and deployed some projects.
        It was mostly following along tutorials, solving FreeCodeCamp's challenges. I didn't know anything about React or Node. I just knew that I could build a website with HTML, CSS and JS.
        As the first wave of lockdown ended, I started going back to high school and every progress I made were lost. I couldn't keep up with new schedule. I was back to square one.
        I did learn C in high school. 
      </p>
      <p>
        After high school, I dedicated my time for Rugby again. I played for Bhaktapur district and we won the First Bagmati Rugby 7s Championship. But something was missing.
        Rugby was still getting recognized and many people had never heard about the game. It was tough getting recongnition and even more tougher to make a living out of it. Thus, I 
        decided to pursue further studies. I had some knowledge about programming and Linux (not bragging haha). So, I enrolled in Kathmandu University to pursue my Bachelor's in Computer 
        Engineering in December 2021. I am currently in my sixth semester.
      </p>
      <p>
        After joining college, I met some amazing people who knew what they were doing. My friends and seniors were very helpful and they taught me a lot of things. I am learning new things
        every single day and it always fascinates me. Oh, by the way Heroku isn't free and I lost my early projects. And I finally learnt Git back in my freshmen year. Haha! I hope github
        will always be free. Oh, I have to pay for Github too once I graduate. Cause my student pack will expire. Haha.
      </p>
      <img src="hackathon.webp" alt="Game Theme" className="aspect-video mx-auto border border-2 rounded-xl h-auto max-w-full object-cover" />

      <p>
        College has been a roller coaster ride. First year was all about getting used to the environment. I did learn basic React finally. Yay! For better half of my second year, I spent my
        time learning Rust. Me and my friends did build a project in Rust. It's still in development. Any contributions would be nice. Haha.
        I continued my web development journey and built some projects with MERN stack. I did participate in some hackathons and made some good memories. I can't say the same about projects. 
        You know hackathons...sleepless 48 hours, coffee and code. Haha. How did I not turn into Zombie? Perhaps I did. Haha. 
      </p>
      <p>
        I made some really good friends in college. They are very helpful and I am very grateful to have them. I like learning programming languages.
        In the past two and a half years, except my usual stuffs (MERN, Python), I learnt Rust, Golang, C++, Java, Dart/Flutter, C#, Php (I honestly don't know why). I didn't make any projects
        with C#, Java and Php. Currently, I am learning to build applicable projects with AI, ML and ReactNative. Also, I am learning Golang. I am very excited about it.
      </p>
      <p>
        I did participate in 3 major Natioinal Rugby Tournaments. However, I am not as sharp as I was before. But I am very happy that many youngsters and senior rugby players are doing well
        and representing Nepal in various international stages. I am extemely delighted to see the growth of Rugby in Nepal. And even more happy to be in touch with players representing Nepal.
        With a busy college schedule, I can't really make time for sports. I guess, I will have to wait for my graduation to play Rugby again.
      </p>
      <p>
        Oh, it's not a short story anymore. Considering Ted's narration to his children about "How I met your mother?", I hope it's not
        that long. Haha. I love to write and I love to share my experiences.
      </p>
      <p className="text-left">
        That's all about me! At least for now! If you want to know more about me, feel free to reach out to me.
      </p>
      <p>
        P.S. All images were generated using <Link to="https://ideogram.ai/" target="_blank" className="hover:underline text-primary_border">Ideogram.ai.</Link>
      </p>
      </span>
    </section>
    </div>
  </>
  );
}
export default About;
