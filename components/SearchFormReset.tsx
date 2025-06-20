'use client';

import { IconButton } from "@mui/material";
import Link from "next/link";
import ClearIcon from '@mui/icons-material/Clear';

export const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('#search-form') as HTMLFormElement;

        if(form) form.reset();
    }

    return (
    <IconButton type="reset" onClick={reset}>
        <Link href="/">
            <ClearIcon sx={{color: 'white'}} />
        </Link>
    </IconButton>
    )
}