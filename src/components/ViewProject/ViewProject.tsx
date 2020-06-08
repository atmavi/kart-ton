import React from 'react';
import {
   IonItem,
   IonLabel,
   IonInput,
   IonButton,
   IonTextarea,
   IonItemGroup,
   IonItemDivider
} from '@ionic/react';
import './ViewProject.css';

interface IViewProject {
   test: string
}

const ViewProject: React.FC<IViewProject> = props => {
   console.log(props);
   return (
      <div className="container">
         <h1>test</h1>
      </div>

   );
};

export default ViewProject;
