import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebaseConfig'

class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { staring, USR, language, english } = steps;

    this.state =  { staring, USR, language, english }; 
  }


  componentDidMount() {
    const userObject = {
      starting:this.state.starting.value,
      USR:this.state.USR.value,
      language:this.state.language.value,
      english:this.state.english.value,
    };

    const db = firebase.firestore();
 
       // eslint-disable-next-line 
        db.collection("bot").add({
            starting_message:userObject.starting,
            USR: userObject.USR,
            time_date: firebase.firestore.FieldValue.serverTimestamp(),
            language:userObject.language,
            english:userObject.english
   
 
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
    console.log(userObject)
  }

  render() {
    return (
      <div>Thank you! Your data was submitted successfully!</div>
      );
    }
  };


  export default Post;