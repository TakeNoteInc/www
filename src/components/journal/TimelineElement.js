
import { Button } from '@material-ui/core'


function TimelineElement(props) {
    console.log(props.number)
    console.log(props.chosen)
    return (
        <div className= {props.number == props.chosen  ? "TimelineElement Chosen": "TimelineElement"}>
            <Button 
                fullWidth 
                variant="outlined"  
                color = "inherit" 
            > 
                Week {props.number} 
            </Button>
        </div>
    );
}

export default TimelineElement;
