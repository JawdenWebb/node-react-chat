import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
// const dotenv = require("dotenv").config();
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "f60b80ec-e8ba-48cc-9d76-bb78a710b0bd",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />;
    </div>
  );
};

export default ChatsPage;
