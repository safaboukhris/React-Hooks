import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState} from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import StarRating from './StarRating';



function App() {
    const [movie,setMovie] = useState([
                /* declaring of our movie list using  useState hook */
        {
            title:'Mary Queen of Scots',
            description: 'Mary Stuart, Queen of Scotland she is married to the French Dauphin at 16 and widowed at 18, she returned to Scotland to reclaim her throne .',
            rating:3,
            poster:'img11.jpg'
        },
        {
            title:'Frozen',
            description: 'When the newly Queen Elsa accidentally uses her power to turn things into ice, her sister Anna teams up with snowman to change the weather condition.',
            rating:3,
            poster:'img4.jpeg'
        },
        {
            title:` Me Before You`,
            description: `Young Louisa "Lou" moves from one job to another for herping family. Her attitude is put to the test when she becomes a caregiver for a paralyzed.`,
            rating:4,
            poster:'img14.jpg'
        },
        {
            title:'Divergent',
            description:  `In a world divided by factions based on virtues, Tris and Four must find out what makes Divergents dangerous before it's too late.`,
            rating:2.5,
            poster:'img5.jfif'
        },
        {
            title:'The Lion King',
            description: `The disney's film is about a young lion Simba, who is the crown prince. When his father dies he takes responsibility as the rightful heir to the throne.`,
            rating: 5,
            poster: 'img2.jpg'
        }, 
        {
            title:` Don't look up`,
            description: `The film tells the story of two astronomers attempting to warn humanity about an approaching comet that will destroy human civilization.`,
            rating:3.5,
            poster:'img9.jpg'
        },
        {
            title:'Raya and the last dragon',
            description: ` Raya and the Last Dragon travels to the fantasy world of Kumandra, where humans and dragons lived together in harmony long ago.`,
            rating:5,
            poster:'img8.jpg'
        },
        {
            title:` Devdas`,
            description: `This is the sweeping tale of two soul mates, childhood sweethearts Devdas and Paro, whose love is thwarted by India's rigid class structure.`,
            rating: 2,
            poster:'img10.jpg'
        },
        {
            title:'Shrek',
            description: ` A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back`,
            rating: 3.4,
            poster:'img7.jpg'
        },
        {
            title:'Koğuştaki Mucize',
            description: `Turkish drama film, Ova, an upcoming bride, becomes emotional as news comes out that capital punishment in Turkey has been abolished. The story then moves to a flashback to a village in 1983.`,
            rating:3.8,
            poster:'img6.jpg'
        },
        
    ])
        /* declaring const with hooks for filter title and rate */
    const [filtreTitle,setFiltreTitle] = useState("")
    const [filtreRating,setFiltreRating] = useState(1)
            /* function for the add button */
    const handleAdd = (newMovie) => {
        setMovie([...movie,newMovie]);
    }
            /* function for filter movies with title */
    const filtreData = (filtered) => {
        setFiltreTitle(filtered)
    }
            /* function for to filter movies with rate */
    const filtreRate = (filtRate) => {
        setFiltreRating(filtRate)
    }

            /* root component */
return (
    <div className="App">
        <div className='input-container'>
            <h2 className='title'> MOVIES  LIST</h2>
            <input className='addInput' type='text' placeholder="Enter your movie's name" onChange={(e) => filtreData(e.target.value)}/>
            <StarRating filtreData={filtreData}  filtreRate={filtreRate}/>
            <AddMovie handleAdd={handleAdd}/>
        </div>
        <MovieList movie={movie.filter((movie) => movie.rating >= filtreRating &&  movie.title.toLocaleLowerCase().includes(filtreTitle.trim().toLowerCase()))}/>
    </div>
);

}

export default App;