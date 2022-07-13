import profileReduser, { addPost, deletePost } from "./profileReducer";

it("new post should be added", () => {
  // 1. test data
  let action = addPost("Hello");
  let state = {
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
        message: "Но ничего, я начал, а значит нужно довести дело до конца 🚀",
        likes: 18,
      },
      {
        id: 5,
        message: "Проверяем как работают BLL и UI в одной связке",
        likes: 18,
      },
    ],
  };

  // 2. action
  let newState = profileReduser(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(6);
});

it("posts length shoud be decrement after delete", () => {
  // 1. test data
  let action = deletePost(1);
  let state = {
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
        message: "Но ничего, я начал, а значит нужно довести дело до конца 🚀",
        likes: 18,
      },
      {
        id: 5,
        message: "Проверяем как работают BLL и UI в одной связке",
        likes: 18,
      },
    ],
  };

  // 2. action
  let newState = profileReduser(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

it("posts length shoudn't be changed if postId incorrect after delete", () => {
  // 1. test data
  let action = deletePost(100);
  let state = {
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
        message: "Но ничего, я начал, а значит нужно довести дело до конца 🚀",
        likes: 18,
      },
      {
        id: 5,
        message: "Проверяем как работают BLL и UI в одной связке",
        likes: 18,
      },
    ],
  };

  // 2. action
  let newState = profileReduser(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});
