import React from 'react';
import NewsArticle from './NewsArticle';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
   const mockData = {
       id: 1,
       headline: 'The Who postpones Denver Concert at the Pepsi Center',
       img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
       description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
       url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
   }

   it('should display information', () => {
    const { getByText, getByAltText } = render( < NewsArticle img = {mockData.img}
            headline = {mockData.headline}
            description = {mockData.description}
            url = {mockData.url}
            key = {mockData.id}
            />);
        expect(getByAltText("The Who postpones Denver Concert at the Pepsi Center")).toBeInTheDocument();
        expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
        expect(getByText('Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.')).toBeInTheDocument();
        expect(getByText("Read Article")).toBeInTheDocument();
        fireEvent.click(getByText("Read Article"));
    })
})