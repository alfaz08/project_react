import SingleBestCard from "./SingleBestCard";


const BestCard = () => {


  const cards =[
    {
      "id":"1",
      "image":"https://i.ibb.co/GkrTdR9/Screenshot-1-removebg-preview.png",
      "best":"Best Choice",
      "name":"Builder 1",
       "desFirst":"WixPro 72-Inch Responsive Website Builder-",
      "des":"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
       "main":"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
       "total":"9.8",
       "rating":"5",
       "priority":"Exceptional"
    },
    {
      "id":"2",
      "image":"https://i.ibb.co/GkrTdR9/Screenshot-1-removebg-preview.png",
      "best":"Best Choice",
      "desFirst":"SiteCraft 68-Inch Ultimate Web Design Studio-",
      "des":"Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
       "main":"[What You Get!: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.        ",
       "total":"9.5",
       "name":"Builder",
       "rating":"4.5",
       "priority":"Excellent"
    },
    {
      "id":"3",
      "image":"https://i.ibb.co/GkrTdR9/Screenshot-1-removebg-preview.png",
      "name":"Builder 1",
      "des":"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "desFirst":"WixPro 72-Inch Responsive Website Builder-",
      "main":"[What You Get): Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.        ",
       "total":"9.3",
       "rating":"5",
       "priority":"Exceptional"
    },
  ]


  return (
    <div>
      <div className="mt-8">
        {
          cards?.map(card=><SingleBestCard key={card.id} card={card}></SingleBestCard>)
        }
      </div>
    </div>
  );
};

export default BestCard;