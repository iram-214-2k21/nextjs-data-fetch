export default function NotFoundPage(){
    return(
        <div style={{textAlign: "center",padding:"50px"}}>
            <h1 style={{fontSize:"3rem",color: "#ff6347"}}>
                404-Page not found
            </h1>
            <p style={{fontSize:"1.2rem"}}>
                Oops!This page what you are loking for does not exist.
            </p>
            <a href="/" style={{color:"#42ffca",textDecoration:"underline"}}>
            Go back to home
            </a>
        </div>
    );
}