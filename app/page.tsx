import { TableContainer, Box, Table, TableHead, TableRow, TableCell, TableBody, Paper, Link, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchInput from "@/components/SearchInput";
import {getOrdersWithTotal} from "@/lib/api";
import formatDate from "@/lib/formatDate";

export default async function Home({searchParams}: { searchParams: Promise<{search?: string}> }) {
    const search = (await searchParams).search || '';

    let cart = await getOrdersWithTotal()

    if(search) {
        cart = cart.filter(cart => cart.id === Number(search) || cart.userId === Number(search))
    }

  return (
    <Container sx={{py: 5, mt: 5}}>
      <Typography variant="h4" gutterBottom>
        Orders Dashboard
      </Typography>

      <Box sx={{my: 5}}>
        <SearchInput search={search} />
      </Box>

      {cart.length ? <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">User ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Total price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
                <TableRow
                    key={row.id}
                    hover
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component="th" scope="row">
                    <Link href={`/orders/${row.id}`} style={{ color: "#1976d2", textDecoration: "none" }}>{row.id}</Link>
                  </TableCell>
                  <TableCell align="right">{row.userId}</TableCell>
                  <TableCell align="right">{formatDate(row.date)}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> : (
          <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
            <Typography>No Data :(</Typography>
          </Box>
      )}
    </Container>
  );
}
