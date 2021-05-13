import React from "react";
import ChatBot from "react-simple-chatbot";


function Chatbot(props) {

  const steps = [
    {
        id: "0",
        message: "Please consent to use the Coronavirus Self-Checker.The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease or other conditions, including COVID-19. This system is intended only for adults who are 18 years and older and currently located in the United States.This project was made possible through a partnership with the CDC Foundation and is enabled by Microsoft’s Azure platform. CDC’s collaboration with a non-federal organization does not imply an endorsement of any one particular service, product, or enterprise.",

        trigger: "1"
     },
     {
        id: "1",
        options :[
          {
            value: "yes",
            label: "I agree",
            trigger: "2"
          },
          { 
            value: "no",
            label: "I don't agree",
            trigger: "0"
          } 
    
        ]
        
     },
     {
        id: "2",
        message: "Hi, I’m Clara. I’m going to ask you some questions. I will use your answers to give you advice about the level of medical care you should seek.But first, if you are experiencing a life-threatening emergency, please call 911 immediately.If you are not experiencing a life-threatening emergency, let’s get started.During the assessment, you can refresh the page if you need to start again.Are you in the United States or a U.S. territory right now?",
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
            trigger: "5"
          } 
    
        ]
       
     },
     {
      id: "4",
      message: "Where in the United States or in which U.S. territory are you located?",    
      trigger: "6"
     },
     {
        id: "6",
        options :[
          {
            value: "alabama",
            label: "Alabama",
            trigger: "7"
          },
          {
            value: "alaska",
            label: "Alaska",
            trigger: "7"
          },
          {
            value: "arizona",
            label: "Arizona",
            trigger: "7"
          },
          {
            value: "arkansas",
            label: "Arkansas",
            trigger: "7"
          },
          {
            value: "calirfonia",
            label: "Calirfonia",
            trigger: "7"
          },
          {
            value: "colorado",
            label: "Colorado",
            trigger: "7"
          },
          {
            value: "florida",
            label: "Florida",
            trigger: "7"
          },
          {
            value: "iowa",
            label: "Iowa",
            trigger: "7"
          },
          {
            value: "idaho",
            label: "Idaho",
            trigger: "7"
          },
          { 
            value: "texas",
            label: "Texas",
            trigger: "7"
          },
          { 
            value: "virginia",
            label: "Virginia",
            trigger: "7"
          }
    
        ]
     },
     {
      id: "5",
      message: "Coronavirus Self-Checker is intended for people currently located in the U.S. or a U.S. territory.Please check with your ministry of health for more information about COVID-19 in your location.",    
      trigger: "Done"
     }, 
     {
        id: "7",
        message: "Are you answering for yourself or someone else?",    
        trigger: "8"
     },
     {
        id: "8",
        options :[
          {
            value: "myself",
            label: "Myself",
            trigger: "9"
          }
           
        ]
     },
     {
        id: "9",
        message: "Do you have any of these life-threatening symptoms?"+

        " 1.Bluish lips or face"+

        " 2.Severe and constant pain or pressure in the chest"+
        
        " 3.Extreme difficulty breathing (such as gasping for air or being unable to talk without catching your breath)"+
        
        " 4.Severe and constant dizziness or lightheadedness"+
        
        " 5.New serious disorientation (acting confused)"+
        
        " 6.Unconscious or very difficult to wake up"+
        
        " 7.Slurred speech or difficulty speaking (new or worsening)"+
        
        " 8.Seizures"+
        
        " 9.Signs of low blood pressure (too weak to stand, light headed, feeling cold, pale, clammy skin)",
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
            trigger: "12"
          } 
    
        ]
       
     },
     {
        id: "11",
        message: "Urgent medical attention may be needed. Please call 911 or go to the Emergency Department."+

        " Based on your symptoms, you may need urgent medical care. Please call 911 or go to the nearest emergency department."+
        
        " Tell the 911 operator or emergency staff if you have had contact with someone with COVID-19.",
        trigger:"Done"

     },
     {
      id: "12",
      message: "What is your age?",
      trigger:"13"
     },
     {
        id: "13",
        options :[
          {
            value: "under 18 years old",
            label: "Under 18 years old",
            trigger: "38"
          },
          { 
            value: "18-29",
            label: "18-29",
            trigger: "14"
          },
          { 
            value: "30-39",
            label: "30-39",
            trigger: "14"
          },
          { 
            value: "40-49",
            label: "40-49",
            trigger: "14"
          },
          { 
            value: "50-59",
            label: "50-59",
            trigger: "14"
          },
          { 
            value: "60-64",
            label: "60-64",
            trigger: "14"
          },
          { 
            value: "65-69",
            label: "65-69",
            trigger: "14"
          },
          { 
            value: "70-79",
            label: "70-79",
            trigger: "14"
          },
          { 
            value: "80+",
            label: "80+",
            trigger: "14"
          }        
    
        ]
     },
     {
      id: "38",
      message: "This Coronavirus Self-Checker is for people who are at least 18 years old."+

      " Visit the CDC website to get information on COVID-19 and younger people.",
      trigger: "Done"
    },
     {
        id: "14",
        message: "Are you feeling ill?",
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
          trigger: "26"
        } 
  
      ]
    },
    {
      id: "16",
      message: "What is your gender?",
      trigger: "18"
    },
    {
      id: "18",
      options :[
        {
          value: "male",
          label: "Male",
          trigger: "19"
        },
        { 
          value: "female",
          label: "Female",
          trigger: "19"
        },
        { 
          value: "other",
          label: "Other",
          trigger: "19"
        } 
  
      ]
    },
    {
      id: "26",
      message: "In the two weeks before you felt sick, did you have contact with someone diagnosed with COVID-19?",
      trigger: "27"
    },
    {
      id: "27",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "28"
        },
        { 
          value: "no",
          label: "No",
          trigger: "31"
        },
        { 
          value: "i don't know",
          label: "I don't know",
          trigger: "31"
        }  
  
      ]
    },
    {
      id: "31",
      message: "Sounds like you are feeling ok."+

      " Learn more about COVID-19 and what you can do to stay safe on the CDC website."+
      
      " Please also see your local area’s website and Social Services"+
      " Monitor for symptoms."+

      " Watch for COVID-19 symptoms. If you develop symptoms, call your healthcare provider, clinician advice line, or telemedicine provider."+

      " Learn more about COVID-19 and steps you can take to protect yourself and others on the CDC website."+
      " No COVID-19 testing needed at this time."+

      " Based on the answers you’ve given, you do not need to get tested for COVID-19 at this time.",
      trigger: "Done"
    },
    {
      id: "28",
      message: "Do you live in a long-term care facility or nursing home?",
      trigger: "29"
    },
    {
      id: "29",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "30"
        },
        { 
          value: "no",
          label: "No",
          trigger: "32"
        } 
  
      ]
    },
    {
      id: "30",
      message: "Monitor for symptoms, stay at home."+

      " Stay home for 14 days"+
      
      " Take your temperature twice a day and watch for symptoms of COVID-19."+
      
      " Practice social distancing."+
      
      " Stay at least 6 feet away from others and stay out of crowded places."+
      
      " If possible, stay away from people who are at higher risk for getting very sick from COVID-19."+
      
      " If you develop symptoms, follow CDC guidance."+
      
      " Please also see your local area’s website"+

      " If you start to feel ill, tell a healthcare provider in the long-term care facility where you live."+

      " No COVID-19 testing needed at this time"+

      " Based on the answers you’ve given, you do not need to get tested for COVID-19 at this time.",
      trigger: "Done"
    },
    {
      id: "32",
      message: "In the last two weeks have you worked or volunteered in a healthcare facility (including dental care setting)?",
      trigger: "33"
    },
    {
      id: "33",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "34"
        },
        { 
          value: "no",
          label: "No",
          trigger: "30"
        } 
  
      ]
    },
    {
      id: "34",
      message: "Did you wear all recommended personal protective equipment while you were in close contact with someone diagnosed with COVID-19?",
      trigger: "35"
    },
    {
      id: "35",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "36"
        },
        { 
          value: "no",
          label: "No",
          trigger: "37"
        } 
  
      ]
    },
    {
      id: "37",
      message: "Contact the occupational health provider at your workplace."+

      " Tell your occupational health provider (or supervisor) that you have been in contact with someone diagnosed with COVID-19. You may be asked to wear a mask or cloth covering over your nose and mouth to protect yourself and those around you."+
      
      " Check your temperature twice a day for 14 days."+
      
      " Watch for COVID-19 symptoms. Learn more about COVID-19 and how you can protect yourself and others on the CDC website."+
      
      " Please also see your local area’s website."+
      " You may be eligible for COVID-19 testing."+

      " Visit your health department’s website or talk to your healthcare provider for more information. To find a testing location near you, visit the HHS website.",
      trigger: "Done"
    },
    {
      id: "36",
      message: "Monitor for symptoms, wear a mask."+

      " Watch for COVID-19 symptoms. If you develop symptoms, call your occupational health provider as well as your healthcare provider, clinician advice line, or telemedicine provider. Since you work or volunteer in a healthcare facility, you may be asked to wear a mask or cloth covering over your nose and mouth to protect yourself and those around you."+
      
      " Please also see your local area’s website."+
      " You may be eligible for COVID-19 testing."+

      " Visit your health department’s website or talk to your healthcare provider for more information. To find a testing location near you, visit the HHS website.",
      trigger: "Done"
    },
    {
      id: "19",
      message: "In the two weeks before you felt sick, did you have contact with someone diagnosed with COVID-19?",
      trigger: "20"
    },
    {
      id: "20",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "21"
        },
        { 
          value: "no",
          label: "No",
          trigger: "21"
        } 
  
      ]
    },
    {
      id: "21",
      message: "Do you have any of the following? (check any)",
      trigger: "22"
    },
    {
      id: "22",
      options :[
        {
          value: "fever or feeling feverish (such as chills, sweating)",
          label: "Fever or feeling feverish (such as chills, sweating)",
          trigger: "23"
        },
        { 
          value: "cough",
          label: "Cough",
          trigger: "23"
        },
        { 
          value: "mild or moderate difficulty breathing",
          label: "Mild or moderate difficulty breathing",
          trigger: "23"
        },
        { 
          value: "sore throat",
          label: "Sore throat",
          trigger: "23"
        },
        { 
          value: "muscle aches or body aches",
          label: "Muscle aches or body aches",
          trigger: "23"
        },
        { 
          value: "vomiting or diarrhea",
          label: "Vomiting or diarrhea",
          trigger: "23"
        },
        { 
          value: "new loss of taste or smell",
          label: "New loss of taste or smell",
          trigger: "23"
        },
        { 
          value: "other symptoms",
          label: "Other symptoms",
          trigger: "23"
        }
      ]
   },
      {
        id: "23",
        message: "Do you live in a long-term care facility or nursing home?",
        trigger:"24"
      },
        {
          id: "24",
          options :[
            {
              value: "yes",
              label: "Yes",
              trigger: "25"
            },
            { 
              value: "no",
              label: "No",
              trigger: "32"
            } 

          ]
        },
        {
          id: "25",
          message: "Contact a healthcare provider in the long-term care facility where you live."+

          " Tell a caregiver in your facility that you are sick and need to see a medical provider as soon as possible. Living in a long-term care facility or nursing home may put you at a higher risk for severe illness."+
          "Stay in your room as much as possible except to get medical care."+

          " Cover your coughs and sneezes with a tissue or the inside of your elbow."+
          
          " Clean your hands often."+
          
          " Avoid close contact with other people. Stay at least 6 feet away from other people."+
          
          " Wear a cloth face covering when around others."+
          
          " Clean and disinfect commonly touched surfaces in your room."+
          
          " Monitor your health and notify a medical provider if you think you are getting sicker.",
          trigger:"Done"
      },
     {
         id: "Done",
         message: "Have a healthy life !",
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