import React from 'react';
import './Events.css'; // Asegúrate de que el archivo Events.css exista en esta ruta

const events = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'Evento 1',
        date: '2023-11-01',
        registrationLink: 'https://example.com/register/1'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'Evento 2',
        date: '2023-12-01',
        registrationLink: 'https://example.com/register/2'
    },
    // Agrega más eventos aquí
];

const Events = () => {
    return (
        <div className="events-container">
            {events.map(event => (
                <div key={event.id} className="event-card">
                    <img src={event.image} alt={event.title} className="event-image" />
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-date">{event.date}</p>
                    <a href={event.registrationLink} className="event-register-button">Registro</a>
                </div>
            ))}
        </div>
    );
};

export default Events;