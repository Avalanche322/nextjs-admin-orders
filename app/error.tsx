"use client";

import { useEffect } from "react";
import { Button, Container, Typography, Box } from "@mui/material";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error("Error caught by global error boundary:", error);
    }, [error]);

    return (
        <Container sx={{ py: 6, textAlign: "center" }}>
            <Typography variant="h4" color="error" gutterBottom>
                Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                {error.message || "An unexpected error occurred."}
            </Typography>
            <Box>
                <Button variant="contained" onClick={() => reset()}>
                    Try Again
                </Button>
            </Box>
        </Container>
    );
}
