import {
   IonIcon,
   IonHeader,
   IonToolbar,
   IonTitle,
   IonContent,
   IonButtons,
   IonPage,
   IonButton,
} from '@ionic/react';
import { person, logOutOutline } from 'ionicons/icons';
import React, { useState } from 'react';

import Project from '../../components/Project/Project';
import './Projects.css';

export interface IProject {
   title: string,
   start: any,
   end: any,
   avatars?: Array<string>,
   budget?: number
}



const Projects: React.FC = () => {
   const avatars = [
      'https://www.photosforclass.com/download/pixabay-310819?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e1d54b4b5bb108f5d084609620367d1c3ed9e04e507440742d7fd5934fc3_1280.png&user=Clker-Free-Vector-Images',
      'https://pixabay.com/get/57e5d3464256b10ff3d8992ccf2934771438dbf852547848772b7ad0954b_340.png',
      'https://pixabay.com/get/55e1d54b4a55b10ff3d8992ccf2934771438dbf852547848772b7ad0954b_340.png'
   ];

   const [projects, setProjects] = useState<IProject[]>(
      [
         {
            title: 'Project 1',
            start: 'Jun 2020',
            end: 'Dec 2020',
            avatars: avatars,
            budget: 2000000
         },
         {
            title: 'Project 2',
            start: 'Jan 2020',
            end: 'Sep 2021',
            avatars: avatars
         },
         {
            title: 'Project 3',
            start: 'Feb 1990',
            end: 'Nov 2020',
            avatars: avatars
         }
      ]
   );

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="primary">
                  <IonButton onClick={() => { }}>
                     <IonIcon slot="icon-only" icon={person} />
                  </IonButton>
               </IonButtons>
               <IonTitle>Kart-Ton</IonTitle>
               <IonButtons slot="end">
                  <IonButton onClick={() => { }}>
                     <IonIcon slot="icon-only" icon={logOutOutline} />
                  </IonButton>
               </IonButtons>
            </IonToolbar>
         </IonHeader>

         <IonContent className="ion-padding">
            <h2>Projects:</h2>

            {projects.map((proj: IProject, i) => (
               <Project project={proj} key={i}></Project>
            ))}

         </IonContent>
      </IonPage>
   );
};

export default Projects;