import React from 'react'
import Form from "next/form";
import {Box, IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {SearchFormReset} from "@/components/SearchFormReset";

function SearchInput({search}: {search?: string}) {
    return (
        <Form action='/' scroll={false} id="search-form">
            <Box sx={{display: 'flex'}}>
                <TextField
                    name='search'
                    defaultValue={search}
                    label="Filter"
                    variant="standard"
                    fullWidth
                />
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <IconButton type="submit">
                        <SearchIcon/>
                    </IconButton>
                    {search &&  <SearchFormReset/> }
                </Box>
            </Box>
        </Form>
    )
}

export default SearchInput
