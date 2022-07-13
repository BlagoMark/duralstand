import { rerender } from "..";
import dialogsReduser from "./dialogsReducer";
import profileReduser from "./profileReducer";
import sidebarReduser from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      profile: {
        avatar:
          "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800",
        wallpaper:
          "https://images.unsplash.com/photo-1651780779099-d2793929d51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        name: "mark_blagov",
        birthday: "13 января",
        city: "Манхэттен",
      },
      newPostText: "",
      posts: [
        {
          id: 1,
          message: "Приветствую, мои хорошие",
          likes: 12,
        },
        {
          id: 2,
          message: "Я тут решил бахнуть соцсетку",
          likes: 45,
        },
        {
          id: 3,
          message:
            "Но оказалось, что для этого надо учить реакт, а это довольно замудренная штука",
          likes: 8,
        },
        {
          id: 4,
          message:
            "Но ничего, я начал, а значит нужно довести дело до конца 🚀",
          likes: 18,
        },
        {
          id: 5,
          message: "Проверяем как работают BLL и UI в одной связке",
          likes: 18,
        },
      ],
    },

    dialogsPage: {
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
      newMessageText: "",
    },

    sidebar: {
      friends: [
        {
          avatarImage:
            "https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png",
          name: "polina_timofeenko",
          color: "#c177ef",
          id: 1,
        },
        {
          avatarImage:
            "https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png",
          name: "yan_blagov",
          color: "#043653",
          id: 2,
        },
        {
          avatarImage:
            "https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png",
          name: "maria_blagova",
          color: "#c96436",
          id: 3,
        },
        {
          avatarImage:
            "https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png",
          name: "roman_butsiy",
          color: "#456782",
          id: 4,
        },
      ],
    },
  },
  _rerender() {},
  _subscribe(observer) {
    this._rerender = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    rerender(this._state);
  },
};

export default store;
