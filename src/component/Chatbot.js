import React from "react";
import ChatBot from "react-simple-chatbot";


function Chatbot(props) {

  const steps = [
    {
        id: "0",
        message: "Are you a US Resident?",
        trigger: "1"
     },
     {
        id: "1",
        options :[
          {
            value: "yes",
            label: "Yes",
            trigger: "2"
          },
          { 
            value: "no",
            label: "No",
            trigger: "0"
          } 
    
        ]
        
     },
     {
        id: "2",
        message: "Do you speak English?",
        trigger: "3"
     },
     {
        id: "3",
        options :[
          {
            value: "yes",
            label: "Yes",
            trigger: "4"
          },
          { 
            value: "no",
            label: "No",
            trigger: "4"
          } 
    
        ]
       
     },
     {
      id: "4",
      message: "Do you have daily access to a smart phone?",    
      trigger: "6"
     },
     {
        id: "6",
        options :[
          {
            value: "yes",
            label: "Yes",
            trigger: "7"
          },
          {
            value: "no",
            label: "No",
            trigger: "7"
          },
        ]
     },
     {
      id: "5",
      message: "Coronavirus Self-Checker is intended for people currently located in the U.S. or a U.S. territory.Please check with your ministry of health for more information about COVID-19 in your locaton.",    
      trigger: "Done"
     }, 
     {
        id: "7",
        message: "During the past 30-days, how often have you used an electronic cigarette/vape?",    
        trigger: "8"
     },
     {
        id: "8",
        options :[
          {
            value: "never",
            label: "Never",
            trigger: "9"
          },
          {
            value: "once",
            label: "Once",
            trigger: "9"
          },
          {
            value: "2-3 times",
            label: "2-3 times",
            trigger: "9"
          },
          {
            value: "once a week",
            label: "Once a week",
            trigger: "9"
          },
          {
            value: "twice a week",
            label: "Twice a week",
            trigger: "9"
          },
          {
            value: "3-4 times a week",
            label: "3-4 times a week",
            trigger: "9"
          },
          {
            value: "5-6 times a week",
            label: "5-6 times a week",
            trigger: "9"
          },
          {
            value: "everyday",
            label: "Everyday",
            trigger: "9"
          }

           
        ]
     },
     {
        id: "9",
        message: "Do you typically use e-liquid that contains nicotine?",
        trigger: "10"
     },

     {
        id: "10",
        options :[
          {
            value: "yes",
            label: "Yes",
            trigger: "11"
          },
          { 
            value: "no",
            label: "No",
            trigger: "vaping-product"
          },
          {
            value: "I'm not sure",
            label: "I'm not sure",
            trigger: "vaping-product"
          }, 
    
        ]
       
     },
     {
        id: "11",
        message: "If yes, what concentration of nicotine do you use regularly?",
        trigger:"nico-concentration"

     },
     {
      id: "nico-concentration",
      options :[
        {
          value: "0",
          label: "0",
          trigger: "vaping-product"
        },
        { 
          value: "3",
          label: "3",
          trigger: "vaping-product"
        },
        {
          value: "6",
          label: "6",
          trigger: "vaping-product"
        },
        { 
          value: "12",
          label: "12",
          trigger: "vaping-product"
        },
        {
          value: "18",
          label: "18",
          trigger: "vaping-product"
        },
        { 
          value: "24",
          label: "24",
          trigger: "vaping-product"
        },
        {
          value: ">= 30 mg",
          label: ">= 30 mg",
          trigger: "vaping-product"
        },
        { 
          value: "I don't know",
          label: "I don't know",
          trigger: "vaping-product"
        },
      ]
   },

     {
      id: "vaping-product",
      message: "What type of vaping product do you currently use?",
      trigger:"13"
     },
     {
        id: "13",
        options :[
          {
            value: "JUUL",
            label: "JUUL",
            trigger: "vaping-flavour"
          },
          { 
            value: "Blu",
            label: "Blu",
            trigger: "vaping-flavour"
          },
          { 
            value: "SMOK",
            label: "SMOK",
            trigger: "vaping-flavour"
          },
          { 
            value: "Other Stealth Vaping Mod",
            label: "Other Stealth Vaping Mod",
            trigger: "specify"
          },
          { 
            value: "Other Standard Vaping Device",
            label: "Other Standard Vaping Device",
            trigger: "specify"
          },
        ]
     },
     {
      id: "specify",
      message: "Please specify:",
      user:true,
      trigger: "vaping-flavour"
    },
     {
        id: "vaping-flavour",
        message: "Do you ever use the flavored e-juice/vaping juice concentrates?",
        trigger: "15"
     },
     {
      id: "15",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "16"
        },
        { 
          value: "no",
          label: "No",
          trigger: "smoked-cigarettes"
        } 
  
      ]
    },
    {
      id: "16",
      message: "What Flavors?",
      user:true,
      trigger: "smoked-cigarettes"
    },
    {
      id: "smoked-cigarettes",
      message: "Have you ever smoked cigarettes?",
      trigger: "smoked-cigarettes-options"
    },
      {
      id: "smoked-cigarettes-options",
      options :[
        {
          value: "no",
          label: "No",
          trigger: "vaped-substance"
        },
        { 
          value: "yes, I have only smoked a few times in my life",
          label: "Yes, I have only smoked a few times in my life",
          trigger: "vaped-substance"
        },
        { 
          value: "yes,but I have not smoked in the last year",
          label: "Yes, But I have not smoked in the last year",
          trigger: "vaped-substance"
        },
        { 
          value: "yes,but I have not smoked in the last 30 days",
          label: "Yes,But I have not smoked in the last 30 days",
          trigger: "vaped-substance"
        },
        { 
          value: "yes, I have smoked in the last 30 days",
          label: "Yes, I have smoked in the last 30 days",
          trigger: "vaped-substance"
        }
  
      ]
    },
    {
      id: "vaped-substance",
      message: "Have you ever vaped another substance, such as marijuana(e.g.,CBD,THC,etc)?",
      trigger: "vaped-substace-option"
    },
    {
      id: "vaped-substace-option",
      options :[
        {
          value: "yes,MJ related",
          label: "Yes, MJ related",
          trigger: "race"
        },
        { 
          value: "yes, a different substance",
          label: "Yes, a different substance",
          trigger: "substance-specify"
        },
        { 
          value: "no, only nicotine vased vapes",
          label: "No, only nicotine vased vapes",
          trigger: "race"
        },
        { 
          value: "I'm not sure if I have vaped another substance",
          label: "I'm not sure if I have vaped another substance",
          trigger: "race"
        }
      ]
    },
    {
      id: "substance-specify",
      message: "Please specify :",
      user:true,
      trigger: "Done"
    },
    {
      id: "race",
      message: "What is your race?",
      trigger: "race-option"
    },
    {
      id: "race-option",
      options :[
        {
          value: "american-indian or alaska-native",
          label: "American-Indian or Alaska-Native",
          trigger: "H-L"
        },
        { 
          value: "asian",
          label: "Asian",
          trigger: "H-L"
        },
        { 
          value: "black or african american",
          label: "Black or African American",
          trigger: "H-L"
        },
        { 
          value: "white",
          label: "White",
          trigger: "H-L"
        },
        { 
          value: "native hawaiian or other pacific islander",
          label: "Native Hawaiian or Other Pacific Islander",
          trigger: "H-L"
        },
        { 
          value: "other",
          label: "Other",
          trigger: "other-specify"
        },
        { 
          value: "unknown or do not wish to disclose",
          label: "Unknown or Do not wish to disclose",
          trigger: "H-L"
        },
  
      ]
    },
    {
      id: "other-specify",
      user:true,
      trigger: "H-L"
    },
    {
      id: "H-L",
      message: "Are you Hipanic or Latino?",
      trigger: "33"
    },
    {
      id: "33",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "age"
        },
        { 
          value: "no",
          label: "No",
          trigger: "age"
        } 
  
      ]
    },
    {
      id: "age",
      message: "How old are you?",
      trigger: "35"
    },
    {
      id: "35",
      options :[
        {
          value: "14 or younger",
          label: "14 or younger",
          trigger: "Done"
        },
        { 
          value: "15-16",
          label: "15-16",
          trigger: "Done"
        },
        { 
          value: "17-18",
          label: "17-18",
          trigger: "Done"
        },
        { 
          value: "19-20",
          label: "19-20",
          trigger: "Done"
        },
        { 
          value: "21-22",
          label: "21-22",
          trigger: "Done"
        },
        { 
          value: "23-25",
          label: "23-25",
          trigger: "Done"
        },
        { 
          value: "26 or older",
          label: "26 or older",
          trigger: "Done"
        }

  
      ]
    },
    
    
        
      
       
      
     {
         id: "Done",
         message: "Enjoy your life !",
         end: true
     }
    ];
  return <ChatBot floating={false}
                  steps={steps} 
                  width={100}
                  height={1000}
                  // useAvatar={{src: 'a'.png}}
                  // botAvatar= {{ src: 'a'.png}}
                  headerTitle="Welcome to Chat Bot"
                  speechSynthesis={{ enable: false, lang: 'en' }
                }
                  
                 />;
}
export default Chatbot;