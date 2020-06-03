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

const Login: React.FC = () => {
   const [username, setUsername] = useState<any>('');
   const [password, setPassword] = useState('');
   const [usernameAlert, setUsernameAlert] = useState('');

   function validateUsername() {
      if (username.length < 6) {
         setUsernameAlert('Username should at least be 6 characters.');
      } else {
         setUsernameAlert('');
      }
   }

   function handleSubmit() {

   }


   return (
      <IonPage>

         <IonContent className="ion-padding">

            <div className="logo ion-text-center logo">Kart-Ton</div>

            <form action="/home">
               <IonItem class="ion-margin-top" >
                  <IonLabel position="stacked">Username</IonLabel>
                  <small>{usernameAlert}</small>
                  <IonInput
                     onIonChange={e => setUsername(e.detail.value)}
                     onIonBlur={validateUsername}
                  ></IonInput>
               </IonItem>

               <IonItem class="ion-margin-top">
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput type="password"></IonInput>
               </IonItem>

               <IonButton expand="block" className="login-btn">Login</IonButton>

            </form>
         </IonContent>
      </IonPage >
   );
};

export default Login;
