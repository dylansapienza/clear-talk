import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { add, arrowDown, addCircle, starOutline, search } from "ionicons/icons";
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
  IonSlider,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonAvatar,
  IonModal,
  IonFab,
  IonFabButton,
  IonProgressBar,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonVirtualScroll,
  IonItemDivider,
  IonThumbnail,
  IonTextarea,
  IonRange,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";
import ChatMessage from "./ChatMessage";

function ChatItem(props) {
  const [isLoading, setLoading] = useState(true);
  const [showSongs, setShowSongs] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [trackName, setTrackName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [fabButton, setFabButton] = useState(<div></div>);
  const [showSongSearch, setSongSearch] = useState(false);
  const [nameSearch, setNameSearch] = useState("");
  const [artistSearch, setArtistSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showChat, setShowChat] = useState(false);

  function openChat() {
    setShowSongs(true);
    console.log(props.chat);
    setShowChat(true);
    // var user_token;
    // var data;
    //For Security if Coming from discovery page, dont get other users token
    //This is a bug
    //Discovery is remaining set after user navigates away from discovery.
    //Should set discovery to N when on localhost:3000/playlists?
    // if (Cookies.get("discovery") === "y") {
    //   var username = props.playlist.p_spotify_id;
    //   data = { username: username, playlist_id: props.playlist.p_id };
    // } else {
    // user_token = Cookies.get("key");
    // data = { user_token: user_token, playlist_id: props.playlist.p_id };
    // //}
    // axios
    //   .post("/api/getTracks", data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data.trackArray.items);
    //     setTracks(response.data.trackArray.items);
    //     console.log(tracks);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <>
      <IonModal isOpen={showChat} cssClass="my-custom-class">
        <IonCard>
          <IonCardContent>
            <IonCardTitle>{props.chat.friend}</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardContent>
          {isLoading ? (
          <IonContent>
            <IonItem>
              <IonHeader>Getting Tracks...</IonHeader>
              <IonProgressBar type="indeterminate"></IonProgressBar>
            </IonItem>
          </IonContent>
        ) : (
          <IonContent>
            <IonList>
              {props.chat.messages.map((message) => (
                <ChatMessage message={message}/>
              ))}
            </IonList>
          </IonContent>
        </IonCard>
        <IonFab horizontal="end" vertical="bottom">
          <IonFabButton color="medium" onClick={() => setShowChat(false)}>
            <IonIcon icon={arrowDown} />
          </IonFabButton>
        </IonFab>
    </IonModal>
      <IonItem
        button
        onClick={() => {
          openChat();
        }}
      >
        <IonLabel>
          <h2>{props.chat.friend}</h2>
          <h3>{props.chat.messages[0].text}</h3>
        </IonLabel>
      </IonItem>
    </>
  );
}

export default ChatItem;