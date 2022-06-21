import React, { useState } from "react";

export const MessageFilter = ({ onFilterChange }) => {

    return (
        <form className="row">
            <div className="col-sm-6">

                <div className="form-group">
                    <label>Type</label>
                    <select key="type" className="form-control" name="type" onChange={onFilterChange}>
                        <option value="">Type</option>
                        <option value="Error">Error</option>
                        <option value="Warning">Warning</option>
                        <option value="Info">Info</option>
                        <option value="Verbose">Verbose</option>
                        <option value="Success">Success</option>
                        <option value="Log">Log</option>
                    </select>

                </div>

                <div className="form-group">
                    <label>Source</label>
                    <select key="source" className="form-control" name="source" onChange={onFilterChange}>
                        <option value="">Source</option>
                        <option value="Server">Server</option>
                        <option value="Client">Client</option>
                        <option value="Hacker >_<">Hacker</option>
                        <option value="API">API</option>
                        <option value="User">User</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input key="date" className="form-control" type="date" name="date" onChange={onFilterChange} />
                </div>

            </div>

            <div className="col-sm-6">

                <div className="form-group">
                    <label>Limit</label>
                    <select key="limit" className="form-control" name="limit" onChange={onFilterChange}>
                        <option value="">Limit</option>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Sort</label>
                    <select key="sort" className="form-control" name="sort" onChange={onFilterChange}>
                        <option value="">Sort</option>
                        <option value="1">ASC</option>
                        <option value="-1">DESC</option>
                    </select>
                </div>
            </div>

        </form >
    );
};