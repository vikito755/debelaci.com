import type { FunctionComponent } from "react";

interface LogoProps {
    
}
 
const Logo: FunctionComponent<LogoProps> = () => {
    return ( 
        <img src="/logo.svg" alt="Restaurant logo" width={32} height={32} />
     );
}
 
export default Logo;