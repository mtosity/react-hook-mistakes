import { useEffect, useState } from "react";

interface UserInfo {
  name: string;
  yearBirth: number;
}

const calculateAge = (yearBirth: number) => {
  return new Date().getFullYear() - yearBirth;
};

const DisplayUserInfo = ({ name, yearBirth }: UserInfo) => {
  const [userAge, setUserAge] = useState(0);

  useEffect(() => {
    // Track changes in 'userInfo' prop and calculate user age
    const age = calculateAge(yearBirth);
    setUserAge(age);
  }, [yearBirth]);

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {userAge}</p>
    </div>
  );
};

export const Example2 = () => {
  return <DisplayUserInfo name="John Doe" yearBirth={1990} />;
};
