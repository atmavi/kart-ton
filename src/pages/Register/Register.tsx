import React, { useState } from 'react';
import {
   IonContent,
   IonPage,
   IonItem,
   IonLabel,
   IonInput,
   IonButton
} from '@ionic/react';
import './Register.css';

import { checkStrLength, doesPasswordsMatch } from '../../hooks/validateForm';

const Register: React.FC = () => {
   const [username, setUsername] = useState<any>('');
   const [pass1, setPass1] = useState<any>('');
   const [pass2, setPass2] = useState<any>('');
   const [usernameAlert, setUsernameAlert] = useState('');
   const [userPassAlert, setPassAlert] = useState<any>(null);

   function validateUsername() {
      let uAlert = checkStrLength(username);
      setUsernameAlert(uAlert);
   }

   function validateBothPass() {
      setPassAlert(doesPasswordsMatch(pass1, pass2));
      console.log(userPassAlert)
   }

   return (
      <IonPage>

         <IonContent className="ion-padding">

            <div className="logo ion-text-center logo">Kart-Ton</div>
            <form action="/login">
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
                     onIonChange={e => setPass1(e.detail.value)}
                  ></IonInput>
               </IonItem>

               <IonItem class="ion-margin-top">
                  <IonLabel position="stacked">Re-password</IonLabel>
                  <IonInput
                     required
                     type="password"
                     onIonChange={e => setPass2(e.detail.value)}
                     onIonBlur={validateBothPass}
                  ></IonInput>
               </IonItem>

               <small>{userPassAlert ? "Passwords don't match" : ''}</small>

               <IonButton expand="block" className="login-btn">Register</IonButton>

            </form>
         </IonContent>
      </IonPage>
   );
};

export default Register;
