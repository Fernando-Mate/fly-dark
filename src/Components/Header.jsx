import logo from '../assets/images/logo.svg'

export function Header(){
    return(
        <div className='header container'>
            <span>
                <img src={logo}/>
            </span>
            <span>
                <ul className='listMenu'>
                   <li>Features</li>
                   <li>Team</li>
                   <li>Sign In</li> 
                </ul>
            </span>
        </div>
        
    )
}