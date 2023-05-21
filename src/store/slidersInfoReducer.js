const defaultState = {
    houseSlider: [
        {
            id: 1,
            width: 328,
            images: [{
                name: 'owner-6.png',
                left: ''
            },
            {
                name: 'owner-7.png',
                left: '30px'
            },
            {
                name: 'owner-1.png',
                left: '60px'
            }],
            title: '1K+ People',
            subtitle: 'Successfully Getting Home',
        },
        {
            id: 2,
            width: 201,
            images: [{
                name: 'owner-9.png',
                left: ''
            }],
            title: '56 Houses',
            subtitle: 'Sold Monthly',
        },
        {
            id: 3,
            width: 298,
            images: [{
                name: 'owner-8.png',
                left: ''
            }],
            title: '4K+',
            subtitle: 'People Looking for New Homes',
        },
    ],
    featuredHouse: [
        {
            id: 1,
            img: 'item-1.png',
            name: 'Roselands House',
            price: '$ 35.000.000',
            ownerImg: 'owner-1.png',
            title: 'Dianne Russell',
            subtitle: 'Manchester, Kentucky',
            category: 'House',
            chapter: 'Popular',
        },
        {
            id: 2,
            img: 'item-2.png',
            name: 'Woodlandside',
            price: '$ 20.000.000',
            ownerImg: 'owner-2.png',
            title: 'Robert Fox',
            subtitle: 'Dr. San Jose, South Dakota',
            category: 'House',
            chapter: 'New House',
        },
        {
            id: 3,
            img: 'item-3.png',
            name: 'The Old Lighthouse',
            price: '$ 44.000.000',
            ownerImg: 'owner-3.png',
            title: 'Ronald Richards',
            subtitle: 'Santa Ana, Illinois',
            category: 'House',
            chapter: 'Best Deals',
        },
        {
            id: 4,
            img: 'item-4.png',
            name: "Cosmo's House",
            price: '$ 22.000.000',
            ownerImg: 'owner-4.png',
            title: 'Jenny Wilson',
            subtitle: 'Preston Rd. Inglewood, Maine 98380',
            category: 'House',
            chapter: 'Popular',
        }, 
        {
            id: 5,
            img: 'item-5.jpg',
            name: 'Seaside Villa',
            price: '$ 72.000.000',
            ownerImg: 'owner-5.jpg',
            title: 'Emma Davis',
            subtitle: 'Brighton, England',
            category: 'Villa',
            chapter: '',
        },
        {
            id: 6,
            img: 'item-6.png',
            name: 'Luxury Villa',
            price: '$ 67.000.000',
            ownerImg: 'owner-6.png',
            title: 'Sophia Anderson',
            subtitle: 'Los Angeles, California',
            category: 'Villa',
            chapter: 'Popular',
        }, 
        {
            id: 7,
            img: 'item-7.jpg',
            name: 'City Apartment',
            price: '$ 2.500.000',
            ownerImg: 'owner-7.png',
            title: 'Michael Thompson',
            subtitle: 'New York City, New York',
            category: 'Apartment',
            chapter: 'Best Deals',
        },
        {
            id: 8,
            img: 'item-8.jpg',
            name: 'Penthouse Suite',
            price: '$ 15.000.000',
            ownerImg: 'owner-8.png',
            title: 'Alexandra Lee',
            subtitle: 'Sydney, Australia',
            category: 'Apartment',
            chapter: 'New House',
        },
        {
            id: 9,
            img: 'item-9.jpg',
            name: 'Modern Mansion',
            price: '$ 37.000.000',
            ownerImg: 'owner-6.png',
            title: 'Olivia Parker',
            subtitle: 'Beverly Hills, California',
            category: 'House',
            chapter: '',
        },
    ],
    seeReview: [
        {
            id: 1,
            image: 'house-1.png',
            title: 'My house sold out fast!',
            comment: 'I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
            ownerImg: 'avatars/owner-3.png',
            ownerName: 'Courtney Henry',
            ownerJob: 'CEO Andarafish',
            grade: '4.3',
        },
        {
            id: 2,
            image: 'house-2.png',
            title: 'Best! I got the house I wanted through Hounter',
            comment: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
            ownerImg: 'avatars/owner-1.png',
            ownerName: 'Dianne Russell',
            ownerJob: 'Manager Director',
            grade: '4.6',
        },
        {
            id: 3,
            image: 'house-3.png',
            title: 'Through the Hounter, I can get a house for my self',
            comment: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
            ownerImg: 'avatars/owner-6.png',
            ownerName: 'Esther Howard',
            ownerJob: 'Head of Marketing',
            grade: '4.6',
        },
    ],
    tipsTrickItems:[
        {
            id: 1,
            img: 'item-1.png',
            ownerImg: 'owner-1.png',
            ownerName: 'Dianne Russell',
            title: 'The things we need to check when we want to buy a house',
            subtitle: '',
            time: '4 min',
            date: '25 Apr 2021'
        },
        {
            id: 2,
            img: 'item-2.png',
            ownerImg: 'owner-10.png',
            ownerName: 'Courtney Henry',
            title: '7 Ways to distinguish the quality of the house we want to buy',
            subtitle: '',
            time: '6 min',
            date: '24 Apr 2021'
        },
        {
            id: 3,
            img: 'item-3.png',
            ownerImg: 'owner-11.png',
            ownerName: 'Darlene Robertson',
            title: 'The best way to know the quality of the house we want to buy',
            subtitle: '',
            time: '2 min',
            date: '2 min read | 24 Apr 2021'
        },
        {
            id: 4,
            img: 'item-4.png',
            ownerImg: 'owner-12.png',
            ownerName: 'Cameron Williamson',
            title: '12 Things to know before buying a house',
            subtitle: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
            time: '8 min',
            date: '25 Apr 2021'
        },
    ],
}

export default function sliderInfoReducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}