import React from 'react'

const Currentpro = () => {
  return (
    <div>
    <div className ='bpro' >
      <h2>My Current Projects</h2>
        <p>
        I want to Improving building my technical skills, I have found through having my own project as it helps with project devlopment and heaps of fun to do with friends.
        </p>
    </div>
    
    <div className= 'larger-Card'>
    
    <div className= 'Card-Heading-Info'>
        <p className= 'pTag-Title' >CLBR.IO</p>
    </div>
    

   <div className= 'Card-info'>
        

        <p className = 'pTag-body'>
        An application that allows users to view a poem at random from a .json file, this was before I knew react native and data bases so I used handlebars. 

        I worked on this with two other students from my cohort and we pair programme this project.    
        </p>
        
        <img src="/images/CBLR-Small.png" alt="CBLR APP Image"/>
      
    <div>
        <a className='pTag-body' href="">Learn More</a> 
    </div>
    </div>

  </div>
 </div>
  
    )
}

export default Currentpro