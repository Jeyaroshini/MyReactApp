
import ThirdComponent from "./thirdComponent"
function SecondComponent({parentComponentMessage, firstComponentMessage})
{
    return (
        <div>
            {parentComponentMessage}
            {firstComponentMessage}
            <ThirdComponent parentComponentMessage={parentComponentMessage} firstComponentMessage={firstComponentMessage} secondComponentMessage={"ThirdComponent"} />
        
        </div>
    )

}
export default SecondComponent