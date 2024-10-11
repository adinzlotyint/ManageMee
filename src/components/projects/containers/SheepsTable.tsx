import "../../../styles/SheepsTable.css";
import SmallSheep from "../../../assets/SmallSheep";

const SheepsTable = () => {
  return (
    <>
      <div className="absolute bottom-0">
        <SmallSheep />
      </div>
      <div className=" wrapper">
        <table className="w-full">
          <colgroup>
            <col className="border-r-[3px] border-black" />
            <col className="" />
          </colgroup>
          <thead>
            <tr>
              <th scope="column">Sheeps</th>
              <th scope="column" className="w-[20%]">
                MDs
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>//TBA//</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default SheepsTable;
