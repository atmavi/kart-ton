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

const Login: React.FC = () => {
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
                  <IonInput></IonInput>
               </IonItem>


               <IonButton expand="block" className="login-btn">Login</IonButton>
            </form>
         </IonContent>
      </IonPage>
   );
};

export default Login;
