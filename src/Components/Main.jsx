import imgMain from '../assets/images/illustration-intro.png'
import bgColor from '../assets/images/bg-curvy-desktop.svg'
export function Main(){
    return(
        <div className="container bg">
            <div className='items'>
                <img src={imgMain} />

                
                <h1>All your files in one secure location,</h1> 
                <h1>accessible anywhere.</h1><br/>
                

                <p>Fylo stores all your most important files in one secure location.<br/> 
                    Access them wherever 
                    you need, share and collaborate with</p>
                    
                <p>friends family, and co-workers.</p><br/> 
                    
                
                <button className='btnGet'>Get Started</button>
            </div>
            
            
        </div>
    )
}