import React from 'react';
import Cards from './Cards'

function ListDisplay(props) {


    let list = props.itemList.items.map(thing => {
        return <Cards
            key={thing.key}
            thing={thing}
        />
    })

    return (
        <div>
            <h4>first item</h4>
            {list}
            <h4>last item</h4>
        </div>
    );

}

export default ListDisplay;