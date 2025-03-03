import BuisnessSheep from "../../../../assets/BuisnessSheep.svg";

const Notes = () => {
  return (
    <>
      <div>Notes</div>
      <div style={{ position: "absolute", bottom: 0, right: 5 }}>
        <img
          src={BuisnessSheep}
          alt="BuisnessSheep"
          style={{ verticalAlign: "bottom" }}
        />
      </div>
    </>
  );
};

export default Notes;
