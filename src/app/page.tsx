import Home from '@/markdown/welcome.mdx'
import Error from '@/markdown/error.mdx'
import "./globals.css";

var cur: number = 0;

export default function Head(){
  return (
    <body>
      <div id="navbar">
        <a id="name" href="#">Yash Jain</a>

        <a id="contact">Contact</a>
        
        
        <a id="github" href="https://github.com/yashjain128">Github</a>

      </div>
      {Body()}
    </body>
  )
}

export function Body(): JSX.Element {

  if(cur===0){
    return (
      <div className='center'>
        <Home/>
      </div>
    )
  }
  else{
    return <Error/>
  }

}





