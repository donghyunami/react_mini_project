import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {currentUserNameQuery } from "../atoms/user";

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>currentUser: {userName}</div>;
};

export default CurrentUserInfo;
