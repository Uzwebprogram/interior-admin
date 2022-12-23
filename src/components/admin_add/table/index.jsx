import { useSelector } from "react-redux";
import CommonTable from "../../common/CommonTable";
export default function TableAdd() {
  const adminGetState = useSelector(state => state.adminadd)

    const rows = adminGetState.userGet?.data
    const HeaderRows = [
        {
            id : 1, 
            title : "Name"
        },
        {
            id : 2, 
            title : "Email"
        }
    ]
  return (
        <>
                <CommonTable data={rows} headerData={HeaderRows}/>
        </>
  );
}
