import HappySheep from "../../../../assets/HappySheep.svg";

const InvoicingDetails = () => {
  return (
    <>
      <div>Invoicing details</div>
      <div style={{ position: "absolute", bottom: 0, right: "1.25rem" }}>
        <img
          src={HappySheep}
          alt="HappySheep"
          style={{ verticalAlign: "bottom" }}
        />
      </div>
    </>
  );
};

export default InvoicingDetails;
