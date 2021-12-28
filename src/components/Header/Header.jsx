
import { useHistory } from 'react-router-dom';

// --- MUI --- //
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

// --- STYLES --- // 
import {
    sxHeader,
    sxProfilePhoto
} from '../App/App.style';


function Header() {

    const history = useHistory();

    return (
        <Box onClick={() => history.push('/')} sx={{cursor: 'pointer'}}>

            <Typography sx={sxHeader}>ERIC MEINZER</Typography>

            <Tooltip title="That's Me!" placement="left">
                <CardMedia sx={sxProfilePhoto}
                    component="img"
                    image="images/eric.jpg"
                    alt="super handsome photo of Eric"
                />
            </Tooltip>
        </Box>
    )
}; // Header

export default Header;