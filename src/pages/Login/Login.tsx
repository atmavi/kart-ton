import {
   IonContent,
   IonPage,
   IonItem,
   IonLabel,
   IonInput,
   IonButton
} from '@ionic/react';

import React, { useState } from 'react';

import './Login.css';

import { checkStrLength } from '../../hooks/validateForm';

const Login: React.FC = () => {
   const [username, setUsername] = useState<any>('');
   const [password, setPassword] = useState<any>('');
   const [usernameAlert, setUsernameAlert] = useState('');
   const [userPassAlert, setPassAlert] = useState('');

   function validateUsername() {
      let uAlert = checkStrLength(username);
      setUsernameAlert(uAlert);
   }

   function validatePassword() {
      let pAlert = checkStrLength(username);
      setUsernameAlert(pAlert);
   }

   function handleSubmit() {
      if (username && password) {
         alert("Login success");
      } else {
         alert("Please fill all fields.");
      }
   }


   return (
      <IonPage>

         <IonContent className="ion-padding">

            <div className="logo ion-text-center logo">Kart-Ton</div>

            <form action='/home' onSubmit={() => handleSubmit}>
               <IonItem class="ion-margin-top" >
                  <IonLabel position="stacked">Username</IonLabel>
                  <small>{usernameAlert}</small>
                  <IonInput
                     required
                     onIonChange={e => setUsername(e.detail.value)}
                     onIonBlur={validateUsername}
                  ></IonInput>
               </IonItem>

               <IonItem class="ion-margin-top">
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput
                     required
                     type="password"
                     onIonChange={e => setPassword(e.detail.value)}
                     onIonBlur={validatePassword}
                  ></IonInput>
               </IonItem>

               <IonButton expand="block" className="login-btn">Login</IonButton>

            </form>
         </IonContent>
      </IonPage >
   );
};

export default Login;
