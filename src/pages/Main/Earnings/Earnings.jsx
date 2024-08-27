import React from 'react';
import Status from '../../../Components/Status';
import FullRecentTransaction from '../../../Components/FullRecentTransaction';
import EarningStatus from '../../../Components/EarningStatus';
import RecentTransaction from '../../../Components/RecentTransaction';

const Earnings = () => {
    return (
        <div>
             <EarningStatus/>
             {/* <RecentTransaction/> */}
             <FullRecentTransaction/>
        </div>
    );
}

export default Earnings;
