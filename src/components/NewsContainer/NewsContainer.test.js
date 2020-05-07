import React from 'react'
import NewsContainer from './NewsContainer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('NewsContainer', () => {

 const mockData = [{
     id: 1,
     headline: 'The Who postpones Denver Concert at the Pepsi Center',
     img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
     description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
     url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
 }, {
     id: 2,
     headline: 'Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner',
     img: 'https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376',
     description: 'The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.',
     url: 'https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/'
 }]

    it('holds NewsArticles', () => {
    const { getByText } = render(
        <NewsContainer news={mockData} />
    )
    const headline1 = getByText('The Who postpones Denver Concert at the Pepsi Center')
    const headline2 = getByText('Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner')
    expect(headline1).toBeInTheDocument()
    expect(headline2).toBeInTheDocument()
    expect(mockData).toHaveLength(2);
})
})