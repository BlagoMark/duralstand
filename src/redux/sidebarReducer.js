let initialState = {
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
};

const sidebarReduser = (state = initialState, action) => {
  return state;
};

export default sidebarReduser;
