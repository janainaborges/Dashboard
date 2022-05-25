import { Navbar } from "../components/Navbar";

export function Layout({children}){
    return(
        <div style={{display: 'flex'}}>
            <Navbar/>
            <main>{children}</main>
        </div>
    )
}