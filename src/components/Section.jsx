import { Children } from "react"


const Section = ({
    className,
    id,
    customPaddings,
    children
}) => {
  return (
    <div id={id} 
    className={`relative top-0 bottom-0 left-0 right-0  ${customPaddings||`w-full    ${className||'bg-gray-300'}`}`}>

        {children}
            
    </div>
  )
}

export default Section