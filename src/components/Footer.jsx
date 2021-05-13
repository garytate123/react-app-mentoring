import React from 'react';

let n = new Date();
let year = n.getFullYear();

function Footer() {
    return (
    
       <footer >
           Copyright &copy; {year} | GST Software ltd
       </footer>
    )
}

export default Footer;