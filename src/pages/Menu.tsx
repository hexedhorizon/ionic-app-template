import { IonButton, IonContent, IonHeader, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {homeOutline,newspaperOutline,logOutOutline} from 'ionicons/icons'
import Page1 from './Page1';
import Page2 from './Page2';
import { Redirect, Route } from 'react-router-dom';
import Details from './Details';

const Menu: React.FC = () => {
  const paths = [
    {
      name:'Home',
      url:'/app/page1',
      icon:homeOutline
    },
    {
      name:'Hehe',
      url:'/app/page2',
      icon:newspaperOutline
    }
  ]
  return (
    <IonPage>
    <IonSplitPane contentId="main">
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {paths.map((item, index) => (
            <IonMenuToggle key={index}>
              <IonItem routerLink={item.url} routerDirection="forward">
                {item.name}
              </IonItem>
            </IonMenuToggle>
          ))}
          <IonButton routerLink="/" routerDirection="back" expand="full"> Logout
            
          </IonButton>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/app/page1" component={Page1} />
        <Route exact path="/app/page1/details" component={Details} />
        <Route exact path="/app/page2" component={Page2} />
        <Route exact path="/app">
          <Redirect to="/app/page1" />
        </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  </IonPage>
  );
};

export default Menu;
