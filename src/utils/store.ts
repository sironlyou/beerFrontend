import { createEvent, createStore } from "effector";

export const updateUser = createEvent<User>();
export const $user = createStore<User>({
  avatar: "",
  email: "",
  id: "",
  username: "",
}).on(updateUser, (_, newUser) => newUser);
export interface User {
  email: string;
  avatar: string;
  id: string;
  username: string;
}
// $user.watch((state) => console.log(state));
export const updateModal = createEvent<boolean>();
export const $modal = createStore<boolean>(false).on(
  updateModal,
  (_, newModal) => newModal
);
$modal.watch((state) => console.log(state));