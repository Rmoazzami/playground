import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
        }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
        );

        // const items = await data.json();
        const items = [{name: 'Thundergun'}, {name: "Raygun"}, {name: "HAMR"}];
        console.log(items);
        setItems(items);
    }
  return (
    <div >
        {items.map(item => (
            <h1>{item.name}</h1>
        ))}
    </div>
  );
}

export default Shop;
