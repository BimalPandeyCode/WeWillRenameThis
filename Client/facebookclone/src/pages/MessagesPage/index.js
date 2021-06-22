import "./index.css";
import SearchInput from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";

const MessagesPage = () => {
  return (
    <div className="MessagesPageContainer">
      <SideFriendsList />
      <SearchFriends />
      <IndividualMessages />
      <FriendsInfo />
    </div>
  );
};

const SearchFriends = () => {
  return (
    <div className="MessagesPageContainer__searchBar">
      <span className="MessagesPageContainer__searchBar__title">Chat</span>
      <div className="MessagesPageContainer__searchBar__searchBarContainer">
        <form
          className="MessagesPageContainer__searchBar__searchBarContainer__form"
          noValidate
          autoComplete="off"
        >
          <SearchInput
            className="MessagesPageContainer__searchBar__searchBarContainer__form__input"
            label="Search"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
          />
        </form>
      </div>
    </div>
  );
};

const SideFriendsList = () => {
  const EachFriend = () => {
    return (
      <div className="MessagesPageContainer__friendList__IndividualFriends">
        <div className="MessagesPageContainer__friendList__IndividualFriends__ImageContainer">
          <img
            src="https://scontent.fmaa1-4.fna.fbcdn.net/v/t1.6435-1/c17.0.100.100a/p100x100/122283142_689463975284897_6192283090834406267_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=eJacrwatUHEAX8Rb3ci&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmaa1-4.fna&tp=27&oh=e1cdc040b2f4dbbadcfb8ca37d036a26&oe=60D64FBE"
            alt=""
          />
        </div>
        <div className="MessagesPageContainer__friendList__IndividualFriends__InfoContainer">
          <p>Title is not this is</p>
          <p>Last messages. 3m</p>
        </div>
      </div>
    );
  };

  return (
    <div className="MessagesPageContainer__friendList">
      <EachFriend />
      <EachFriend />
      <EachFriend />
      <EachFriend />
      <EachFriend />
      <EachFriend />
      <EachFriend />
      <EachFriend />

      <EachFriend />
      <EachFriend />
      <EachFriend />
      <EachFriend />
      <EachFriend />
    </div>
  );
};

const IndividualMessages = () => {
  useEffect(() => {
    let element = document.getElementById(
      "MessagesPageContainer__individualMessages__messagesContainer"
    );
    element.scrollTop = element.scrollHeight;
  }, []);

  const ReceivedMessages = () => {
    return (
      <div className="MessagesPageContainer__individualMessages__messagesContainer__EachMessages">
        <div className="MessagesPageContainer__individualMessages__messagesContainer__EachMessages__imageContainer">
          <img
            src="https://scontent.fmaa1-4.fna.fbcdn.net/v/t1.6435-1/c17.0.100.100a/p100x100/122283142_689463975284897_6192283090834406267_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=eJacrwatUHEAX8Rb3ci&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmaa1-4.fna&tp=27&oh=e1cdc040b2f4dbbadcfb8ca37d036a26&oe=60D64FBE"
            alt=""
          />
        </div>
        <div className="MessagesPageContainer__individualMessages__messagesContainer__EachMessages__textContainer">
          <p>
            Messages are this kind so go f yourself this little bitch you can
            dearly go f yourself you little ignorant bitch a quic brown fox
            jumps over the lazy dog
          </p>
        </div>
      </div>
    );
  };
  const Sentmessages = () => {
    return (
      <div className="MessagesPageContainer__individualMessages__messagesContainer__EachMessagesSent">
        <div className="MessagesPageContainer__individualMessages__messagesContainer__EachMessagesSent__textContainer">
          <p>
            A quick brown fox jumps over a lazy dog bu does he? Hi I'm Michael
            and why do we fart?{" "}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="MessagesPageContainer__individualMessages">
      <div className="MessagesPageContainer__individualMessages__topBar">
        <div className="MessagesPageContainer__individualMessages__topBar__ImageContainer">
          <img
            src="https://scontent.fmaa1-4.fna.fbcdn.net/v/t1.6435-1/c17.0.100.100a/p100x100/122283142_689463975284897_6192283090834406267_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=eJacrwatUHEAX8Rb3ci&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmaa1-4.fna&tp=27&oh=e1cdc040b2f4dbbadcfb8ca37d036a26&oe=60D64FBE"
            alt=""
          />
        </div>
        <div className="MessagesPageContainer__individualMessages__topBar__personInfoContainer">
          <p>Person Name</p>
          <p>Active now</p>
        </div>
      </div>
      <div
        id="MessagesPageContainer__individualMessages__messagesContainer"
        className="MessagesPageContainer__individualMessages__messagesContainer"
      >
        <ReceivedMessages />
        <Sentmessages />
        <Sentmessages />
        <ReceivedMessages />
        <Sentmessages />
        <ReceivedMessages />
        <ReceivedMessages />
        <Sentmessages />
        <Sentmessages />
        <ReceivedMessages />
        <Sentmessages />
        <ReceivedMessages />
        <ReceivedMessages />
        {/*<p>
          Side friend lis Side friend lis Side friend lis Side friend list Side
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis Side friend lis Side friend lis Side
          friend lis Side friend list Side friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lis Side
          friend lis Side friend lis Side friend lis Side friend list Side
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis Side friend lis Side friend lis Side
          friend lis Side friend list Side friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lis Side
          friend lis Side friend lis Side friend lis Side friend list Side
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis Side friend lis Side friend lis Side
          friend lis Side friend list Side friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lis Side
          friend lis Side friend lis Side friend lis Side friend list Side
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis Side friend lis Side friend lis Side
          friend lis Side friend list Side friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lis Side
          friend lis Side friend lis Side friend lis Side friend list Side
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis Side friend lis Side friend lis Side
          friend lis Side friend list Side friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lis Side
          friend lis Side friend lis Side friend lis Side friend list Side
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis Side friend lis Side friend lis Side
          friend lis Side friend list Side friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lis Side
          friend lis Side friend lis Side friend lis Side friend list Side
           friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis Side friend lis Side friend lis Side
          friend lis Side friend list Side friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lis Side
          friend lis Side friend lis Side friend lis Side friend list Side
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lisSide friend lisSide friend lisSide
          friend lisSide friend lisSide friend lisSide friend lisSide friend
          lisSide friend lisSide friend lis 
        </p>*/}
      </div>
      <div className="MessagesPageContainer__individualMessages__bottomBar">
        <div className="MessagesPageContainer__individualMessages__bottomBar__uploadImagesContainer">
          <Button
            type="button"
            className="MessagesPageContainer__individualMessages__bottomBar__uploadImagesContainer__uploadImages"
            variant="contained"
            component="label"
          >
            <i className="fas fa-image fa-2x"></i>
            <input type="file" accept="images/*" hidden />
          </Button>
        </div>
        <div className="MessagesPageContainer__individualMessages__bottomBar__inputHolder">
          <form>
            <SearchInput
              className="MessagesPageContainer__individualMessages__bottomBar__inputHolder__input"
              id="filled-multiline-flexible"
              // label="Multiline"
              multiline
              rowsMax={2}
              variant="filled"
            />
          </form>
        </div>
        <div className="MessagesPageContainer__individualMessages__bottomBar__sendButtonContainer">
          <Button
            variant="contained"
            className="MessagesPageContainer__individualMessages__bottomBar__sendButtonContainer__button"
          >
            <i className="fas fa-paper-plane fa-2x"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};
const FriendsInfo = () => {
  return <div className="MessagesPageContainer__friendsInfo">Friends Info</div>;
};
export default MessagesPage;
