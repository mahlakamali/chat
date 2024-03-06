import React from "react";
import Chats from "./Chats";

export default function Main({ massageList, avatar }) {
  const chatItems = massageList?.map((e, index) => {
    const isLeft = e.type === "receive";
    return (
      <Chats
        key={index}
        avatarImg={isLeft ? avatar.You : avatar.Me}
        massage={e.massage}
        time={e.time}
        isLeft={isLeft}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">
        {chatItems}
      </div>
    </div>
  );
}
