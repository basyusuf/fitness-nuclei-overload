import React, {Component} from 'react';
import StatsHeader from "../../../../../components/StatsHeader/StatsHeader";
import StatsRow from "../../../../../components/StatsRow/StatsRow";

class FreshStats extends Component {
    render() {
        return (
            <div className="five wide column">
                <StatsHeader text="User Progress Fresh" />
                <StatsRow text="Average push second" time="2.7s" timeStatus={true} />
                <StatsRow text="Average pull second" time="0.9s" timeStatus={true} />
                <StatsRow text="Average rest time" time="1m02s" timeStatus={false}/>
            </div>
        );
    }
}

export default FreshStats;