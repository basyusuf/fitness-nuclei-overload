import React, {Component} from 'react';
import StatsHeader from "../../../../../components/StatsHeader/StatsHeader";
import StatsRow from "../../../../../components/StatsRow/StatsRow";

class AvgStats extends Component {
    render() {
        return (
            <div className="five wide column">
                <StatsHeader text="User Progress Average" />
                <StatsRow text="Average push second" time="2.7s" timeStatus={true} />
                <StatsRow text="Average pull second" time="1.1s" timeStatus={false} />
                <StatsRow text="Average rest time" time="54s" timeStatus={true}/>
            </div>
        );
    }
}

export default AvgStats;