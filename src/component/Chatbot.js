import React from "react";
import ChatBot from "react-simple-chatbot";
import Post from './Post';


function Chatbot(props) {

  const steps = [
     {
        id: "starting",
        message: "Are you a US Resident?",
        trigger: "USR"
     },
     {
        id: "USR",
        options :[
          {
            value: "yes",
            label: "Yes",
            trigger: "language"
          },
          { 
            value: "no",
            label: "No",
            trigger: "language"
          } 
    
        ]
        
     },
     {
        id: "language",
        message: "Do you speak English?",
        trigger: "english"
     },
     {
        id: "english",
        options :[
          {
            value: "yes",
            label: "Yes",
            trigger: "smart-phone"
          },
          { 
            value: "no",
            label: "No",
            trigger: "smart-phone"
          } 
        ]  
     },
  {
      id: "smart-phone",
      message: "Do you have daily access to a smart phone?",
      trigger: "smart_phone_options"
   },
   {
    id: "smart_phone_options",
    options :[
      {
        value: "yes",
        label: "Yes",
        trigger: "cigarette/vape"
      },
      { 
        value: "no",
        label: "No",
        trigger: "cigarette/vape"
      } 
    ]  
 },
      {
        id: "cigarette/vape",
        message: "During the past 30-days, how often have you used an electronic cigarette/vape?",    
        trigger: "using_times"
     },
     {
        id: "using_times",
        options :[
          {
            value: "never",
            label: "Never",
            trigger: "Done"
          },
          {
            value: "once",
            label: "Once",
            trigger: "nicotine"
          },
          {
            value: "2-3 times",
            label: "2-3 times",
            trigger: "nicotine"
          },
          {
            value: "once a week",
            label: "Once a week",
            trigger: "nicotine"
          },
          {
            value: "twice a week",
            label: "Twice a week",
            trigger: "nicotine"
          },
          {
            value: "3-4 times a week",
            label: "3-4 times a week",
            trigger: "nicotine"
          },
          {
            value: "5-6 times a week",
            label: "5-6 times a week",
            trigger: "nicotine"
          },
          {
            value: "everyday",
            label: "Everyday",
            trigger: "nicotine"
          }  
        ]
     },
     {
        id: "nicotine",
        message: "Do you typically use e-liquid that contains nicotine?",
        trigger: "nicotine_confirmation"
     },

     {
        id: "nicotine_confirmation",
        options :[
          {
            value: "yes",
            label: "Yes",
            trigger: "nicotine_daily"
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
        id: "nicotine_daily",
        message: "If yes, what concentration of nicotine do you use regularly?",
        trigger:"nico_concentration"

     },
     {
      id: "nico_concentration",
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
      trigger:"vaping_product_names"
     },
     {
        id: "vaping_product_names",
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
            trigger: "vaping-mod-specify"
          },
          { 
            value: "Other Standard Vaping Device",
            label: "Other Standard Vaping Device",
            trigger: "vaping-device-specify"
          },
        ]
     },
     {
      id: "vaping-mod-specify",
      message: "Please specify:",
      trigger: "user_vaping_mod_specify"
    },
    {
      id: "user_vaping_mod_specify",
      user:true,
      trigger: "vaping-flavour"
    },
    {
      id: "vaping-device-specify",
      message: "Please specify:",
      trigger: "user_vaping_device_specify"
    },
    {
      id: "user_vaping_device_specify",
      user:true,
      trigger: "vaping-flavour"
    },
     {
        id: "vaping-flavour",
        message: "Do you ever use the flavored e-juice/vaping juice concentrates?",
        trigger: "flavored_juice"
     },
     {
      id: "flavored_juice",
      options :[
        {
          value: "yes",
          label: "Yes",
          trigger: "flavor-specify"
        },
        { 
          value: "no",
          label: "No",
          trigger: "smoked-cigarettes"
        } 
  
      ]
    },
    {
      id: "flavor-specify",
      message: "What Flavors?",
      trigger: "flavors_specification"
    },
    {
      id: "flavors_specification",
      user:true,
      trigger: "smoked-cigarettes"
    },
    {
      id: "smoked-cigarettes",
      message: "Have you ever smoked cigarettes?",
      trigger: "smoked_cigarettes_options"
    },
      {
      id: "smoked_cigarettes_options",
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
      trigger: "vaped_substace_option"
    },
    {
      id: "vaped_substace_option",
      options :[
        {
          value: "yes,MJ related",
          label: "Yes, MJ related",
          trigger: "Done"
          // "race"
        },
        { 
          value: "yes, a different substance",
          label: "Yes, a different substance",
          trigger: "Done"
          // "substance-specify"
        },
        { 
          value: "no, only nicotine vased vapes",
          label: "No, only nicotine vased vapes",
          trigger: "Done"
          //  "race"
        },
        { 
          value: "I'm not sure if I have vaped another substance",
          label: "I'm not sure if I have vaped another substance",
          trigger: "Done"
          //  "race"
        }
      ]
    },
    // {
    //   id: "substance-specify",
    //   message: "Please specify :",
    //   trigger: "user-substance-specify"
    // },
    // {
    //   id: "user-substance-specify",
    //   user:true,
    //   trigger: "race"
    // },
    // {
    //   id: "race",
    //   message: "What is your race?",
    //   trigger: "race-option"
    // },
    // {
    //   id: "race-option",
    //   options :[
    //     {
    //       value: "american-indian or alaska-native",
    //       label: "American-Indian or Alaska-Native",
    //       trigger: "H-L"
    //     },
    //     { 
    //       value: "asian",
    //       label: "Asian",
    //       trigger: "H-L"
    //     },
    //     { 
    //       value: "black or african american",
    //       label: "Black or African American",
    //       trigger: "H-L"
    //     },
    //     { 
    //       value: "white",
    //       label: "White",
    //       trigger: "H-L"
    //     },
    //     { 
    //       value: "native hawaiian or other pacific islander",
    //       label: "Native Hawaiian or Other Pacific Islander",
    //       trigger: "H-L"
    //     },
    //     { 
    //       value: "other",
    //       label: "Other",
    //       trigger: "other-specify"
    //     },
    //     { 
    //       value: "unknown or do not wish to disclose",
    //       label: "Unknown or Do not wish to disclose",
    //       trigger: "H-L"
    //     },
  
    //   ]
    // },
    // {
    //   id: "other-specify",
    //   user:true,
    //   trigger: "H-L"
    // },
    // {
    //   id: "H-L",
    //   message: "Are you Hipanic or Latino?",
    //   trigger: "H-L-confirmation"
    // },
    // {
    //   id: "H-L-confirmation",
    //   options :[
    //     {
    //       value: "yes",
    //       label: "Yes",
    //       trigger: "age"
    //     },
    //     { 
    //       value: "no",
    //       label: "No",
    //       trigger: "age"
    //     } 
  
    //   ]
    // },
    // {
    //   id: "age",
    //   message: "How old are you?",
    //   trigger: "age-specification"
    // },
    // {
    //   id: "age-specification",
    //   options :[
    //     {
    //       value: "14 or younger",
    //       label: "14 or younger",
    //       trigger: "Done"
    //     },
    //     { 
    //       value: "15-16",
    //       label: "15-16",
    //       trigger: "gender"
    //     },
    //     { 
    //       value: "17-18",
    //       label: "17-18",
    //       trigger: "gender"
    //     },
    //     { 
    //       value: "19-20",
    //       label: "19-20",
    //       trigger: "gender"
    //     },
    //     { 
    //       value: "21-22",
    //       label: "21-22",
    //       trigger: "gender"
    //     },
    //     { 
    //       value: "23-25",
    //       label: "23-25",
    //       trigger: "gender"
    //     },
    //     { 
    //       value: "26 or older",
    //       label: "26 or older",
    //       trigger: "Done"
    //     }
    //   ]
    // },
    // {
    //   id: "gender",
    //   message: "What is your gender identity?",
    //   trigger: "gender-specification"
    // }, 
    // {
    //   id: "gender-specification",
    //   options :[
    //     {
    //       value: "man",
    //       label: "Man",
    //       trigger: "gender_pronouns"
    //     },
    //     { 
    //       value: "women",
    //       label: "Women",
    //       trigger: "gender_pronouns"
    //     },
    //     {
    //       value: "trans_man",
    //       label: "Trans man",
    //       trigger: "gender_pronouns"
    //     },
    //     { 
    //       value: "trans_women",
    //       label: "Trans women",
    //       trigger: "gender_pronouns"
    //     },
    //     {
    //       value: "genderqueer",
    //       label: "Genderqueer/ Gender non-conforming",
    //       trigger: "gender_pronouns"
    //     },
    //     { 
    //       value: "self_identity",
    //       label: "Self-identity",
    //       trigger: "self_identity_specification"
    //     }
    //   ]
    // },
    // {
    //   id: "self_identity_specification",
    //   user:true,
    //   trigger: "gender_pronouns"
    // },
    // {
    //   id: "gender_pronouns",
    //   message: "Please provide your preferred pronouns:",
    //   trigger: "pronouns_specification"
    // },
    // {
    //   id: "pronouns_specification",
    //   options :[
    //     {
    //       value: "she",
    //       label: "She/her/hers",
    //       trigger: "first_start_vaping"
    //     },
    //     { 
    //       value: "he",
    //       label: "He/him/his",
    //       trigger: "first_start_vaping"
    //     },
    //     {
    //       value: "they",
    //       label: "They/them/theirs",
    //       trigger: "first_start_vaping"
    //     },
    //     { 
    //       value: "self_pronouns",
    //       label: "Self-identify (please specify):",
    //       trigger: "self_pronouns_specification"
    //     },
    //     {
    //       value: "not_share_pronouns",
    //       label: "Prefer not to share",
    //       trigger: "first_start_vaping"
    //     }  
    //   ]
    // },
    // {
    //   id: "self_pronouns_specification",
    //   user:true,
    //   trigger: "first_start_vaping"
    // },
    // {
    //   id: "first_start_vaping",
    //   message:"When did you first start vaping?",
    //   trigger: "first_start_vaping_options"
    // },
    // {
    //   id: "first_start_vaping_options",
    //   options :[
    //     {
    //       value: "a_month",
    //       label: "About a month ago",
    //       trigger: "time_first_vape"
    //     },
    //     { 
    //       value: "3_month",
    //       label: "About 3 months ago",
    //       trigger: "time_first_vape"
    //     },
    //     {
    //       value: "6_month",
    //       label: "About 6 months ago",
    //       trigger: "time_first_vape"
    //     },
    //     { 
    //       value: "1_year",
    //       label: "About 1 year ago",
    //       trigger: "time_first_vape"
    //     },
    //     {
    //       value: "more_year",
    //       label: "More than 1 year ago",
    //       trigger: "time_first_vape"
    //     }
    //   ]
    // },
    // {
    //   id: "time_first_vape",
    //   message:"What time of day do you typically first vape?",
    //   trigger: "time_first_vape_options"
    // },
    // {
    //   id: "time_first_vape_options",
    //   options :[
    //     {
    //       value: "first_wake",
    //       label: "When I first wake up in the morning",
    //       trigger: "vape_often"
    //     },
    //     { 
    //       value: "some time in the morning or after my first meal of the day",
    //       label: "Some time in the morning or after my first meal of the day",
    //       trigger: "vape_often"
    //     },
    //     {
    //       value: "during the day",
    //       label: "During the day",
    //       trigger: "vape_often"
    //     },
    //     { 
    //       value: "after school",
    //       label: "After school",
    //       trigger: "vape_often"
    //     },
    //     {
    //       value: "later in the Evening",
    //       label: "Later in the Evening",
    //       trigger: "vape_often"
    //     },
    //     {
    //       value: "late at night",
    //       label: "Late at night",
    //       trigger: "vape_often"
    //     }

    //   ]
    // },
    // {
    //   id: "vape_often",
    //   message:"Where do you vape most often?",
    //   trigger: "vape_often_options"
    // },
    // {
    //   id: "vape_often_options",
    //   options :[
    //     {
    //       value: "at home",
    //       label: "At home",
    //       trigger: "ads_for_e_cigarettes"
    //     },
    //     { 
    //       value: "at school",
    //       label: "At school",
    //       trigger: "ads_for_e_cigarettes"
    //     },
    //     {
    //       value: "at a friend’s house",
    //       label: "At a friend’s house",
    //       trigger: "ads_for_e_cigarettes"
    //     },
    //     { 
    //       value: "other_vape_often:",
    //       label: "Other",
    //       trigger: "other_vape_often_specification"
    //     },
    //     {
    //       value: "at the mall, movie theater, park, other public place",
    //       label: "At the mall, movie theater, park, other public place",
    //       trigger: "ads_for_e_cigarettes"
    //     }  
    //   ]
    // },
    // {
    //   id: "other_vape_often_specification",
    //   message:"Please specify:",
    //   trigger: "user_other_vape_often_specification"
    // },
    // {
    //   id: "user_other_vape_often_specification",
    //   user:true,
    //   trigger: "ads_for_e_cigarettes"
    // },
    
    // {
    //   id: "ads_for_e_cigarettes",
    //   message:"Do you ever see ads for e-cigarettes or vaping products?",
    //   trigger:"ads_for_e_cigarettes_options"
    // },
    //   {
    //   id:"ads_for_e_cigarettes_options",
    //   options :[
    //     {
    //       value: "yes",
    //       label: "Yes",
    //       trigger: "ads_for_e_cigarettes_specification"
    //     },
    //     { 
    //       value: "no",
    //       label: "No",
    //       trigger: "social_media"
    //     } 
  
    //   ]
    // },
    // {
    //   id: "ads_for_e_cigarettes_specification",
    //   message:"Where do you notice these?",
    //   trigger: "ads_for_e_cigarettes_specification_options"
    // },
    // {
    //   id: "ads_for_e_cigarettes_specification_options",
    //   options :[
    //     {
    //       value: "gas Station/convenience Store",
    //       label: "Gas Station/Convenience Store",
    //       trigger: "social_media"
    //     },
    //     { 
    //       value: "online/social Media",
    //       label: "Online/Social Media",
    //       trigger: "social_media"
    //     },
    //     {
    //       value: "magazines/newspapers/billboards",
    //       label: "Magazines/Newspapers/Billboards",
    //       trigger: "social_media"
    //     },
    //     { 
    //       value: "tV",
    //       label: "TV",
    //       trigger: "social_media"
    //     },
    //     {
    //       value: "radio",
    //       label: "Radio",
    //       trigger: "social_media"
    //     },
    //     { 
    //       value: "other",
    //       label: "Other",
    //       trigger: "other_ad_specification"
    //     }  
    //   ]
    // },
    // {
    //   id: "other_ad_specification",
    //   message:"Please specify:",
    //   trigger: "user_other_ad_specification"
    // },
    // {
    //   id: "user_other_ad_specification",
    //   user:true,
    //   trigger: "social_media"
    // },
    // {
    //   id: "social_media",
    //   message:"Do you see other people using these on social media?",
    //   trigger: "social_media_options"
    // },
    // {
    //   id: "social_media_options",
    //   options :[
    //     {
    //       value: "yes",
    //       label: "Yes",
    //       trigger: "social_media_thoughts"
    //     },
    //     { 
    //       value: "no",
    //       label: "No",
    //       trigger: "family_vape"
    //     } 
    //   ]
    // },
    //   {
    //     id: "social_media_thoughts",
    //     message:"What are your thoughts when you see this?",
    //     trigger: "social_media_thoughts_options"
    //   },
    //   {
    //         id: "social_media_thoughts_options",
    //         options :[
    //           {
    //             value: "increases my cravings",
    //             label: "Increases my cravings",
    //             trigger: "family_vape"
    //           },
    //           { 
    //             value: "i want to look/be like them",
    //             label: "I want to look/be like them",
    //             trigger: "family_vape"
    //           },
    //           { 
    //             value: "makes me want to quit vaping",
    //             label: "Makes me want to quit vaping",
    //             trigger: "family_vape"
    //           }

    //         ]
    //       },
    //       {
    //         id: "family_vape",
    //         message:"Do any of you family members or people you live with vape or smoke? ",
    //         trigger: "family_vape_options"
    //       },
    //       {
    //         id: "family_vape_options",
    //         options :[
    //           {
    //             value: "yes",
    //             label: "Yes",
    //             trigger: "who_vapes"
    //           },
    //           { 
    //             value: "no",
    //             label: "No",
    //             trigger: "friend_vape"
    //           }
    //         ]
    //       },
    //     {
    //         id: "who_vapes",
    //         message:"Who vapes/smokes in your household?",
    //         trigger: "who_vapes_option"
    //       },

    //       {
    //               id: "who_vapes_option",
    //               options :[
    //                 {
    //                   value: "parents",
    //                   label: "Parents",
    //                   trigger: "friend_vape"
    //                 },
    //                 { 
    //                   value: "siblings",
    //                   label: "Siblings",
    //                   trigger: "friend_vape"
    //                 },
    //                 { 
    //                   value: "other family members",
    //                   label: "Other family members",
    //                   trigger: "friend_vape"
    //                 }

    //               ]
    //        },
    //             {
    //               id: "friend_vape",
    //               message:"Do any of your friends vape? ",
    //               trigger: "friend_vape_option"
    //             },

    //             {
    //               id: "friend_vape_option",
    //               options :[
    //                 {
    //                   value: "Yes, my best friend vapes",
    //                   label: "Yes, my best friend vapes",
    //                   trigger: "first_try_e_cigarette"
    //                 },
    //                 { 
    //                   value: "yes, some people I know from school smoke",
    //                   label: "Yes, some people I know from school smoke",
    //                   trigger: "friend_vape_product"
    //                 },
    //                 { 
    //                   value: "no",
    //                   label: "No",
    //                   trigger: "first_try_e_cigarette"
    //                 }
    //                ]
    //        },
           
    //        {
    //         id: "friend_vape_product",
    //         message:"Did they provide you with access to vaping products?",
    //         trigger: "friend_vape_product_option"
    //       },
    //       {
    //         id: "friend_vape_product_option",
    //         options :[
    //           {
    //             value: "yes",
    //             label: "Yes",
    //             trigger: "first_try_e_cigarette"
    //           },
    //           { 
    //             value: "no",
    //             label: "No",
    //             trigger: "first_try_e_cigarette"
    //           }
    //          ]
    //  },
    //  {
    //   id: "first_try_e_cigarette",
    //   message:"Why did you first try an e-cigarette?",
    //   trigger: "first_try_e_cigarette_option"
    // },
    // {
    //   id: "first_try_e_cigarette_option",
    //   options :[
    //     {
    //       value: "can use it anywhere ",
    //       label: "Can use it anywhere ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     { 
    //       value: "appealing flavors ",
    //       label: "Appealing flavors",
    //       trigger: "reasons_for_vaping"
    //     },
    //     {
    //       value: "low cost ",
    //       label: "Low cost",
    //       trigger: "reasons_for_vaping"
    //     },
    //     { 
    //       value: "doesn’t smell bad ",
    //       label: "Doesn’t smell bad ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     {
    //       value: "can hide it from adults ",
    //       label: "Can hide it from adults ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     { 
    //       value: "curiosity",
    //       label: "Curiosity ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     {
    //       value: "my friends use it ",
    //       label: "My friends use it ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     { 
    //       value: "my parents/family use it ",
    //       label: "My parents/family use it ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     {
    //       value: "to quit smoking cigarettes ",
    //       label: "To quit smoking cigarettes ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     { 
    //       value: "it is healthier than cigarettes ",
    //       label: "It is healthier than cigarettes ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     {
    //       value: "it is cool ",
    //       label: "It is cool ",
    //       trigger: "reasons_for_vaping"
    //     },
    //     { 
    //       value: "to manage weight",
    //       label: "To manage weight",
    //       trigger: "reasons_for_vaping"
    //     },
    //     {
    //       value: "to manage mental health concerns",
    //       label: "To manage mental health concerns",
    //       trigger: "reasons_for_vaping"
    //     },
    //     { 
    //       value: "other",
    //       label: "Other",
    //       trigger: "other_first_try_e_cigarette_option"
    //     }
    //    ]
    // },
    // {
    //   id: "other_first_try_e_cigarette_option",
    //   user:true,
    //   trigger: "reasons_for_vaping"
    // },
    // {
    //   id: "reasons_for_vaping",
    //   message:"People have different reasons for vaping- what would you say is the most common reason you vape?",
    //   trigger: "reasons_for_vaping_options"
    // },
    // {
    //   id: "reasons_for_vaping_options",
    //   options :[
    //     {
    //       value: "they taste good and I enjoy the experience",
    //       label: "They taste good and I enjoy the experience",
    //       trigger: "taste_good_questions"
    //     },
    //     { 
    //       value: "to influence my weight/shape or eating ",
    //       label: "To influence my weight/shape or eating ",
    //       trigger: "influence_questions"
    //     },
    //     { 
    //       value: "to help me calm down or if I am in a low mood ",
    //       label: "To help me calm down or if I am in a low mood ",
    //       trigger: "calm_down_questions"
    //     }]
    //  },
    //  {
    //   id: "taste_good_questions",
    //   message:"It sounds like the experience and taste of vaping is important to you. Do you identify with any of these particular statements? (E-)cigarettes taste good.(1 Completely Unlikely- 9 Completely Likely)",
    //   trigger: "taste_good_questions_options"
    // },
    // {
    //   id: "taste_good_questions_options",
    //   options :[
    //     {
    //       value: "(E-)cigarettes taste good",
    //       label: "(E-)cigarettes taste good",
    //       trigger: "taste-option-level"
    //     },
    //     { 
    //       value: "I enjoy the taste sensations while smoking/vaping ",
    //       label: "I enjoy the taste sensations while smoking/vaping ",
    //       trigger: "taste-option-level"
    //     },
    //     { 
    //       value: "When I smoke/vape the taste is pleasant",
    //       label: "When I smoke/vape the taste is pleasant",
    //       trigger: "taste-option-level"
    //     },
    //     { 
    //       value: "I will enjoy the flavor of an (E-)cigarette",
    //       label: "I will enjoy the flavor of an (E-)cigarette",
    //       trigger: "taste-option-level"
    //     },
    //     { 
    //       value: "I will enjoy feeling a (E-)cigarette on my tongue and lips",
    //       label: "I will enjoy feeling a (E-)cigarette on my tongue and lips",
    //       trigger: "taste-option-level"
    //     }
    //   ]
    //  },
    //  {
    //   id: "taste-option-level",
    //   options :[
    //     {
    //       value: "1",
    //       label: "1",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "2",
    //       label: "2",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "3",
    //       label: "3",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "4",
    //       label: "4",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "5",
    //       label: "5",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "6",
    //       label: "6",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "7",
    //       label: "7",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "8",
    //       label: "8",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "9",
    //       label: "9",
    //       trigger: "GAD/PHQ"
    //     },
        
    //   ]
    // },
    // {
    //   id: "gender",
    //   message: "What is your gender identity?",
    //   trigger: "gender-specification"
    // }, 
    // {
    //   id: "gender-specification",
    //   options :[
    //     {
    //       value: "man",
    //       label: "Man",
    //       trigger: "gender_pronouns"
    //     },
    //     { 
    //       value: "women",
    //       label: "Women",
    //       trigger: "gender_pronouns"
    //     },
    //     {
    //       value: "trans_man",
    //       label: "Trans man",
    //       trigger: "gender_pronouns"
    //     },
    //     { 
    //       value: "trans_women",
    //       label: "Trans women",
    //       trigger: "gender_pronouns"
    //     },
    //     {
    //       value: "genderqueer",
    //       label: "Genderqueer/ Gender non-conforming",
    //       trigger: "gender_pronouns"
    //     },
    //     { 
    //       value: "self_identity",
    //       label: "Self-identity",
    //       trigger: "self_identity_specification"
    //     }
    //   ]
    // },
    //  {
    //   id: "influence_questions",
    //   message:"It sounds like you feel as though vaping can help to control your appetite. Do you identify with any of these particular statements? (1 Completely Unlikely- 9 Completely Likely)",
    //   trigger: "influence_questions_options"
    // },
    // {
    //   id: "influence_questions_options",
    //   options :[
    //     {
    //       value: "Smoking/Vaping controls my appetite",
    //       label: "Smoking/Vaping controls my appetite",
    //       trigger: "influence_options_level"
    //     },
    //     { 
    //       value: "E-cigarettes keep me from overeating",
    //       label: "E-cigarettes keep me from overeating ",
    //       trigger: "influence_options_level"
    //     },
    //     { 
    //       value: "Vaping helps me control my weight",
    //       label: "Vaping helps me control my weight",
    //       trigger: "influence_options_level"
    //     },
    //     { 
    //       value: "E-cigarettes keep me from eating more than I should",
    //       label: "E-cigarettes keep me from eating more than I should",
    //       trigger: "influence_options_level"
    //     },
    //     { 
    //       value: "Vaping keeps my weight down",
    //       label: "Vaping keeps my weight down",
    //       trigger: "influence_options_level"
    //     }]
    //  },
    //  {
    //   id: "influence_options_level",
    //   options :[
    //     {
    //       value: "1",
    //       label: "1",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "2",
    //       label: "2",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "3",
    //       label: "3",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "4",
    //       label: "4",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "5",
    //       label: "5",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "6",
    //       label: "6",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "7",
    //       label: "7",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "8",
    //       label: "8",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "9",
    //       label: "9",
    //       trigger: "GAD/PHQ"
    //     },
        
    //   ]
    // },

    //  {
    //   id: "calm_down_questions",
    //   message:"It sounds like you feel as though vaping can help to reduce your anxiety, anger, or low mood. Do you identify with any of these particular statements?",
    //   trigger: "calm_down_questions_options"
    // },
    // {
    //   id: "calm_down_questions_options",
    //   options :[
    //     {
    //       value: "(E-)cigarettes help me deal with anxiety or worry",
    //       label: "(E-)cigarettes help me deal with anxiety or worry",
    //       trigger: "calm_down_options_level"
    //     },
    //     { 
    //       value: "Smoking/Vaping helps me deal with depression",
    //       label: "Smoking/Vaping helps me deal with depression",
    //       trigger: "calm_down_options_level"
    //     },
    //     { 
    //       value: "E-cigarettes help me deal with anger",
    //       label: "E-cigarettes help me deal with anger",
    //       trigger: "calm_down_options_level"
    //     },
    //     { 
    //       value: "(E-)Cigarettes help me reduce or handle tension",
    //       label: "(E-)Cigarettes help me reduce or handle tension",
    //       trigger: "calm_down_options_level"
    //     },
    //     { 
    //       value: "When I’m upset with someone, an (E-)cigarette helps me cope",
    //       label: "When I’m upset with someone, an (E-)cigarette helps me cope",
    //       trigger: "calm_down_options_level"
    //     },
    //     { 
    //       value: "Smoking/Vaping calms me down when I feel nervous",
    //       label: "Smoking/Vaping calms me down when I feel nervous",
    //       trigger: "calm_down_options_level"
    //     },
    //     { 
    //       value: "When I’m angry an (E-)cigarette can calm me down",
    //       label: "When I’m angry an (E-)cigarette can calm me down",
    //       trigger: "calm_down_options_level"
    //     }

    //   ]
    //  },
    //  {
    //   id: "calm_down_options_level",
    //   options :[
    //     {
    //       value: "1",
    //       label: "1",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "2",
    //       label: "2",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "3",
    //       label: "3",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "4",
    //       label: "4",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "5",
    //       label: "5",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "6",
    //       label: "6",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "7",
    //       label: "7",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "8",
    //       label: "8",
    //       trigger: "GAD/PHQ"
    //     },
    //     { 
    //       value: "9",
    //       label: "9",
    //       trigger: "GAD/PHQ"
    //     },
        
    //   ]
    // },

    //  {
    //   id: "GAD/PHQ",
    //   message:"Wow, it looks like reducing stress and improving your mood could be a large part of your motivation to vape. Have any of these been the case for your in the last 2 weeks?",
    //   trigger: "GAD/PHQ_options"
    // },
    // {
    //   id: "GAD/PHQ_options",
    //   options :[
    //     {
    //       value: "GAD1- Feeling nervous, anxious, or on edge  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       label: "GAD1- Feeling nervous, anxious, or on edge  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       trigger: "GAD1/PHQ1_options"
    //     },
    //     { 
    //       value: "GAD2- Not being able to stop or control worrying  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       label: "GAD2- Not being able to stop or control worrying  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       trigger: "GAD1/PHQ1_options"
    //     },
    //     { 
    //       value: "PHQ1- Little interest or pleasure in doing things  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       label: "PHQ1- Little interest or pleasure in doing things  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       trigger: "GAD1/PHQ1_options"
    //     },
    //     { 
    //       value: "PHQ2- Feeling down, depressed, hopeless  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       label: "PHQ2- Feeling down, depressed, hopeless  (0=not at all, 1=several days, 2=more than half the days, 3=nearly every day => severity levels)",
    //       trigger: "GAD1/PHQ1_options"
    //     }
    //   ]
    //  },
    //  {
    //   id: "GAD1/PHQ1_options",
    //   options :[
    //     {
    //       value: "0",
    //       label: "0",
    //       trigger: "health_risk"
    //     },
    //     { 
    //       value: "1",
    //       label: "1",
    //       trigger: "health_risk"
    //     },
    //     { 
    //       value: "2",
    //       label: "2",
    //       trigger: "health_risk"
    //     },
    //     { 
    //       value: "3",
    //       label: "3",
    //       trigger: "health_risk"
    //     }
    //   ]
    //  },
    //  {
    //   id: "health_risk",
    //   message:"While you noted some reasons for vaping, there are also health risks that can be associated with this. Do you agree with any of these statements below?",
    //   trigger: "health_risk_options"
    // },
    // {
    //   id: "health_risk_options",
    //   options :[
    //     {
    //       value: "By smoking/vaping I risk heart disease and lung cancer",
    //       label: "By smoking/vaping I risk heart disease and lung cancer",
    //       trigger: "cravings_vape"
    //     },
    //     { 
    //       value: "The more I smoke/vape, the more I risk my health",
    //       label: "The more I smoke/vape, the more I risk my health",
    //       trigger: "cravings_vape"
    //     },
    //     { 
    //       value: "Smoking/Vaping is hazardous to my health",
    //       label: "Smoking/Vaping is hazardous to my health",
    //       trigger: "cravings_vape"
    //     },
    //     { 
    //       value: "Smoking/Vaping is taking years of my life",
    //       label: "Smoking/Vaping is taking years of my life",
    //       trigger: "cravings_vape"
    //     }
    //   ]
    //  },
    //  {
    //   id: "cravings_vape",
    //   message:"What is your current level of cravings/urge to vape?",
    //   trigger: "cravings_vape_options"
    // },
    // {
    //   id: "cravings_vape_options",
    //   options :[
    //     {
    //       value: "5- I have a strong urge to vape in the next hour or so",
    //       label: "5- I have a strong urge to vape in the next hour or so",
    //       trigger: "stop_vape"
    //     },
    //     { 
    //       value: "4- I have a strong urge to vape today",
    //       label: "4- I have a strong urge to vape today",
    //       trigger: "stop_vape"
    //     },
    //     { 
    //       value: "3- I have an urge to vape, but I may be able to put this off until tomorrow",
    //       label: "3- I have an urge to vape, but I may be able to put this off until tomorrow",
    //       trigger: "stop_vape"
    //     },
    //     { 
    //       value: "2- I have an urge to vape, but I may be able to put this off for a few days",
    //       label: "2- I have an urge to vape, but I may be able to put this off for a few days",
    //       trigger: "stop_vape"
    //     },
    //     { 
    //       value: "1- I have an urge to vape, but I feel as though I can manage this",
    //       label: "1- I have an urge to vape, but I feel as though I can manage this",
    //       trigger: "stop_vape"
    //     },
    //     { 
    //       value: "0- I do not have an urge to vape, I vaped recently",
    //       label: "0- I do not have an urge to vape, I vaped recently",
    //       trigger: "stop_vape"
    //     },
    //     { 
    //       value: "0- I do not have an urge to vape, I am far along in my quitting process",
    //       label: "0- I do not have an urge to vape, I am far along in my quitting process",
    //       trigger: "stop_vape"
    //     }
    //   ]
    //  },
    //  {
    //   id: "stop_vape",
    //   message:"What are some of the reasons you may want to stop vaping?",
    //   trigger: "stop_vape_options"
    // },
    // {
    //   id: "stop_vape_options",
    //   options :[
    //     {
    //       value: "Health risks",
    //       label: "Health risks",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "Cost",
    //       label: "Cost",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "Parents/family disapprove",
    //       label: "Parents/family disapprove",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "Friends disapprove ",
    //       label: "Friends disapprove ",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "Don’t like the taste ",
    //       label: "Don’t like the taste ",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "Not as satisfying as cigarettes ",
    //       label: "Not as satisfying as cigarettes ",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "It is addictive",
    //       label: "It is addictive",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "It is not cool",
    //       label: "It is not cool",
    //       trigger: "barriers_quitting"
    //     },
    //     { 
    //       value: "other",
    //       label: "Other",
    //       trigger: "other_barriers_quitting"
    //     }
    //   ]
    //  },
    //  {
    //   id: "other_barriers_quitting",
    //   user:true,
    //   trigger: "barriers_quitting"
    // },
    // {
    //   id: "barriers_quitting",
    //   message:"What are some barriers you may have to quitting?",
    //   trigger: "barriers_quitting_ans"
    // },
    // {
    //   id: "barriers_quitting_ans",
    //   user:true,
    //   trigger: "support_quitting"
    // },
    // {
    //   id: "support_quitting",
    //   message:"Who are some of your supports that could help you with quitting?",
    //   trigger: "support_quitting_ans"
    // },
    // {
    //   id: "support_quitting_ans",
    //   user:true,
    //   trigger: "motivation_quitting"
    // },
    // {
    //   id: "motivation_quitting",
    //   message:"How would you rate your current motivation for quitting vaping on a scale of 1-5??",
    //   trigger: "motivation_quitting_ans"
    // },
    // {
    //   id: "motivation_quitting_ans",
    //   options :[
    //     {
    //       value: "I don’t have much motivation at all to quit",
    //       label: "I don’t have much motivation at all to quit",
    //       trigger: "motivation_quitting_ans_options"
    //     },
    //     { 
    //       value: "I would like to quit, but do not have confidence that I can",
    //       label: "I would like to quit, but do not have confidence that I can",
    //       trigger: "motivation_quitting_ans_options"
    //     },
    //     { 
    //       value: "I would really like to quit, and think I could with a high level of support",
    //       label: "I would really like to quit, and think I could with a high level of support",
    //       trigger: "motivation_quitting_ans_options"
    //     },
    //     { 
    //       value: "I would really like to quit, and think I could with some support",
    //       label: "I would really like to quit, and think I could with some support",
    //       trigger: "motivation_quitting_ans_options"
    //     },
    //     { 
    //       value: "I have already started to quit or decided to quit today and could use help staying on this path",
    //       label: "I have already started to quit or decided to quit today and could use help staying on this path",
    //       trigger: "motivation_quitting_ans_options"
    //     }

    //   ]},
    //   {
    //     id: "motivation_quitting_ans_options",
    //     options :[
    //       {
    //         value: "1",
    //         label: "1",
    //         trigger: "Done"
    //       },
    //       { 
    //         value: "2",
    //         label: "2",
    //         trigger: "Done"
    //       },
    //       { 
    //         value: "3",
    //         label: "3",
    //         trigger: "Done"
    //       },
    //       { 
    //         value: "4",
    //         label: "4",
    //         trigger: "Done"
    //       },
    //       { 
    //         value: "5",
    //         label: "5",
    //         trigger: "Done"
    //       }
    //     ]
    //    },
     {
         id: "Done",
         message:"For credible resources for people who vape or some, "+
         "I will recommend these websites from the US Department of Health and Human Services, NIH, CDC, and FDA "+ 
         " 	•	Resources for quitting vaping   "+
         " https://teen.smokefree.gov/quit-vaping"+
         " https://www.cdc.gov/tobacco/basic_information/e-cigarettes/index.htm"+
    
         " 	•	Resources for quitting smoking"+
         " https://smokefree.gov/ "+
         " https://www.cdc.gov/tobacco/quit_smoking/how_to_quit/index.htm" +
         " https://everytrycounts.betobaccofree.hhs.gov/",
         trigger: "End"
     },
     {
       id: "End",
       component: <Post />,
       asMessage: true,

     }
    ];
  return <ChatBot floating={false}
                  steps={steps} 
                  width={100}
                  height={1000}
                  // useAvatar={{src: 'http://howtobuyaurl.com/wp-content/uploads/2019/12/exampleOfAUrl.png'.png}}
                  // botAvatar= {{ src: 'http://howtobuyaurl.com/wp-content/uploads/2019/12/exampleOfAUrl'.png}}
                  headerTitle="Welcome to Chat Bot"
                  speechSynthesis={{ enable: false, lang: 'en' }
                }
                  
                 />;
}
export default Chatbot;