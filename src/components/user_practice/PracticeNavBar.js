import {Button, ButtonGroup} from "react-bootstrap";
import '../../css/PracticeNavbar.css'
export default function VerticalNavBar({onFilterSelect}) {
    return (
        <div className="nav_holder" >
            <ButtonGroup vertical className="button-group-class">
            <Button variant="secondary" onClick={()=>onFilterSelect('All')}>All</Button>
                <Button variant="secondary" onClick={()=>onFilterSelect('Review')}>Review</Button>
                <Button variant="secondary" onClick={()=>onFilterSelect('Favourite')}>Favourite</Button>
            </ButtonGroup>
        </div>
    );
}