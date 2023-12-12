

function Footer(){
    return(
        <footer>
           {/*  &copy; means copyright symbol */}

            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    )
}

export default Footer