import {Button, Container, Paper, Table, TableBody, TableCell,
    TableHead, TableRow, Typography} from '@mui/material';
import React from 'react'
import {getOrderDetail} from "@/lib/api";
import formatDate from '@/lib/formatDate';
import Link from 'next/link';
import {notFound} from "next/navigation";

async function OrderDetailPage({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id;
    const order = await getOrderDetail(Number(id));

    if (!order) {
        notFound()
    }

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h5" gutterBottom>
                Order #{order.id} Details
            </Typography>

            <Typography variant="body1" gutterBottom>
                User ID: {order.userId}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Date: {formatDate(order.date)}
            </Typography>

            <Paper sx={{ mt: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price ($)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.products.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell>{p.title}</TableCell>
                                <TableCell>{p.quantity}</TableCell>
                                <TableCell>{(p.price * p.quantity).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Typography variant="h6" sx={{ mt: 2 }}>
                Total: ${order.total.toFixed(2)}
            </Typography>

            <Button
                variant="outlined"
                color="primary"
                component={Link}
                href="/"
                sx={{ mt: 3 }}
            >
                Back to Orders
            </Button>
        </Container>
    )
}

export default OrderDetailPage
