import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // Using the useMultiChatLogic hook to get chat-related properties
  const chatProps = useMultiChatLogic(
    "02094fb3-d8a9-4c77-abc1-edf586afa722",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      {/* MultiChatSocket component to handle chat socket logic */}
      <MultiChatSocket {...chatProps} />

      {/* MultiChatWindow component to display multiple chat windows */}
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
