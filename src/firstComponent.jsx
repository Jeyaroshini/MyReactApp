import SecondComponent from "./secondComponent"

function FirstComponent({parentComponentMessage})
{
    return (
        <div>{parentComponentMessage} 
        <SecondComponent parentComponentMessage={parentComponentMessage}  firstComponentMessage={"SecondComponent"} />
        </div>
    )
}
export default FirstComponent