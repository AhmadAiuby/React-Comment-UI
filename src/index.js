import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommnentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments"> 
            <ApprovalCard>
                <CommentDetail author= "Sam" timeAgo= "Today at 4:50PM" text="Thet's so funny!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author= "Alex" timeAgo= "Today at 9:00AM" text="Cool" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author= "Jane" timeAgo= "Yesterday at 6:00PM" text="LOL" avatar={faker.image.avatar()}/>
            </ApprovalCard>
           
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
