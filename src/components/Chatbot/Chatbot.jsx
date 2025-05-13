import React, { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react"; // Optional icons from lucide-react

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-violet-600 p-4 rounded-full shadow-lg text-white hover:bg-violet-700"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-violet-600 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="font-semibold">Chat with us</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-64 overflow-y-auto text-gray-700">
            <p>Hello! How can we assist you today?</p>
          </div>

          {/* Message Input */}
          <div className="flex items-center border-t p-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-violet-600 p-3 rounded-r-md text-white hover:bg-violet-700">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
