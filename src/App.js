import React from "react";

import chatbotapp from "./chatbotapp.png";


export default function App() {
  const links = [
    { 
      title: 'Chatbotapp.ai',
      url: 'https://www.chatbotapp.ai',
      description: () => (
        <p>This service provide APIs to freely available or paid AI tools at a very expensive monthly or yearly fee. This guys operates on showing their product on searches related to GPT4 and misleading user to buy their service. The site which exactly look like open ai website. They are even using open ai logo.</p>
      ),
      image: chatbotapp
    },
  ];

  return (
    <div style={{padding: "20px", fontFamily: "Helvetica"}}>
      <h1>Worst AI Services List (DO NOT LOSS MONEY)</h1>
      <div style={{paddingTop: "20px", textDecoration: "none"}}>
        {links.map((link, index) => (
          <div key={index}>
            <a style={{paddingTop: "20px", textDecoration: "none"}} href={link.url}><h2>{link.title}</h2></a>
            <p style={{ fontSize: "19px" }}>{link.description()}</p>
            <div>
              <img src={chatbotapp} />
            </div>
          </div>
        ))}
      </div>

      <p style={{ display: "inline-block" }}>Contribute to the list by committing to</p><div style={{ display: "inline-block", width: "20px", height: "20px" }} /><a style={{ display: "inline-block" }} href="https://github.com/aitoolreviews/aitoolreviews.github.io">Our Github Repo</a>
    </div>
  );
}
