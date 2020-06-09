import React from 'react';
import {
   IonCard,
   IonTitle,
   IonItem,
   IonLabel,
   IonButton
} from '@ionic/react';

import './Project.css';

import { IProject } from '../../pages/Projects/Projects';

interface IProjectProp {
   project: IProject
}


const Project: React.FC<IProjectProp> = props => {
   const { project } = props
   const { title, avatars, start, end } = project;
   return (
      <IonCard class="ion-padding-top ion-padding-bottom">
         <IonItem>
            <IonTitle class="ion-text-start" slot="start">{title}</IonTitle>
            <IonButton
               fill="outline"
               slot="end"
               onClick={() => console.log('clicked')}
            >View</IonButton>
         </IonItem>

         <div className="avatar-container">
            {avatars?.map((avatar, i) => (
               <img className="card-avatar" src={avatar} alt="" key={i} />
            ))}
         </div>

         <IonLabel class="ion-padding">{`${start} - ${end}`}</IonLabel>
      </IonCard>
   );
};

export default Project;
