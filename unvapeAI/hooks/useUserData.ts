import { useEffect, useState } from "react";

export type UserData = {
  name: string;
  daysVapeFree: number;
  dailyCost: number;
  healthStatus: string;
  dailyMotivation: string;
};

const defaultData: UserData = {
  name: "",
  daysVapeFree: 0,
  dailyCost: 5,
  healthStatus: "",
  dailyMotivation: "",
};

export function useUserData() {
  const [userData, setUserData] = useState<UserData>(defaultData);
  const [moneySaved, setMoneySaved] = useState(0);

  useEffect(() => {
    // Replace with DB or async storage
    const fetchUserData = async () => {
      const mockName = "Glaucio Alexandre"; // from onboarding or db
      const mockMotivation = "Your future self will thank you for quitting today.";
      setUserData({
        name: mockName,
        daysVapeFree: 3,
        dailyCost: 5,
        healthStatus: "Blood pressure normalizing",
        dailyMotivation: mockMotivation,
      });
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    setMoneySaved(userData.daysVapeFree * userData.dailyCost);
  }, [userData.daysVapeFree, userData.dailyCost]);

  const resetDays = () =>
    setUserData((prev) => ({ ...prev, daysVapeFree: 0 }));

  return { userData, setUserData, moneySaved, resetDays };
}
