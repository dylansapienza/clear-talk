import React, { useEffect, useState } from "react";
import axios from "axios";
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
  IonModal,
  IonInput,
  IonFab,
  IonFabButton,
  IonProgressBar,
  IonToast,
  IonListHeader,
  IonLabel,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";
import NavMenu from "./NavMenu";
import ChatItem from "./ChatItem";

function Dashboard() {

  const [showModal, setShowModal] = useState(false);
  const [friend_username, setFriendUsername] = useState();
  const [isLoading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isWaiting, setWaiting] = useState(true);
  const [MyChats, setChats] = useState([]);
  const [FriendPlaylists, setFriendPlaylists] = useState([]);

  function checkLogin() {
    if (Cookies.get("key") === "") {
      window.location.replace("/");
    }
  }

  function getChats() {
    // Cookies.set("discovery", "n");
    var user_token = Cookies.get("key");
    var data = { user_token: user_token };
    axios
      .post("/api/getChats", data, {
        headers: {
          "Content-Type": "application/json",
        },
//        timeout: 1000 * 10,
      })
      .then((response) => {
        //console.log(response);
        console.log("CHAT INFO:")
        console.log(response.data)
        setChats(response.data);
        setWaiting(false);
        //setPlaylists(response.data);
        //console.log(MyPlaylist);
      })
      .catch((error) => {
        console.log(error);
        //window.location.reload();
      });
  }

  function createChat(friend) {
    var token = Cookies.get("key");
    var username = Cookies.get("username")
    var data = { token: token, friend: friend, username: username};
    console.log(data);
    setLoading(true);
    axios
      .post("/api/createChat", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("RESPONSE:" + JSON.stringify(response));
        setLoading(false);
        setShowModal(false);
        setShowToast(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }


  useEffect(() => {
    checkLogin();
    getChats();
  }, []);

  return (
    <IonPage>
      <NavMenu />
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start"></IonMenuButton>
          <IonTitle>{Cookies.get("key")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <IonCard>
            <IonCardContent>
              <IonCardTitle>Create A Chat</IonCardTitle>
              <IonList inset="true">
                <IonItem>
                  <IonInput
                    value={friend_username}
                    placeholder="Username"
                    required="true"
                    onIonChange={(e) => setFriendUsername(e.detail.value)}
                  ></IonInput>
                </IonItem>
              </IonList>
              {isLoading ? (
                <>
                  <IonHeader>Creating Playlist...</IonHeader>
                  <IonProgressBar type="indeterminate"></IonProgressBar>
                </>
              ) : (
                <IonButton
                  color="success"
                  expand="block"
                  onClick={() =>
                    createChat(setFriendUsername)
                  }
                >
                  Create Chat
                </IonButton>
              )}
            </IonCardContent>
          </IonCard>
          <IonFab horizontal="end" vertical="bottom">
            <IonFabButton color="medium" onClick={() => setShowModal(false)}>
              <IonIcon icon={arrowDown} />
            </IonFabButton>
          </IonFab>
        </IonModal>
        <IonCard>
          {isWaiting ? (
            <IonCard>
              <IonCardContent>
                <IonHeader>Loading Chats...</IonHeader>
                <IonProgressBar type="indeterminate"></IonProgressBar>
              </IonCardContent>
            </IonCard>
          ) : (
            <>
              <IonListHeader>My Chats</IonListHeader>
              <IonList>
                {MyChats.map((chat) => (
                  <ChatItem chat={chat} />
                ))}
              </IonList>
            </>
          )}

          <IonCardContent></IonCardContent>
        </IonCard>
        <IonFab horizontal="end" vertical="bottom">
          <IonFabButton color="success" onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonToast
          color="medium"
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Your Chat Has Been Created."
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
}

export default Dashboard;