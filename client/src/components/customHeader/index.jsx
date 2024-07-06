import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

const CustomHeader = ({ chat }) => {
  const convertToIST = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset is +5:30 from UTC
    const istDate = new Date(date.getTime() + istOffset);
    return istDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };

  const formatDescription = (description) => {
    if (description.startsWith("Active")) {
      const dateTimeString = description.replace("Active ", "");
      return `Active ${convertToIST(dateTimeString)}`;
    }
    return description;
  };

  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{formatDescription(chat.description)}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
