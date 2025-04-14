import React, { useEffect, useState } from 'react';
import { ContentData } from '../../assets/assets';
import './Content.css';

function Content({ selectedId }) {
    const [navItem, setNavItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedId !== null) {
            setLoading(true);
            setError(null);
            fetch("http://localhost:8000/navitems")
                .then((response) => response.json())
                .then((data) => {
                    const item = data.items.find((nav) => nav.id === selectedId);
                    setNavItem(item || null);
                })
                .catch((error) => {
                    console.error("Error fetching nav items:", error);
                    setError("Failed to load navigation items");
                })
                .finally(() => setLoading(false));
        } else {
            setNavItem(null);
        }
    }, [selectedId]);

    return (
        <div className='Content'>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {navItem ? (
                ContentData
                    .filter((item) => item.id === selectedId)
                    .map((item) => {
                        return (
                            <div key={item.id} className='content-item'>
                                <p>ID: {selectedId}</p>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        );
                    })
            ) : (
                !loading && !error && <p>No item selected or not found</p>
            )}
        </div>
    );
}

export default Content;