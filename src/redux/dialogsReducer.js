const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { name: "polina_timofeenko", color: "#c177ef", id: 1 },
    { name: "yan_blagov", color: "#043653", id: 2 },
    { name: "maria_blagova", color: "#c96436", id: 3 },
    { name: "roman_butsiy", color: "#456782", id: 4 },
  ],
  messages: [
    { text: "Привет ❤️", id: 1 },
    { text: "Здарова", id: 2 },
  ],
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        text: action.message.trim(),
        style: { alignSelf: "end", WebkitAlignSelf: "flex-end" },
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      if (newMessage.text.length > 0 && newMessage.text !== "\n") {
        stateCopy.messages.push(newMessage);
      }
      return stateCopy;
    default:
      return state;
  }
};

export const addMessage = (newMessageText) => ({
  type: ADD_MESSAGE,
  message: newMessageText,
});

export default dialogsReduser;
