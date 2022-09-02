import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, Link } from "react-router-dom";
const pages = ['Trade', 'Earn', 'Win','NFT','...'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Headers = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
  
       <header className="headertop">
     <div className="container">
        <div className="header-part1">
        <div className="header-icon">
            <h3 href ="/" className="PancakeSwap">PancakeSwap</h3>
        </div>
       
        <div className="navigation">
            <ul>
             <li><Link to ='/' >Trade</Link></li> 
             <li> <Link to = '/win'>win
                    </Link></li>  
                  <li>  <Link to="/Earn"> Earn</Link></li>
                  
                {/* <li><a href="#">Earn</a><ul className="dropdown">
                    <li><a href="#">Sub-1</a></li>
                    <li><a href="#">Sub-2</a></li>
                    <li><a href="#">Sub-3</a></li>
                  </ul></li>
                <li><a href="#">Win</a><ul className="dropdown">
                    <li><a href="#">Sub-1</a></li>
                    <li><a href="#">Sub-2</a></li>
                    <li><a href="#">Sub-3</a></li>
                  </ul></li>
                <li><a href="#">NFt</a><ul className="dropdown">
                    <li><a href="#">Sub-1</a></li>
                    <li><a href="#">Sub-2</a></li>
                    <li><a href="#">Sub-3</a></li>
                  </ul></li>
                <li><a href="#">...<span style={{padding:'1px 10px',background : 'yellow' ,borderRadius: '50%', marginLeft:' 5px'}}></span></a><ul className="dropdown">
                    <li><a href="#">Sub-1</a></li>
                    <li><a href="#">Sub-2</a></li>
                    <li><a href="#">Sub-3</a></li>
                  </ul></li> */}
              </ul>
        </div>
     </div>
     <div className="header-part1">
        <div className="header-part-icon" > <i>$3.828</i><i className="fa-solid fa-earth-asia"></i>
            <i className="fa-solid fa-gear"></i>
           
            <button className="header-button">Connect Wallet</button>
        </div>
     </div>
     </div>
    </header>
    
    // <AppBar sx={{backgroundColor:'#fff'}}> 
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="/"
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'none', md: 'flex' },
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.1rem',
    //           color: '#000',
    //           textDecoration: 'none',
    //         }}
    //       >
    //        PancakeSwap
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },color:'#000'
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <AdbIcon sx={{ display: { xs: 'flex', md: 'none' ,color:'#000' }, mr: 1 }} />
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href=""
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'flex', md: 'none' },
    //           flexGrow: 1,
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: '#000',
    //           textDecoration: 'none',
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //                 <Link to="/">Home</Link>
            
    //      {/* <nav>
    //             <ul>
    //               <li>
    //                 <Link to="/">Home</Link>
    //               </li>
    //               <li>
    //                 <Link to="/Earn">Earn</Link>
    //               </li>
    //               <li>
    //                 <Link to="/Win">Win</Link>
    //               </li>
    //             </ul>
    //       </nav>
    //        <Outlet /> */}
            
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: '45px'
    //          }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           {settings.map((setting) => (
    //             <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //         <Button variant="contained" color="success">
    //             Connect Wallet
    //         </Button>
    //       </Box>
    //     </Toolbar>
       
    //   </Container>
    // </AppBar>
  );
};
export default Headers;
