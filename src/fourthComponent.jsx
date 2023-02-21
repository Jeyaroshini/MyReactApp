import FifthComponent from './fifthComponent'
function FourthComponent({parentComponentMessage, firstComponentMessage,secondComponentMessage,thirdComponentMessage})
{
    return (
        <div>
        {parentComponentMessage}
        {firstComponentMessage}
        {secondComponentMessage}
        {thirdComponentMessage}
        <FifthComponent parentComponentMessage={parentComponentMessage} firstComponentMessage={firstComponentMessage} secondComponentMessage={secondComponentMessage} thirdComponentMessage={thirdComponentMessage} fourthComponentMessage={"FifthComponent"} />
        </div>
    )
}
export default FourthComponent