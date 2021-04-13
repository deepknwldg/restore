import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: "Production-Ready Microservices",
            author: "Susan J. Fowler"
        },
        {
            id: 2,
            title: "Releas It!",
            author: "Michael T. Nygard"
        }
    ];
    return (
        <BookList books={books} />
    )
}

export default HomePage;
