import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import Row from "./components/Row"
import useMyOrders from "./useMyOrders"
import HOCList from "@/shared/components/wrappers/HOCList"

const LoanIssuedList = () => {
  const { list, isLoading, isSuccess, isError, tableHeaders, role } =
    useMyOrders()

  return (
    <HOCList
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
      length={list.length}
      noLengthMessage={"У вас нет заказов"}
      createLink={``}
      createText=""
    >
      <div className="users__header">
        <h1 className="users__title pages-title">Список заказов</h1>
      </div>
      <div className="loan__block">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map((tableHeader: string) => (
                  <TableCell
                    key={tableHeader}
                    sx={{
                      color: "#384b6e",
                      textTransform: "uppercase",
                    }}
                  >
                    {tableHeader}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row, index) => (
                <Row key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </HOCList>
  )
}

export default LoanIssuedList
