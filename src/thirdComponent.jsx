import FourthComponent from "./fourthComponent"

 function ThirdComponent({parentComponentMessage, firstComponentMessage,secondComponentMessage})
{
     return (
        <div>
            {parentComponentMessage}
            {firstComponentMessage}
            {secondComponentMessage}
            <FourthComponent parentComponentMessage={parentComponentMessage} firstComponentMessage={firstComponentMessage} secondComponentMessage={secondComponentMessage} thirdComponentMessage={"FourthComponent"} />
        </div>
    )
    
}
export default ThirdComponent 

