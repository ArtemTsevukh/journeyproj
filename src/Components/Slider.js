import React from 'react';
import { Carousel } from 'react-bootstrap';
import laos from '../laooos.jpg'
import ko from '../DailyPhotos/2.jpg'
import kg from '../DailyPhotos/3.jpg'
import a from '../DailyPhotos/4.jpg'
import b from '../DailyPhotos/5.jpg'
import c from '../DailyPhotos/6.jpeg'
import d from '../DailyPhotos/7.jpg'
import e from '../DailyPhotos/8.jpg'
import r from '../DailyPhotos/9.jpg'
import t from '../DailyPhotos/10.jpg'
import y from '../DailyPhotos/12.jpg'
import u from '../DailyPhotos/11.jpg'

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={laos}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Laos</h3>
                        <p>Upon arrival, meet your driver at the airport and check into Satri House.\n\nHave a brilliant time!</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px', 'width': '1000px'}}>
                <img
                    className=''
                    src={ko}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Walking tour of Luang Prabang</h3>
                        <p>10am - Your local guide will pick you up from your hotel to take you aroundLuang Prabang, a beautiful UNESCO town. \n\nCaught in the middle of two rivers, the gorgeous sleepy UNESCO-protected town of Luang Prabang is the kind of place that you’ll just want to stay longer (we apologise about that in advance!)</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={kg}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Morning cruise to Pak Ou Caves</h3>
                        <p>9:30am - You will be picked up by your driver to enjoy a morning Mekong cruise to Pak Ou Caves. \n\nOne of the most respected holy sites in Laos; Pak Ou Caves have a history dating back thousands of years and are packed with over 4,000 Buddha icons</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=''
                    src={a}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Breakfast at Kuang Si waterfalls</h3>
                        <p>Enjoy a stunning local breakfast at the Kuang Si waterfalls. This morning we avoid the crowds and take you to a beautiful waterfall spot for a gourmet picnic – this is one of the most photographed spots in Laos and you will be amazed to see it is not just a trick of Photoshop – the water really</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={b}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Last day in Luang Prabang</h3>
                        <p>This day is free for you to explore Luang Prabang. This small town is perfect for exploring on foot, our guide of the town is packed full of ideas – places to go, pretty streets to explore, restaurants to try and some of the best artisan shops in town.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={c}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fly to Vietnam</h3>
                        <p>Fly to Vietnam and settle into your beautiful hotel in Hanoi. This vibrant and fascinating capital is the more ‘traditional’ of the Vietnamese cities with a thriving Old Quarter, a huge selection museums and some of the best street food and cuisine of the country.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={d}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Explore hidden Hanoi</h3>
                        <p>10am - Your expert local guide will pick you up to take you exploring around the hidden wonders Hanoi has to offer. \n\nToday you will explore Hanoi like a local; walk down the capital’s winding streets with a private walking</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={e}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ho Chi Minh’s Mausoleum</h3>
                        <p>Visit the stunning Ho Chi Minh’s Mausoleum, a place of pilgrimage for so many Vietnamese. Something a little bit different but here lies the body of the much-loved ex Vietnamese leader</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={r}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Explore Trang An</h3>
                        <p>Explore scenic Trang An and take a bike ride on the way to Ninh Binh. Often known as “inland Halong Bay”, this region boasts hundreds of islets set in a dramatic rice paddy and river setting.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={t}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cuc Phuong National Park</h3>
                        <p>11am - Your driver will pick you up to take you on a visit to the Cuc Phuong National Park  the cave of prehistoric man. \n\nWith 307 species of bird, 133 species of mammal, 122 species of reptile and more than 2000 species of plant, this national park is one Vietnam’s most important protected areas</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={y}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Hoi An!</h3>
                        <p>Upon arrival your driver will take you to the hotel, which is located in the centre of town and has spa and wellness at its core. Every day you receive a free ‘wellness journey’ at the hotel’s spa that includes a 50 minutes massage.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '1000px'}}>
                <img
                    className=''
                    src={u}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Explore Hoi An</h3>
                        <p>Spend the next 6 Days exploring the beautiful town and nearby beach of Hoi An. This wonderful UNESCO-heritage protected town has some of the best food, shopping and architecture of Vietnam.</p>
                    </Carousel.Caption>
            </Carousel.Item>
          

            
        </Carousel>
    )
}