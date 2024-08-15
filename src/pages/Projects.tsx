import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Projects = () => {

  const websites = [
  { name: "KE-Commerce", link: "https://www.github.com/kausik10/e-commerce" },
  { name: "Revamp", link: "https://revampgoal.co" },
  { name: "GovernIT", link: "https://govern-it.vercel.app/#home" },
  { name: "RSS Aggregator", link: "https://github.com/kausik10/rssaggregator" },
  { name: "Flutter Cart", link: "https://github.com/kausik10/flutter_cart"}
];

  const images = [
    {link : "ecom.png"},
    {link : "revamp.png"},
    {link : "governit.png"},
    {link : "rssfeed.webp"},
    {link : "flutter_cart.webp"}
  ]
  return (
    <>
    <Helmet>
      <title>Projects | Kausik</title>
    </Helmet>
    <div className='w-full bg-dark_bg'>
    <section className="w-11/12 md:w-9/12 max-w-[1280px] mx-auto h-full flex flex-col justify-start gap-8 lg:gap-16 mt-6 pt-24 pb-24 items-start  text-light_text">
   
      
      <p className="text-center mx-auto text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-light_text">Projects</p>

      <div className="mx-auto flex flex-row justify-center items-center flex-wrap gap-4" >
        

      <div className="max-w-sm hover:bg-dark_bg_secondary border rounded-md border-gray-200 rounded-lg shadow ">
        
        {/* Need to convert this into Component and Render it properly. */}
          <Link target="_blank" to={`${websites[0].link}`}>
              <img className="rounded-md aspect-video" src={`${images[0].link}`} alt={`${websites[0].name}`} />
          </Link>
          <div className="p-5 rounded-md">
             
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[0].name}`}</h5>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">An Ecommerce developed using React, Express, Mongo, Node with UI components from ShadCN. Integrated Paypal payment portal for transactions.</p>
              <Link target="_blank" to={`${websites[0].link}`} className="inline-flex items-center px-3 py-2 bg-primary_btn text-light_text hover:text-dark_text py-2 px-4 rounded hover:bg-secondary_btn">
                  View
              </Link>
          </div>
          
      </div>


      <div className="max-w-sm hover:bg-dark_bg_secondary border rounded-md border-gray-200 rounded-lg shadow ">
        
       
          <Link target="_blank" to={`${websites[1].link}`}>
              <img className="rounded-md aspect-video" src={`${images[1].link}`} alt={`${websites[1].name}`} />
          </Link>
          <div className="p-5  rounded-md">
          
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[1].name}`}</h5>
           
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">An advanced goal setting application with automated features of journal. Also, goals can be shared among community to help motivate one another.</p>
              <Link target="_blank" to={`${websites[1].link}`} className="inline-flex items-center px-3 py-2 bg-primary_btn text-light_text hover:text-dark_text py-2 px-4 rounded hover:bg-secondary_btn">
                  View
              </Link>
          </div>
          
      </div>


      <div className="max-w-sm hover:bg-dark_bg_secondary border rounded-md border-gray-200 rounded-lg shadow ">
        
          <Link target="_blank" to={`${websites[2].link}`}>
              <img className="rounded-md aspect-video" src={`${images[2].link}`} alt={`${websites[2].name}`} />
          </Link>
          <div className="p-5 rounded-md">
              
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[2].name}`}</h5>
              
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A concept developed to provide a centralized platform for all the government agency meetings so that it would be easily accessible to all citizens.</p>
              <Link target="_blank" to={`${websites[2].link}`} className="inline-flex items-center px-3 py-2 bg-primary_btn text-light_text hover:text-dark_text py-2 px-4 rounded hover:bg-secondary_btn">
                  View
              </Link>
          </div>
          
      </div>

      <div className="max-w-sm hover:bg-dark_bg_secondary border rounded-md border-gray-200 rounded-lg shadow ">
        
        <Link target="_blank" to={`${websites[3].link}`}>
            <img className="rounded-md aspect-video" src={`${images[3].link}`} alt={`${websites[3].name}`} />
        </Link>
        <div className="p-5">
            
                <h5 className="mb-2 rounded-md text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[3].name}`}</h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A complete backend project to integrate RSS feeds from websites. Utilizing Go and SQL, authenticated users can fetch RSS feeds and store in a database.</p>
            <Link target="_blank" to={`${websites[3].link}`} className="inline-flex items-center px-3 py-2 bg-primary_btn text-light_text hover:text-dark_text py-2 px-4 rounded hover:bg-secondary_btn">
                View
            </Link>
        </div>
        
      </div>


      <div className="max-w-sm hover:bg-dark_bg_secondary border rounded-md border-gray-200 rounded-lg shadow ">
        
        <Link target="_blank" to={`${websites[4].link}`}>
            <img className="rounded-md aspect-video" src={`${images[4].link}`} alt={`${websites[4].name}`} />
        </Link>
        <div className="p-5 rounded-md">
            
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${websites[4].name}`}</h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">A simple mobile application to display state management and use of SQL in flutter. Items can be added and removed from cart while total Price is calculated storing in database.</p>
            <Link target="_blank" to={`${websites[4].link}`} className="inline-flex items-center px-3 py-2 bg-primary_btn text-light_text hover:text-dark_text py-2 px-4 rounded hover:bg-secondary_btn">
                View
            </Link>
        </div>
        
      </div>

      </div>
       
    
      
    </section>
    </div>
    
    </>
  );
}

export default Projects;
