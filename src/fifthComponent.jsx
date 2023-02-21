import SixthComponent from "./sixthComponent"

function FourthComponent({parentComponentMessage, firstComponentMessage,secondComponentMessage,thirdComponentMessage,fourthComponentMessage})
{
    return (
        <div>
        {parentComponentMessage}
        {firstComponentMessage}
        {secondComponentMessage}
        {thirdComponentMessage}
        {fourthComponentMessage}
        <SixthComponent parentComponentMessage={parentComponentMessage} firstComponentMessage={firstComponentMessage} secondComponentMessage={secondComponentMessage} thirdComponentMessage={thirdComponentMessage} fourthComponentMessage={fourthComponentMessage} fifthComponentMessage={"FifthComponent"} />
        </div>
    )
}
export default FourthComponent