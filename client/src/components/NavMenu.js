import React from "react";
import Cookies from "js-cookie";
import ReactDOM from "react-dom";
import {
  Redirect,
  BrowserRouter,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import {
  add,
  arrowDown,
  addCircle,
  starOutline,
  musicalNotes,
  people,
  search,
  reader,
  logOutOutline,
  chatbubbleEllipses
} from "ionicons/icons";
import {
  IonApp,
  IonHeader,
  IonTitle,
  IonCard,
  IonToolbar,
  IonCardContent,
  IonCardTitle,
  IonPage,
  IonContent,
  IonCardHeader,
  IonCardSubtitle,
  IonButton,
  IonText,
  IonMenu,
  IonList,
  IonItem,
  menuController,
  IonRouterOutlet,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonFooter,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";

function NavMenu() {
  function logout() {
    Cookies.set("key", "");
    window.location.href = "/";
  }

  return (
    <>
      <IonMenu contentId="menu" side="start" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem href="/chats">
              <IonIcon icon={chatbubbleEllipses}></IonIcon>
              <IonLabel>Chats</IonLabel>
            </IonItem>
            <IonItem href="/friends">
              <IonIcon icon={people}></IonIcon>
              <IonLabel>Friends</IonLabel>
            </IonItem>
            <IonItem href="/users">
              <IonIcon icon={search}></IonIcon>
              <IonLabel>Discovery</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
        <IonFooter>
          <IonButton color="tertiary" expand="block" onClick={() => logout()}>
            <IonIcon icon={logOutOutline} />
            &nbsp; Logout
          </IonButton>
        </IonFooter>
      </IonMenu>
      <IonRouterOutlet id="menu"></IonRouterOutlet>
    </>
  );
}

export default NavMenu;