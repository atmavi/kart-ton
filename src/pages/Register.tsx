import {
   IonContent,
   IonPage,
   IonItem,
   IonLabel,
   IonInput,
   IonButton
} from '@ionic/react';
import React from 'react';
import './Login.css';

const Register: React.FC = () => {
   return (
      <IonPage>

         <IonContent className="ion-padding">

            <div className="logo ion-text-center logo">Kart-Ton</div>
            <form action="">
               <IonItem class="ion-margin-top" >
                  <IonLabel position="stacked">Username</IonLabel>
                  <IonInput></IonInput>
               </IonItem>

               <IonItem class="ion-margin-top">
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput type="password"></IonInput>
               </IonItem>

               <IonItem class="ion-margin-top">
                  <IonLabel position="stacked">Re-password</IonLabel>
                  <IonInput type="password"></IonInput>
               </IonItem>

               <a href="/login">
                  <IonButton expand="block" className="login-btn">Register</IonButton>
               </a>
            </form>
         </IonContent>
      </IonPage>
   );
};

export default Register;
