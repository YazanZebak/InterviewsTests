import React, { useState } from "react";
import debounce from 'lodash.debounce';
import { useTracker } from "meteor/react-meteor-data";
import { MessagesCollection } from "/imports/api/messages/MessagesCollection";
import { Message } from "./components/messages/Message";
import { MessageFilter } from "./components/messages/MessageFilter";
import { generateMessage } from "../api/messages/MessageGenerator";
import { MessageQueryBuilder } from "../api/messages/MessageQueryBuilder";


export const App = () => {

    const [hasMore, setHasMore] = useState(true);
    const [filter, setFilter] = useState({});

    const messages = useTracker(() =>
        MessagesCollection.find(
            MessageQueryBuilder.buildFilterQuery(filter),
            MessageQueryBuilder.buildSortQuery(filter)
        ).fetch()
    );

    const handleFilter = (e) => {
        if (e.target.name === "date") {
            const newFilter = { [e.target.name]: new Date(e.target.value).toDateString() };
            console.log(newFilter);
            setFilter({ ...filter, ...newFilter });
            return;
        }
        const newFilter = { [e.target.name]: e.target.value };
        setFilter({ ...filter, ...newFilter });
    }

    const fetchNewMessage = () => {
        MessagesCollection.insert(generateMessage());
    }

    window.onscroll = debounce(() => {

        if (!hasMore) return;

        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            fetchNewMessage();
        }

    }, 100);

    return (
        <div className="container">

            <button  type="button" className="pause-button btn btn-primary"
                onClick={() => setHasMore(!hasMore)}>Pause</button>

            <MessageFilter onFilterChange={handleFilter} />

            <div className="row">
                {
                    messages.map(message => (
                        <div key={message.id} className="col-sm-12 col-md-6 col-lg-4">
                            <Message  message={message} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};