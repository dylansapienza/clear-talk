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

function Dashboard() {

  const [showModal, setShowModal] = useState(false);
  const [playlist_name, setPlaylist_Name] = useState();
  const [playlist_description, setPlaylist_Description] = useState();
  const [isLoading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isWaiting, setWaiting] = useState(true);
  const [MyPlaylists, setPlaylists] = useState([]);
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
        console.log(response);
        //setPlaylists(response.data);
        //console.log(MyPlaylist);
        //setWaiting(false);
      })
      .catch((error) => {
        console.log(error);
        //window.location.reload();
      });
  }

  function createPlaylist(friend) {
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
              <IonCardTitle>Create A Playlist</IonCardTitle>
              <IonList inset="true">
                <IonItem>
                  <IonInput
                    value={playlist_name}
                    placeholder="Playlist Name"
                    required="true"
                    onIonChange={(e) => setPlaylist_Name(e.detail.value)}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput
                    value={playlist_description}
                    required="true"
                    placeholder="Description"
                    onIonChange={(e) => setPlaylist_Description(e.detail.value)}
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
                    createPlaylist(playlist_name, playlist_description)
                  }
                >
                  Create Playlist
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
                <IonHeader>Loading Playlists...</IonHeader>
                <IonProgressBar type="indeterminate"></IonProgressBar>
              </IonCardContent>
            </IonCard>
          ) : (
            <>
              <IonListHeader>My Playlists</IonListHeader>
              <IonList>
                {/* {MyPlaylists.map((playlist) => (
                  <PlaylistItem playlist={playlist} />
                ))} */}
              </IonList>
              <IonListHeader>Following Playlists</IonListHeader>
              <IonList>
                {/* {FriendPlaylists.map((playlist) => (
                  <PlaylistItem playlist={playlist} />
                ))} */}
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
          message="Your Playlist Has Been Created."
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
}

export default Dashboard;