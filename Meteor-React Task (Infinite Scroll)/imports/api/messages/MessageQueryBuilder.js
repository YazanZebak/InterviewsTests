

export class MessageQueryBuilder {
    
    static buildFilterQuery = (filter) => {
        let query = { $and: [] };
        if (filter.type && filter.type != "") query.$and.push({ type: filter.type });
        if (filter.source && filter.source != "") query.$and.push({ source: filter.source });
        if (filter.date && filter.date != "" && filter.date != "Invalid Date") query.$and.push({ date: filter.date });
        if (!query.$and.length) query = {};
        return query;
    }

    static buildSortQuery = (filter) => {
        let query = { sort: { date: -1 } };
        if (filter.sort && filter.sort != "") query.sort = { date: +filter.sort };
        if (filter.limit && filter.limit != "") query.limit = +filter.limit;
        return query;
    }

}