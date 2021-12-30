
// --- STYLING FOR WHOLE SITE --- ORGANIZED BY PAGE --- //




// --- SHARED ON ALL PAGES --- // 

// --- ANIMATIONS --- //

export const trans = {
    // time: { duration: .1 },
    initial: { rotate: 0, y: -500, opacity: 0 },
    animate: { rotate: 0, y: 0, opacity: 1 },
    // exit:       { rotate: -30 },
}

// --- STYLES --- //

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(280, 80%, 45%, .95)',
        },
        secondary: {
            main: 'hsla(220, 50%, 55%, .975)',
        },
        info: {
            main: 'hsla(0, 5%, 10%, .9)'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            desktop: 750,
        },
    },
});


export const sxButton = {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.4,
    m: 1,
}




// --- APP --- //

export const sxType = {
    fontFamily: 'default',
}

export const sxAppContainer = {
    // border: '1px solid red',
    display: 'flex',
    position: 'relative',
    mx: 'auto',
    flexDirection: 'column',
    alignContent: 'center',
    maxWidth: '100vw',

}



export const sxHeaderContainer = {

    // shared properties
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: '100vw',
    bgcolor: 'secondary.main',
    zIndex: 200,
    position: 'sticky',
    top: 0,
}

export const sxBodyContainer = {
    // border: '1px solid green',
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%'
    // gap: 1,
}

export const sxCenterText = {
    textAlign: 'center',
}







// --- HEADER ---  // 

// box that contains the header; not sure why i took it out of the h1 tag; 
export const sxHeader = {
    // border: '1px solid gray',
    // fontSize: 38,
    fontWeight: 700,
    lineHeight: .9,
    textAlign: 'center',
    color: 'primary.main',
}

export const sxProfilePhoto = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    height: 145,
    width: 145,
    mx: 'auto',
    mt: 2,
    mb: 3,
    boxSdow: 3,
}


// --- NAV BUTTONS --- // 

export const sxButtonBox = {

    // shared properties
    // border: '1px solid blue',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 1,

    // desktop sizing
    [theme.breakpoints.only('desktop')]: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // mobile sizing
    [theme.breakpoints.only('mobile')]: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
}

export const sxNavLink = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // border: 1,
    // borderColor: 'secondary.main',
    height: 55,
    width: 55,
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: 2,
    color: 'primary.main',

    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: 4,
        border: 1,
        borderColor: 'primary.main',
    }
}





// --- HOME PAGE --- // 

// box properties that holds our movie title and our image together; 
export const sxHomeContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 1,
    mx: 'auto',
    width: '90%',
    p: 2,
    zIndex: 1,

    color: 'info.main',
}; // sxCard

export const sxCardContent = {
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
}

export const sxCoinCard = {
    // border: '1px solid blue',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    // position: 'relative',
    textAlign: 'center',
    p: 1,
    gap: 2,
    width: 150,
    height: 70,
    borderRadius: 2,
    boxShadow: 3,
}


// PROFILE PHOTOS properties being held in the left column
export const sxPhotoBox = {
    // border: '1px solid lightgray',
    width: 60,
    height: 60,
    boxShadow: 1,
    borderRadius: '50%',
    mx: 'auto',
    position: 'relative',
    // cursor: 'pointer',
    left: 0,

    // '&:hover': {
    //     // transform: 'scale(1.1)',
    //     boxShadow: 5,
    // }
};

export const sxRateText = {
    // border: '1px solid black',

    // position: 'relative',

}


// --- ABOUT PAGE --- //

export const sxAboutContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: 1,
    mx: 'auto',
    width: '90%',
    p: 2,
    gap: 20,
    zIndex: 1,

    color: 'info.main',
}

export const sxHeroContent = {
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    width: '100%',
    gap: 10,
    mb: 2,
}

export const sxPopUpDetail = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    position: 'fixed',
    mx: 'auto',
    zIndex: 200,
}

export const sxHeroText = {

    fontWeight: 500,
    color: 'info.main',
}

export const sxAboutBody = {
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    width: '100%',
    gap: 10,
    mb: 2,
}


