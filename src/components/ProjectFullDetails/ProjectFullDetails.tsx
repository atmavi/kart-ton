import React from 'react';
import { } from '@ionic/react';

import './ProjectFullDetails.css';
import { IProject, IViewedProject } from '../../pages/Projects/Projects';

interface IFullProject {
   viewedProject: IViewedProject
}

const ProjectFullDetails: React.FC<IFullProject> = props => {
   console.log(props);
   return (
      // <h1 className={`${props.isOpen && 'ion-hide'} container`}>test</h1>
      <h1>test</h1>
   );
};

export default ProjectFullDetails;
