import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebaseConfig'

class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { USR, english, smart_phone_options, using_times, 
           nicotine_confirmation, nico_concentration, 
           vaping_product_names, user_vaping_mod_specify, user_vaping_device_specify, flavored_juice, 
           flavors_specification, smoked_cigarettes_options, vaped_substace_option} = steps;
    

    this.state =  { USR, english, smart_phone_options,using_times, nicotine_confirmation, 
                    nico_concentration, vaping_product_names, user_vaping_mod_specify, user_vaping_device_specify, 
                    flavored_juice, flavors_specification, smoked_cigarettes_options, vaped_substace_option }; 

  }

  
  componentDidMount() {
      const userObject = {
      USR:this.state.USR.value,
      english:this.state.english.value,
      smart_phone_usage:this.state.smart_phone_options.value,
      cigarette_vape_taking_frequency:this.state.using_times.value,
      nicotine_taking_confirmation:this.state.nicotine_confirmation.value,
      nicotine_daily_taking_concentration:this.state.nico_concentration.value,
      vaping_product_names:this.state.vaping_product_names.value,
      other_stealth_vaping_mod_name:this.state.user_vaping_mod_specify.user,
      other_standard_vaping_device_name:this.state.user_vaping_device_specify.user,
      flavored_e_juice_juice_concentrates:this.state.flavored_juice.value,
      e_juice_flavors_specification:this.state.flavors_specification.user,
      smoked_cigarettes_confirmation:this.state.smoked_cigarettes_options.value,
      vaped_substace_confirmation:this.state.vaped_substace_option.value



    };

    firebase.firestore().collection("bot").add({
        US_resident: userObject.USR,
        time_date: firebase.firestore.FieldValue.serverTimestamp(),
        english_language: userObject.english,
        smart_phone_usage: userObject.smart_phone_usage,
        cigarette_vape_taking_frequency:userObject.using_times.value,
        nicotine_taking_confirmation:userObject.nicotine_confirmation.value,
        nicotine_daily_taking_concentration:userObject.nico_concentration.value,
        vaping_product_names:userObject.vaping_product_names.value,
        other_stealth_vaping_mod_name:userObject.user_vaping_mod_specify.user,
        other_standard_vaping_device_name:userObject.user_vaping_device_specify.user,
        flavored_e_juice_juice_concentrates:userObject.flavored_juice.value,
        e_juice_flavors_specification:userObject.flavors_specification.user,
        smoked_cigarettes_confirmation:userObject.smoked_cigarettes_options.value,
        vaped_substace_confirmation:userObject.vaped_substace_option.value







    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });


    axios.post(`/api`, {userObject})
    .then(res => {
      console.log(res.data)
    }).catch(function(error) {
      console.log(error);
    });
    
    // console.log(userObject)
  }

  render() {
    return (
      <div>Thank you! Your data was submitted successfully!</div>
      );
    }
  };


  export default Post;