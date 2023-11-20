import React, { useEffect } from "react";

const heavyNetworkMock = {
  timeOut: null as null | number,

  async getSomethingHeavy(heavyData: string) {
    return new Promise<string>((resolve) => {
      console.log("fetching heavy data for - " + heavyData);
      this.timeOut = setTimeout(() => {
        resolve("Data for - " + heavyData);
        console.log("done fetching heavy data");
      }, 3000);
    });
  },

  cancelHeavy() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
      console.log("cancelled fetching heavy data");
    }
  },
};

export const Example3 = () => {
  const [data, setData] = React.useState<string>("");
  const [selectValue, setSelectValue] = React.useState<string>("volvo");
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    heavyNetworkMock.getSomethingHeavy(selectValue).then((data: string) => {
      setData(data);
      setLoading(false);
    });

    return () => {
      heavyNetworkMock.cancelHeavy();
    };
  }, [selectValue]);

  return (
    <div>
      <select
        name="cars"
        id="cars"
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      {loading ? <div>loading...</div> : <div>{data}</div>}
    </div>
  );
};
