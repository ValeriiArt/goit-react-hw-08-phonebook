import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);  
    const navigate = useNavigate();



    return (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <span>Welcome, {name}</span>
            <Button
                variant="outlined"
                type="button" onClick={() => {
                    dispatch(authOperations.logOut());
                    navigate('/');
                }}>
                Sing Out             
            </Button>
        </Stack>
    )
}